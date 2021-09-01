import { Layout, Menu, Breadcrumb } from "antd";
import { Component } from "react";
import PropTypes from "prop-types";

const { Header, Content, Footer } = Layout;
import Logo from "./logo.png"
import "./index.less"

export default class Index extends Component {
  render () {
    return (<Layout className="layout">
      <Header className="header qf-header">
        <div className="logo" >
          <img src={Logo}/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(15).fill(null)
              .map((_, index) => {
                const key = index + 1;
                return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
              })}
          </Menu>
        </div>
      </Header>
      <Content style={{  padding: "0 24px", minHeight: 280  }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>{this.props.children}
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>)
  }
}
Index.propTypes = {
  children: PropTypes.children,
}
