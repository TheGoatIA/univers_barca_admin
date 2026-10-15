import { useQuery } from '@tanstack/react-query';
import { Activity, Database, Server, Timer } from 'lucide-react';
import { healthApi } from '@/api/health.api';
import { PageHeader } from '@/components/shared/PageHeader';
import { StatsCard } from '@/components/shared/StatsCard';
import { Skeleton } from '@/components/ui/skeleton';
import { formatUptime } from '@/lib/utils';

export default function DashboardPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['health', 'deep'],
    queryFn: healthApi.deep,
    refetchInterval: 30_000,
  });
  return (
    <>
      <PageHeader title="Tableau de bord" description="Vue d'ensemble de la plateforme." />
      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      ) : isError || !data ? (
        <p role="alert" className="rounded-md bg-error/10 p-4 text-error">
          Impossible de joindre l'API.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            label="État de l'API"
            value={data.status === 'ok' ? 'Opérationnelle' : 'Dégradée'}
            icon={Activity}
            hint={`Version ${data.version}`}
          />
          <StatsCard
            label="MongoDB"
            value={data.checks.mongo === 'up' ? 'Connecté' : 'Hors ligne'}
            icon={Database}
          />
          <StatsCard
            label="Redis"
            value={data.checks.redis === 'up' ? 'Connecté' : 'Hors ligne'}
            icon={Server}
          />
          <StatsCard
            label="Disponibilité"
            value={formatUptime(data.uptime)}
            icon={Timer}
            hint="Depuis le dernier démarrage"
          />
        </div>
      )}
    </>
  );
}
