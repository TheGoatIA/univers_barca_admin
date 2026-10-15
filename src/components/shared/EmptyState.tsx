import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
}

export const EmptyState = ({ icon: Icon, title, description, action }: Props) => (
  <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
    <div className="grid size-16 place-items-center rounded-full bg-surface-3">
      <Icon className="size-7 text-content-2" aria-hidden />
    </div>
    <h3 className="text-xl">{title}</h3>
    {description && <p className="max-w-md text-content-2">{description}</p>}
    {action}
  </div>
);
