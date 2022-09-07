export interface IOptions {
  id: number;
  name: string;
  label: string;
  checked: boolean;
}

export interface IFiltersTypes extends IOptions {}

export interface ISorts {
  id: number;
  label: string;
  type: string;
}

export interface IValueTikets {
  name: string;
  value?: string | null;
}

export interface ITikets {
  id: number;
  price: string;
  info: IValueTikets[];
  img: string;
}
