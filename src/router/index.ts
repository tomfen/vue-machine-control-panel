import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import SettingsView from "../views/SettingsView.vue";
import MainView from "../views/MainView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    redirect: "dashboard",
    component: MainView,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: DashboardView,
      },
      {
        path: "settings",
        name: "settings",
        component: SettingsView,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
