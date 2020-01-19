import { Action } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';

export enum EProductActions {
  GetAllProducts = '[Product] Get All Products',
  GetSingleProduct = '[Product] Get Single Product',
  FilterByCategory = '[Product] Filter By Category',
}

export class GetAllProductsAction implements Action {
  public readonly type = EProductActions.GetAllProducts;
  constructor(public payload: Product[]) {}
}

export class GetSingleProductAction implements Action {
  public readonly type = EProductActions.GetSingleProduct;
  constructor(public id: string) {}
}

export class FilterByCategoryAction implements Action {
  public readonly type = EProductActions.FilterByCategory;
  constructor(public categoryId: number) {}
}

export type ProductActions =
  | GetAllProductsAction
  | GetSingleProductAction
  | FilterByCategoryAction;
