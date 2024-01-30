import { IStock } from './stock.interface';

export interface IProduct {
  title: string;
  sku: string;
  image: string;
  price: number;
  stock: IStock[];
}
