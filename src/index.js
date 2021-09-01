import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom"
import App from "./App";
import {mainRoute} from "./routes"
import "./index.less";
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" component={App}/> {/* admin主页面的路由 进入到App组件 */}
      {
        mainRoute.map((route, index) => <Route key={index} path={route.pathname} component={route.component}/>)
      }  {/* 遍历login 404 的路由 */}
      <Redirect to="/admin" from="/" exact/>  {/* 重定向  首页为admin */}
      <Redirect to="/404" />		{/* 如果路径与之前都不匹配,则返回404页面 */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
