import { Product } from "src/app/interfaces/product";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface ProductState extends EntityState<Product> {
  currentProduct: Product;
  error: string;
  filteredIds: Array<number>;
}

export const initialProductStateProperties: ProductState = {
  ids: [],
  currentProduct: null,
  entities: {},
  error: null,
  filteredIds: []
};

export const productAdapter: EntityAdapter<Product> = createEntityAdapter();

const initialProductState = productAdapter.getInitialState(
  initialProductStateProperties
);
