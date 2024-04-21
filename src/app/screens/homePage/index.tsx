import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {setPopularDishes} from "./slice";
import {retrievePopularDishes} from "./selector";
import { Product } from "../../../lib/types/product";


/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data))
});

const popularDishesRetriever = createSelector(
  retrievePopularDishes, (popularDishes) => ({popularDishes}))
  ;


export default function HomePage() {
  const {setPopularDishes} = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Selector: Store => Data
  
  
  useEffect(() => {
   // Backend serverdan data request => Data
  //  const result = [
  //   {
  //       "_id": "65fce5e148dfe0ce511eb5f2",
  //       "productStatus": "PROCESS",
  //       "productCollection": "DISH",
  //       "productName": "Steak",
  //       "productPrice": 15,
  //       "productLeftCount": 100,
  //       "productSize": "NORMAL",
  //       "productVolume": 0,
  //       "productDesc": "This is the most delicious Steak.",
  //       "productImages": [
  //           "uploads/products/ab9adbef-8ec4-4817-9b28-27c97163ec4c.jpg",
  //           "uploads/products/39761b51-d611-44e2-9b5b-7f184cfa564c.jpg",
  //           "uploads/products/ae39f88a-87a3-4094-addc-7770ff50f477.jpg"
  //       ],
  //       "productViews": 3,
  //       "createdAt": "2024-03-22T01:58:57.060Z",
  //       "updatedAt": "2024-04-12T05:21:12.734Z",
  //       "__v": 0
  //   },
  //   {
  //       "_id": "65fce6cc48dfe0ce511eb5f6",
  //       "productStatus": "PROCESS",
  //       "productCollection": "DISH",
  //       "productName": "Steak",
  //       "productPrice": 17,
  //       "productLeftCount": 50,
  //       "productSize": "LARGE",
  //       "productVolume": 1,
  //       "productDesc": "This is delicios",
  //       "productImages": [
  //           "uploads/products/62ee2f66-1f2c-40f5-bd32-fe7253413939.jpg",
  //           "uploads/products/a4e408fe-2a62-4450-9e1f-902c1af58713.jpg",
  //           "uploads/products/5b87cd17-e26b-4996-8e43-285668ed2e50.jpg"
  //       ],
  //       "productViews": 2,
  //       "createdAt": "2024-03-22T02:02:52.789Z",
  //       "updatedAt": "2024-04-12T05:26:31.111Z",
  //       "__v": 0
  //   },
  // ]

   // Slice: Data => Store
  //  @ts-ignore
  //  setPopularDishes(result);
  }, []);


  // console.log("popularDishes:",popularDishes);
  


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
