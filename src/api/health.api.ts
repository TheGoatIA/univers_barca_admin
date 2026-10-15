import axios from 'axios';
import type { HealthDeep } from '@/types';

// /health est exposé à la racine du domaine (hors /api/v1)
export const healthApi = {
  deep: () =>
    axios.get<HealthDeep>('/health/deep', { validateStatus: () => true }).then((r) => r.data),
};
