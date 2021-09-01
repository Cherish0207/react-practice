import React, { Component } from "react"
import {adminRoute} from "./routes"
import {Route, Redirect, Switch} from "react-router-dom"
import Frame from "./components/frame"
export default class App extends Component {
  render () {
    return (
      <Frame>
        <Switch>
          {
            adminRoute.map((route, index) => <Route key={index} path={route.pathname} component={route.component} exact={route.exact}/>)
          }  {/* admin页面里的路由    dashboard article articleEdit settings */}
          <Redirect to={adminRoute[0].pathname} from="/admin" exact/> {/* 重定向到 admin页面 */}
          <Redirect to="/404" />
        </Switch>
      </Frame>
    )
  }
}
