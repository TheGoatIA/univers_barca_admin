import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { navFor } from '@/lib/navigation';
import { useAuthStore } from '@/store/authStore';

export const Sidebar = () => {
  const role = useAuthStore((s) => s.admin?.role);
  if (!role) return null;
  return (
    <aside
      className="hidden w-64 shrink-0 flex-col border-r border-line bg-surface md:flex"
      aria-label="Navigation principale"
    >
      <div className="flex h-16 items-center gap-3 border-b border-line px-5">
        <img src="/logo.png" alt="Écusson" className="size-10 object-contain" />
        <span className="font-title text-xl font-bold uppercase leading-none">
          Univers Barça
          <small className="block text-[11px] font-semibold tracking-widest text-content-2">
            Administration
          </small>
        </span>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {navFor(role).map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              cn(
                'flex h-11 items-center gap-3 rounded-md px-3 text-[15px] font-medium text-content-2 transition-colors hover:bg-surface-3 hover:text-content',
                isActive && 'bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary',
              )
            }
          >
            <Icon className="size-5" aria-hidden />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
