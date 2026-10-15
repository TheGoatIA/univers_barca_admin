import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import App from './App';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';
import { queryClient } from '@/lib/queryClient';
import { applyTheme, useUiStore } from '@/store/uiStore';
import './index.css';

applyTheme(useUiStore.getState().theme);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={null}>
          <App />
        </Suspense>
        <Toaster richColors position="top-right" />
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
);
