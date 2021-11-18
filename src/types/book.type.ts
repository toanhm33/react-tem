export interface IBook {
  id: number;
  name: string;
  description: string;
  active: boolean;
  type: string;
}

export interface ITypesBook {
  id: number;
  key: string;
  value: string;
}
