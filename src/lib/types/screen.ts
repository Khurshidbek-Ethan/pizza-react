/** REACT APP STATE **/
//butun applicationda ishlatilayotgan malumotlarni type integrationi

import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}
/* REACT APP STATE
Butun application ishlatilayotgan malumotlarni type intgeratsiyasi.

TYPE INTEGRATOON ni qilish ikki hil uslubi mavjud 
1) Screen Componentlarga asoslangan holda (SCREEN  COMPONENT BASED )
2) TARGET ORIENTED COMPONENT

*/

/**   HOMEPAGE  |  screen componentiga dahldor interface lar **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE  **/

export interface ProductsPageState {
  restaurant: Member | null;
  products: Product[];
  chosenProduct: Product | null;
}
/** ORDERS PAGE  **/
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
