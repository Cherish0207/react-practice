import { Layout, Menu } from "antd";
import { Component } from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css"
const { Header, Content, Footer } = Layout;

export default class Index extends Component {
  render () {
    return (<Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" >
          {new Array(2).fill(null)
            .map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
        </Menu>
      </Header>
      <Content style={{  padding: "0 24px", minHeight: 280  }}>
        {this.props.children}
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>)
  }
}
Index.propTypes = {
  children: PropTypes.children,
}
