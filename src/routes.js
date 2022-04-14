import React from "react";

const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"));
const PageThankYou = React.lazy(() => import("./pages/Pages/Special/PageThankYou"));
const Main = React.lazy(() => import("./pages/Main/index"));


const routes = [
  { path: "/page-error", component: PageError, isWithoutLayout: true },
  { path: "/page-thankyou", component: PageThankYou, isWithoutLayout: true },

  { path: "/", component: Main }
];

export default routes;
