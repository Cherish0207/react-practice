import Loadable from "react-loadable";
import Loading from "../components/loading";
// 需要将对外的普通组件需要进行懒加载
const Article = Loadable({
  loader: () => import("./article"),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import("./dashboard"),
  loading: Loading,
});
const ArticleEdit = Loadable({
  loader: () => import("./article/Edit"),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import("./login"),
  loading: Loading,
});
const Notfound = Loadable({
  loader: () => import("./notfound"),
  loading: Loading,
});
const Settings = Loadable({
  loader: () => import("./settings"),
  loading: Loading,
});

export {
  Article, ArticleEdit, Dashboard, Login, Settings, Notfound
}
