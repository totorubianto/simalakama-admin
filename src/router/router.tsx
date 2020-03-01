import React from "react";
import { Switch, Route } from "react-router-dom";
import dashboard from "../components/dashboard/dashboard";
import users from "../components/users/users";
import login from "../components/auth/login/login";
interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={dashboard}></Route>
        <Route exact path="/users" component={users}></Route>
        <Route exact path="/login" component={login}></Route>
      </Switch>
    </div>
  );
};

export { Routes };
