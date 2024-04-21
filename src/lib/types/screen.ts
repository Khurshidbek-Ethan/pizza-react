import { Member } from "./member";
import { Product } from "./product";


/** REACT APP STATE **/
export interface AppRootState {
    homePage: HomePageState;
    // productsPage: ProductsPageState;
}


/** HOME PAGE **/

export interface HomePageState{
 popularDishes: Product[];
 newDished: Product[];
 topUsers: Member[];
}


/** PRODUCTS PAGE **/


/** ORDERS PAGE **/

