import { Method } from '@/utils/request';

export interface Record {
  date: number;
  method: Method;
  url: string;
}
