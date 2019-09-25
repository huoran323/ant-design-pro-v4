import { Request, Response } from 'express';
import { NormalListItem, NormalListParams } from './data.d';

let tableListData: NormalListItem[] = [];

for (let i = 0; i < 10; i += 1) {
  tableListData.push({
    key: i,
    name: `TradeCode ${i}`,
  });
}
function getNormalList(req: Request, res: Response, u: string) {
  const result = {
    list: tableListData,
  };
  return res.json(result);
}

export default {
  'GET /api/normalList': getNormalList,
};
