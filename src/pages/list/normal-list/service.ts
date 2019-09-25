import request from '@/utils/request';
import { NormalListParams } from './data.d';

export async function getNormalList(params: NormalListParams) {
  return request('/api/normalList', {
    params,
  });
}
