import React from 'react';
import {  Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container } from "@mui/material";


export default function ProductsPage() {
  const products = useRouteMatch();
  console.log("products:",products); 

  return <div className={"products-page"}></div>;
}
