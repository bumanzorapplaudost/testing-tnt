import { ProductMaster } from "./product-master";
import { Category } from "./category.interface";
import { ProductImage } from "./product-image.interface";

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  active: number;
  likes_count: number;
  likes_up_count: number;
  likes_down_count: number;
  published_at: string;
  master: ProductMaster;
  category: Category;
  image: ProductImage;
  myReaction?: number;
  purchasedQty?: number;
}
