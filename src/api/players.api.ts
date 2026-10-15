import { api } from '@/lib/axios';
import type { ApiSuccess, Paginated, Player } from '@/types';

export interface PlayersQuery {
  page?: number;
  limit?: number;
  q?: string;
}

export const playersApi = {
  list: (params: PlayersQuery) =>
    api.get<ApiSuccess<Paginated<Player>>>('/players', { params }).then((r) => r.data.data),
};
