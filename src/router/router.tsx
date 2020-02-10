import React from "react";
import { Switch, Route } from "react-router-dom";
import dashboard from "../components/dashboard/dashboard";

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={dashboard}></Route>
      </Switch>
    </div>
  );
};

export { Routes };
