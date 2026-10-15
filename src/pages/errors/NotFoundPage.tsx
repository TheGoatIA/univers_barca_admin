import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center p-6 text-center">
      <div>
        <p className="font-title text-8xl font-extrabold text-primary">404</p>
        <h1 className="mt-2 text-3xl">Page introuvable</h1>
        <p className="mt-2 text-content-2">La page demandée n'existe pas ou a été déplacée.</p>
        <Button asChild className="mt-6">
          <Link to="/">Retour au tableau de bord</Link>
        </Button>
      </div>
    </div>
  );
}
