export type AdminRole = 'content-manager' | 'moderator' | 'super-admin';

export interface AdminProfile {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
}

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiErrorBody {
  success: false;
  error: { code: string; message: string; details?: unknown; traceId?: string };
}

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
  nextCursor?: string | null;
}

export type PublicationStatus =
  'draft' | 'awaiting-translation' | 'ready' | 'published' | 'archived';

export interface Player {
  id: string;
  fullName: string;
  shortName?: string;
  position?: string;
  shirtNumber?: number;
  nationality?: string;
  status: PublicationStatus;
  isActive: boolean;
}

export interface HealthDeep {
  status: 'ok' | 'degraded';
  checks: { mongo: 'up' | 'down'; redis: 'up' | 'down' };
  version: string;
  uptime: number;
}
