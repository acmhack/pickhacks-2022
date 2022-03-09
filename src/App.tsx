import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Test from "./components/sections/Layout";
import styled, { AnyStyledComponent } from "styled-components";

const Example: AnyStyledComponent = styled.div``;

export default () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header></Header> */}

        <Switch>
          <Route exact path="/" component={Test} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
