import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";
//
// const htmlTemplate: HTMLElement = document.querySelector("#single-spa-layout");
// const routes = constructRoutes(htmlTemplate);
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });
// applications.forEach(registerApplication);

registerApplication({
  name: "@msc-tellco/navbar",
  app: () => System.import("@msc-tellco/navbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@msc-tellco/catalogue",
  app: () => System.import("@msc-tellco/catalogue"),
  activeWhen: "/",
});

registerApplication({
  name: "@msc-tellco/shopping-cart",
  app: () => System.import("@msc-tellco/shopping-cart"),
  activeWhen: "/cart",
});

start();
