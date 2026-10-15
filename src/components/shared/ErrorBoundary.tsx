import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null };
  static getDerivedStateFromError(error: Error): State {
    return { error };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Erreur UI', error, info.componentStack);
  }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div role="alert" className="grid min-h-screen place-items-center p-6 text-center">
        <div>
          <h1 className="text-3xl">Une erreur est survenue</h1>
          <p className="mt-2 text-content-2">
            Rechargez la page. Si le problème persiste, contactez un super-administrateur.
          </p>
          <Button className="mt-6" onClick={() => window.location.reload()}>
            Recharger
          </Button>
        </div>
      </div>
    );
  }
}
