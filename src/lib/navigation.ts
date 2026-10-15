import {
  BarChart3,
  Bell,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Shield,
  Swords,
  Trophy,
  Users,
  UserCog,
  type LucideIcon,
} from 'lucide-react';
import type { AdminRole } from '@/types';

export interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  roles: AdminRole[];
  /** Code du module dans les maquettes (WB…WJ) */
  module: string;
  /** Écrans prévus (référence aux maquettes et aux issues) */
  planned?: string[];
  implemented?: boolean;
}

const ALL: AdminRole[] = ['content-manager', 'moderator', 'super-admin'];

export const NAV: NavItem[] = [
  {
    to: '/',
    label: 'Tableau de bord',
    icon: LayoutDashboard,
    roles: ALL,
    module: 'WB',
    implemented: true,
  },
  {
    to: '/joueurs',
    label: 'Joueurs',
    icon: Users,
    roles: ['content-manager', 'super-admin'],
    module: 'WC',
    implemented: true,
  },
  {
    to: '/matchs',
    label: 'Matchs & compétitions',
    icon: Swords,
    roles: ['content-manager', 'super-admin'],
    module: 'WD',
    planned: [
      'Calendrier des matchs',
      'Fiche match (événements, compositions)',
      'Compétitions',
      'Synchronisation API football',
    ],
  },
  {
    to: '/contenu',
    label: 'Contenu éditorial',
    icon: FileText,
    roles: ['content-manager', 'super-admin'],
    module: 'WE',
    planned: ['Anecdotes', 'Défis du jour', 'Traductions FR/EN/ES'],
  },
  {
    to: '/quiz',
    label: 'Questions de quiz',
    icon: HelpCircle,
    roles: ['content-manager', 'super-admin'],
    module: 'WF',
    planned: ['Liste des questions', 'Édition', 'Import CSV', 'Statistiques de difficulté'],
  },
  {
    to: '/moderation',
    label: 'Modération',
    icon: Shield,
    roles: ['moderator', 'super-admin'],
    module: 'WG',
    planned: ['File de signalements', 'Détail & décision', 'Sanctions', 'Journal d’audit'],
  },
  {
    to: '/supervision',
    label: 'Supervision',
    icon: BarChart3,
    roles: ['super-admin'],
    module: 'WH',
    planned: ['Santé des services', 'Files de jobs', 'Quotas IA', 'Journaux'],
  },
  {
    to: '/notifications',
    label: 'Notifications',
    icon: Bell,
    roles: ['content-manager', 'super-admin'],
    module: 'WI',
    planned: ['Campagnes push', 'Modèles', 'Historique'],
  },
  {
    to: '/comptes',
    label: 'Comptes admin',
    icon: UserCog,
    roles: ['super-admin'],
    module: 'WI',
    planned: ['Invitations', 'Rôles & permissions', 'Sessions actives', '2FA'],
  },
  {
    to: '/utilisateurs',
    label: 'Utilisateurs',
    icon: Trophy,
    roles: ['moderator', 'super-admin'],
    module: 'WJ',
    planned: ['Recherche utilisateur', 'Fiche & consentements', 'Export / suppression RGPD'],
  },
];

export const navFor = (role: AdminRole) => NAV.filter((n) => n.roles.includes(role));
