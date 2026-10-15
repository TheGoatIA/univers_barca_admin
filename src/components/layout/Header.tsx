import { LogOut, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useUiStore } from '@/store/uiStore';

const ROLE_LABEL = {
  'content-manager': 'Gestionnaire de contenu',
  moderator: 'Modérateur',
  'super-admin': 'Super-administrateur',
} as const;

export const Header = () => {
  const { admin, logout } = useAuth();
  const theme = useUiStore((s) => s.theme);
  const setTheme = useUiStore((s) => s.setTheme);
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  return (
    <header className="flex h-16 items-center justify-between border-b border-line bg-bg px-6">
      <div className="text-sm text-content-2">Espace sécurisé</div>
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          onClick={() => setTheme(theme === 'dark' || isDark ? 'light' : 'dark')}
        >
          {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </Button>
        {admin && (
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold leading-tight">{admin.name}</p>
            <p className="text-xs text-content-2">{ROLE_LABEL[admin.role]}</p>
          </div>
        )}
        <Button variant="outline" size="sm" onClick={() => void logout()}>
          <LogOut className="size-4" aria-hidden /> Déconnexion
        </Button>
      </div>
    </header>
  );
};
