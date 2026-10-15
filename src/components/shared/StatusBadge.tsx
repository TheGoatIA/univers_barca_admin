import { cn } from '@/lib/utils';
import type { PublicationStatus } from '@/types';

const MAP: Record<PublicationStatus, { label: string; cls: string }> = {
  draft: { label: 'Brouillon', cls: 'bg-surface-3 text-content-2' },
  'awaiting-translation': {
    label: 'Traduction en attente',
    cls: 'bg-warning/15 text-warning',
  },
  ready: { label: 'Prêt', cls: 'bg-info/15 text-info' },
  published: { label: 'Publié', cls: 'bg-success/15 text-success' },
  archived: { label: 'Archivé', cls: 'bg-surface-3 text-content-3' },
};

export const StatusBadge = ({ status }: { status: PublicationStatus }) => {
  const s = MAP[status];
  return (
    <span className={cn('inline-flex rounded-full px-2.5 py-1 text-xs font-semibold', s.cls)}>
      {s.label}
    </span>
  );
};
