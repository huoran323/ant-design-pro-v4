export interface NormalListItem {
  key: number;
  name: string;
}

export interface NormalListData {
  list: NormalListItem[];
}

export interface NormalListParams {
  pageSize: number;
  currentPage: number;
}
