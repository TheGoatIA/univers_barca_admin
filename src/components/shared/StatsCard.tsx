import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Props {
  label: string;
  value: string;
  hint?: string;
  icon: LucideIcon;
}

export const StatsCard = ({ label, value, hint, icon: Icon }: Props) => (
  <Card className="p-5">
    <div className="flex items-center justify-between">
      <span className="text-[11px] font-bold uppercase tracking-[0.09em] text-content-2">
        {label}
      </span>
      <Icon className="size-5 text-primary" aria-hidden />
    </div>
    <p className="mt-3 font-title text-4xl font-extrabold leading-none">{value}</p>
    {hint && <p className="mt-2 text-xs text-content-2">{hint}</p>}
  </Card>
);
