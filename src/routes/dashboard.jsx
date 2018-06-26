import Dashboard from "../views/Dashboard/Dashboard";
import Ticket from "../views/Ticket/Ticket";


const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/ticket",
    name: "Ticket",
    icon: "pe-7s-note2",
    component: Ticket
  },
  { redirect: true, path: "/", to: "/home", name: "Home" }
];

export default dashboardRoutes;
