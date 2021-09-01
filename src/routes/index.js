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
    component: Dashboard
  },
  {
    pathname: "/admin/article",
    component: Article,
    exact: true  // 配置App内置路由需要exact属性,详情见下文
  },
  {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit
  },
  {
    pathname: "/admin/settings",
    component: Settings
  },
]
