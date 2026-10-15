import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const MainLayout = () => (
  <div className="flex min-h-screen bg-bg">
    <Sidebar />
    <div className="flex min-w-0 flex-1 flex-col">
      <Header />
      <main className="flex-1 p-6">
        <Suspense fallback={<Skeleton className="h-64 w-full" />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  </div>
);
