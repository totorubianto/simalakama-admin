import React from "react";
import { Switch, Route } from "react-router-dom";
import dashboard from "../components/dashboard/dashboard";
import users from "../components/users/users"
interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={dashboard}></Route>
      <Route exact path="/users" component={users}></Route>
      </Switch>
    </div>
  );
};

export { Routes };
