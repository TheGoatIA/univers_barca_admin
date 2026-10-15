import type { ColumnDef } from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';
import { Search, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { playersApi } from '@/api/players.api';
import { DataTable } from '@/components/shared/DataTable';
import { EmptyState } from '@/components/shared/EmptyState';
import { PageHeader } from '@/components/shared/PageHeader';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDebounced } from '@/hooks/useDebounced';
import type { Player } from '@/types';

export default function PlayersPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const q = useDebounced(search, 300);
  const { data, isLoading } = useQuery({
    queryKey: ['players', { q, page }],
    queryFn: () => playersApi.list({ q: q || undefined, page, limit: 20 }),
  });

  const columns = useMemo<ColumnDef<Player, unknown>[]>(
    () => [
      {
        header: 'N°',
        accessorKey: 'shirtNumber',
        cell: (c) => c.getValue<number | undefined>() ?? '—',
      },
      {
        header: 'Joueur',
        accessorKey: 'fullName',
        cell: (c) => <span className="font-semibold">{c.getValue<string>()}</span>,
      },
      {
        header: 'Poste',
        accessorKey: 'position',
        cell: (c) => c.getValue<string | undefined>() ?? '—',
      },
      {
        header: 'Nationalité',
        accessorKey: 'nationality',
        cell: (c) => c.getValue<string | undefined>() ?? '—',
      },
      {
        header: 'Statut',
        accessorKey: 'status',
        cell: (c) => <StatusBadge status={c.getValue<Player['status']>()} />,
      },
    ],
    [],
  );

  return (
    <>
      <PageHeader
        title="Joueurs"
        description="Effectif, fiches et publication du contenu joueur."
      />
      <div className="relative mb-4 max-w-sm">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-content-3"
          aria-hidden
        />
        <Input
          aria-label="Rechercher un joueur"
          placeholder="Rechercher un joueur…"
          className="pl-9"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>
      <DataTable
        columns={columns}
        data={data?.items ?? []}
        loading={isLoading}
        empty={
          <EmptyState
            icon={Users}
            title="Aucun joueur"
            description="Aucun joueur ne correspond à votre recherche."
          />
        }
      />
      {data && data.totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between text-sm text-content-2">
          <span>
            Page {data.page} / {data.totalPages} — {data.total} joueurs
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Précédent
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={!data.hasMore}
              onClick={() => setPage((p) => p + 1)}
            >
              Suivant
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
