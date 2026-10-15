import type { ReactNode } from 'react';

interface Props {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export const PageHeader = ({ title, description, actions }: Props) => (
  <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
    <div>
      <h1 className="text-[32px] leading-none">{title}</h1>
      {description && <p className="mt-2 text-content-2">{description}</p>}
    </div>
    {actions && <div className="flex gap-2">{actions}</div>}
  </div>
);
