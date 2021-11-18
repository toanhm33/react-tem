export interface ApiListModel<T> {
  data: T[];
  totalItem: number;
  page: number;
  pageSize: number;
  totalPage: number;
  name?: string;
  code?: string;
  message?: string;
}
