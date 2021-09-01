import {
  Article, ArticleEdit, Dashboard, Login, Settings, Notfound
} from "../views"

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
    isNav: true
  },
  {
    pathname: "/admin/article",
    component: Article,
    exact: true,  // 配置App内置路由需要exact属性,详情见下文
    title: "文章列表",
    isNav: true
  },
  {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit,
  },
  {
    pathname: "/admin/settings",
    component: Settings,
    title: "设置",
    isNav: true
  },
]
