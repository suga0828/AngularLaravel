import { Movie } from './movie';

export interface ApiResponse {
  meta: {
    (key: string): number
  };
  objects?: Movie[];
}
