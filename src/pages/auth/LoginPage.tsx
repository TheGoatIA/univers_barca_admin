import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';
import { authApi } from '@/api/auth.api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { errorMessage } from '@/lib/axios';
import { useAuthStore } from '@/store/authStore';
import axios from 'axios';

const schema = z.object({
  email: z.string().min(1, "L'email est requis").email('Email invalide'),
  password: z.string().min(1, 'Le mot de passe est requis'),
  totp: z
    .string()
    .regex(/^\d{6}$/, 'Code à 6 chiffres')
    .optional()
    .or(z.literal('')),
});
type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const setSession = useAuthStore((s) => s.setSession);
  const admin = useAuthStore((s) => s.admin);
  const [needsTotp, setNeedsTotp] = useState(false);
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const login = useMutation({
    mutationFn: (v: FormValues) =>
      authApi.login({
        email: v.email,
        password: v.password,
        totp: v.totp || undefined,
      }),
    onSuccess: ({ admin: a, accessToken }) => {
      setSession(a, accessToken);
      navigate((location.state as { from?: string } | null)?.from ?? '/', {
        replace: true,
      });
    },
    onError: (e) => {
      if (axios.isAxiosError(e) && e.response?.data?.error?.code === 'TOTP_REQUIRED') {
        setNeedsTotp(true);
        return;
      }
      toast.error(errorMessage(e));
    },
  });

  if (admin) return <Navigate to="/" replace />;

  return (
    <div className="grid min-h-screen place-items-center p-6" style={{ background: 'var(--hero)' }}>
      <form
        onSubmit={handleSubmit((v) => login.mutate(v))}
        className="w-full max-w-md space-y-5 rounded-xl bg-surface-2 p-8 shadow-3"
        noValidate
      >
        <div>
          <img src="/logo.png" alt="Univers Barça" className="mb-4 size-16 object-contain" />
          <h1 className="text-4xl">Connexion</h1>
          <p className="mt-2 text-content-2">Back-office Univers Barça — accès réservé.</p>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-[13px] font-semibold">
            Email professionnel
          </label>
          <Input
            id="email"
            type="email"
            autoComplete="username"
            invalid={!!formState.errors.email}
            {...register('email')}
          />
          {formState.errors.email && (
            <p className="text-xs text-error">{formState.errors.email.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <label htmlFor="password" className="text-[13px] font-semibold">
            Mot de passe
          </label>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            invalid={!!formState.errors.password}
            {...register('password')}
          />
          {formState.errors.password && (
            <p className="text-xs text-error">{formState.errors.password.message}</p>
          )}
        </div>
        {needsTotp && (
          <div className="space-y-1.5">
            <label htmlFor="totp" className="text-[13px] font-semibold">
              Code de vérification (2FA)
            </label>
            <Input
              id="totp"
              inputMode="numeric"
              maxLength={6}
              autoComplete="one-time-code"
              invalid={!!formState.errors.totp}
              {...register('totp')}
            />
            {formState.errors.totp && (
              <p className="text-xs text-error">{formState.errors.totp.message}</p>
            )}
          </div>
        )}
        <Button type="submit" size="lg" className="w-full" loading={login.isPending}>
          Se connecter
        </Button>
      </form>
    </div>
  );
}
