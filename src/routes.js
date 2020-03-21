import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import DetailSong from "./views/DetailSong";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/metalica",
    name: "Metalica",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/detailSong",
    name: "DetailSong",
    icon: "tim-icons icon-single-02",
    component: DetailSong,
    layout: "/admin"
  }
];
export default routes;
