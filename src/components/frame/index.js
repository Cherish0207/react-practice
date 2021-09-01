import { Layout, Menu, Breadcrumb } from "antd";
import { Component } from "react";
import PropTypes from "prop-types";

const { Header, Content, Footer } = Layout;
import Logo from "./logo.png"

import { adminRoute } from "../../routes";
const menu = adminRoute.filter((route) => route.isNav === true)
export default class Frame extends Component {
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
        <div style={{display: "flex"}}>
          <Menu mode="inline" className="sideMenu" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]}
            style={{height: "100%"}}>
            {menu.map((route) => (
              <Menu.Item key={
                route.pathname}>{
                  route.title}</Menu.Item>
            ))}
          </Menu>{this.props.children}
        </div>


      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>)
  }
}
Frame.propTypes = {
  children: PropTypes.any,
}
