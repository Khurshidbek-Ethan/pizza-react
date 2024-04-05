import React from 'react';
import {  Route, Switch, useRouteMatch } from 'react-router-dom';// hookni importi
import { Container } from "@mui/material";
import ChosenProduct from './ChosenProduct';
import Products from './Products';
import "../../../css/products.css"

//ProductsPage screen componentni ichida nested routingni xosil qilamiz 
// nest routing ProductsPageni tashqarisida appda routing tizimini qurgan edik 
// birlamchi routingni ichida bizning ProductsPage bor ProductsPagega qoshimcha ravishda 
// ProductsPageni ichidaham yanna bitta routing tizimini xosil qilamiz yani routingni ichida 
// yangi routerlarni xosil qilish bu nested routinglarni xosil qilish degani 
export default function ProductsPage() {
  // ProductsPage screen componentimiz 2 hil sectional componentdan iborat boladi 
  const products = useRouteMatch();
  console.log("products:",products); // pathni 

  return <div className={"products-page"}>
    <Switch>
      {/* pathni ikkixil tashkil etilishi /:params degan urlda yasheydigon params degan mantiqni kiritdik  1chi routing */}
      {/* /:productId kelsa  ChosenProductga yuboradiaks holda product listga yuboradi yani shuni pasdagisiga     <Products /> */}
      <Route path={`${products.path}/:productId`}>
        {/*  aynan tanlangan productni Product Detailni koramiz  */}
        <ChosenProduct/> 
      </Route>
      {/* 2chi routing paramsiz  */}
        <Route path={`${products.path}`}>
        <Products />
      </Route>
    </Switch>
  </div>;
}
