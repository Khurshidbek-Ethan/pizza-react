import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {setPopularDishes} from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";


/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data))
});


export default function HomePage() {
  const {setPopularDishes} = actionDispatch(useDispatch());

  
  
  
  useEffect(() => {
   // Backend serverdan data request => Data
   const product = new ProductService();
   product.getProducts({
    page: 1,
    limit: 4,
    order: "productViews",
    productCollection: ProductCollection.DISH,
   }).then(data => {
    // console.log("data passed here:",data);
    setPopularDishes(data);
   })
   .catch((err) => console.log(err));
   
   // Slice: Data => Store

  }, []);



  


  return ( <div className={"homepage"}>
    <Statistics/>
    <PopularDishes/>
    <NewDishes/>
    <Advertisement/>
    <ActiveUsers/>
    <Events/>

   </div>
  );
}




// /////////////////////////////////////////////
// 1chi shu yerdan boshla 
// import React, { useEffect } from "react";
// import Statistics from "./Statistics";
// import PopularDishes from "./PopularDishes";
// import NewDishes from "./NewDishes";
// import Advertisement from "./Advertisement";
// import ActiveUsers from "./ActiveUsers";
// import Events from "./Events";
// import "../../../css/home.css";

// import { useDispatch, useSelector } from "react-redux";
// import { Dispatch } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
// import {setPopularDishes} from "./slice";
// import {retrievePopularDishes} from "./selector";
// import { Product } from "../../../lib/types/product";
// import ProductService from "../../services/ProductService";
// import { ProductCollection } from "../../../lib/enums/product.enum";


// /** REDUX SLICE & SELECTOR **/
// const actionDispatch = (dispatch: Dispatch) => ({
//   setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data))
// });

// const popularDishesRetriever = createSelector(
//   retrievePopularDishes, (popularDishes) => ({popularDishes})
//  );


// export default function HomePage() {
//   const {setPopularDishes} = actionDispatch(useDispatch());
//   const { popularDishes } = useSelector(popularDishesRetriever);
//   // console.log(process.env.REACT_APP_API_URL);
  
  
  
//   useEffect(() => {
//    // Backend serverdan data request => Data
//    const product = new ProductService();
//    product.getProducts({
//     page: 1,
//     limit: 4,
//     order: "productViews",
//     productCollection: ProductCollection.DISH,
//    }).then(data => {
//     // console.log("data passed here:",data);
//     setPopularDishes(data);
//    })
//    .catch((err) => console.log(err));
   
//    // Slice: Data => Store

//   }, []);


//   console.log("popularDishes:",popularDishes);
  


//   return ( <div className={"homepage"}>
//     <Statistics/>
//     <PopularDishes/>
//     <NewDishes/>
//     <Advertisement/>
//     <ActiveUsers/>
//     <Events/>

//    </div>
//   );
// }
