import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { productReducers } from './product.reducers';
import { ProductState } from '../state/product.state';

export interface State {
  product: ProductState;
}

export const reducers: ActionReducerMap<State> = {
  product: productReducers,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
