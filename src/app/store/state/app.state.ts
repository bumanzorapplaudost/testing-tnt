import { ProductState, productAdapter } from './product.state';
import { EntityState } from '@ngrx/entity';
import { Product } from 'src/app/interfaces/product';

export interface AppState {
  products: EntityState<Product>;
}

export const initialAppState: AppState = {
  products: productAdapter.getInitialState(),
};
