import React from "react";

const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"));
const PageThankYou = React.lazy(() => import("./pages/Pages/Special/PageThankYou"));
const Main = React.lazy(() => import("./pages/Main/index"));

const RemoteExpert = React.lazy(() => import("./pages/Features/RemoteExpert/index"));
const ClientService = React.lazy(() => import("./pages/Features/ClientService/index"));
const LocationTracking = React.lazy(() => import("./pages/Features/LocationTracking/index"));
const OnlineTimesheet = React.lazy(() => import("./pages/Features/OnlineTimesheet/index"));
const TagsTracking = React.lazy(() => import("./pages/Features/TagsTracking/index"));
const TimeTracking = React.lazy(() => import("./pages/Features/TimeTracking/index"));
const Industries = React.lazy(() => import("./pages/Industries/Common/index"));

const Glasses = React.lazy(() => import("./pages/SmartGlasses/index"));

const Pricing = React.lazy(() => import("./pages/Pricing/index"));

const routes = [
  { path: "/page-error", component: PageError, isWithoutLayout: true },
  { path: "/page-thankyou", component: PageThankYou, isWithoutLayout: true },

  { path: "/", component: Main },

  { path: "/features/remote-expert", component: RemoteExpert },
  { path: "/features/client-service-control", component: ClientService },
  { path: "/features/location-tracking", component: LocationTracking },
  { path: "/features/online-timesheet", component: OnlineTimesheet },
  { path: "/features/tags-tracking", component: TagsTracking },
  { path: "/features/time-tracking", component: TimeTracking },
  { path: "/industries/inpres-industries", component: Industries },

  { path: "/inpres-glasses", component: Glasses },

  { path: "/pricing", component: Pricing }

  
];

export default routes;
