import loadable from "loadable-components";

export const routers = [
  {
    path: "/login",
    component: () => import("../views/login")
  },
  {
    path: "/good",
    component: () => import("../views/good")
  }
].map(item => {
  return {
    ...item,
    component: loadable(item.component)
  };
});
