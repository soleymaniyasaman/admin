import React from "react";
import AdminPanel_Products from './pages/adminPanel_products';
import { BrowserRouter as Router, Switch, Route, Link ,useRouteMatch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Layout from './components/layout';
import SelectedFrom from './components/adminPanel_products_productsLists/adminPanel_products_selectedForm'
import Sana from './components/adminPanel_products_productsLists'
import AdminPanel_menuSidebar from './components/layout/adminPanel_layout_menuSidebar/adminPanel_menuSidebar'
import AdminPanel from './pages/adminPanel_products'
import ProductsLists from './components/adminPanel_products_productsLists'
import From from './components/adminPanel_products_productsLists/adminPanel_products_Form'
import PriceComponent_table from "./components/adminPanel_products_productsLists/adminPanel_products_productsLists_table";
function App() {

  return (
    <BrowserRouter>

      <Layout>

        <Switch>
          <Route exact path="/" component={AdminPanel_Products} />
          <Route
            path="/Product"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={AdminPanel_Products} exact />
                <Route path={`${url}/productList`} component={AdminPanel_Products} />
                <Route path={`${url}/priceList`} component={SelectedFrom} />
              </>
            )}
          />
      
        {/* <Route path="/Product" component={AdminPanel_Products} />
        <Route path="/productList" component={AdminPanel_Products} />
        <Route path="/priceList" component={SelectedFrom} /> */}

        <Route path="/Shop"  />
        <Route path="/Profile"  />
        {/* <Route path="/Product" component={PriceComponent_table} />
        <Route path="/productList" component={PriceComponent_table} exact />
        <Route path="/priceList" component={SelectedFrom} /> */}

          <Route path="/edit" component={SelectedFrom} />
        </Switch>

      </Layout>
      </BrowserRouter>

  );
}

export default App;
