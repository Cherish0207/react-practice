import {
  Article, ArticleEdit, Dashboard, Login, Settings, Notfound
} from "../views"
// 使用antd里面的icon图标
import {
  DashboardOutlined,
  OrderedListOutlined,
  SettingOutlined,
} from "@ant-design/icons";
// import React from "react"  // React必须要进行引入进来，作用就是帮助我们解析内部的jsx代码


export const mainRoute = [
  {
    pathname: "/login",
    component: Login
  },
  {
    pathname: "/404",
    component: Notfound
  }
]


// /admin/XXX
export const adminRoute = [
  {
    pathname: "/admin/dashboard",
    component: Dashboard,
    title: "仪表盘",
    isNav: true,
    icon: <DashboardOutlined/>
  },
  {
    pathname: "/admin/article",
    component: Article,
    exact: true,
    title: "文章列表",
    isNav: true,
    icon: <OrderedListOutlined />
  },
  {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit,
  },
  {
    pathname: "/admin/settings",
    component: Settings,
    title: "设置",
    isNav: true,
    icon: <SettingOutlined />
  },
]
