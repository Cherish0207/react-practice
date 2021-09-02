import { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;
import Logo from "./logo.png"
import { adminRoute } from "../../routes";
import {withRouter} from "react-router-dom"
const menu = adminRoute.filter((route) => route.isNav === true)
@withRouter
class Frame extends Component {
handleMenu = ({key}) => {
  this.props.history.push(key) // Frame组件不是路由组件，属性上面就不会有history相关的路由的api,
}
render () {
  return (<Layout className="layout">
    <Header className="header qf-header">
      <div className="logo" >
        <img src={Logo}/>

      </div>
    </Header>
    <Content style={{  padding: "0 24px", minHeight: 280  }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ display: "flex", height: "100%"}}>
        <Menu mode="inline" className="sideMenu" defaultSelectedKeys={[menu[0].pathname]} selectedKeys={
          [this.props.location.pathname]} defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }} onClick={this.handleMenu}>
          {menu.map((route) => (
            <Menu.Item key={
              route.pathname}>{
                route.icon}&nbsp;&nbsp;
              {
                route.title}</Menu.Item>
          ))
          }
        </Menu>{this.props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>)
}
}
Frame.propTypes = {
  children: PropTypes.any,
  history: PropTypes.any,
  location: PropTypes.any,
}
export default Frame;
