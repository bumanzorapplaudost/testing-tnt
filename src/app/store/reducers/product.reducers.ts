import {
  ProductState,
  productAdapter,
  initialProductStateProperties,
} from '../state/product.state';
import { ProductActions, EProductActions } from '../actions/product.actions';

export function productReducers(
  state: ProductState = initialProductStateProperties,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case EProductActions.GetAllProducts:
      return productAdapter.upsertMany(action.payload, state);
    case EProductActions.FilterByCategory:
      const currentProducts = { ...state.entities };
      return { ...state };
    default:
      return state;
  }
}
