import { Construction } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { EmptyState } from '@/components/shared/EmptyState';
import { PageHeader } from '@/components/shared/PageHeader';
import { NAV } from '@/lib/navigation';

/** Page d'attente d'un module à développer : liste les écrans prévus (voir les issues du dépôt). */
export default function ModulePage() {
  const { pathname } = useLocation();
  const item = NAV.find((n) => n.to === pathname);
  if (!item) return null;
  return (
    <>
      <PageHeader
        title={item.label}
        description={`Module ${item.module} — à développer (voir les issues du dépôt).`}
      />
      <EmptyState
        icon={Construction}
        title="Module en cours de préparation"
        description="Écrans prévus :"
        action={
          <ul className="list-disc space-y-1 pl-5 text-left text-content-2">
            {(item.planned ?? []).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        }
      />
    </>
  );
}
