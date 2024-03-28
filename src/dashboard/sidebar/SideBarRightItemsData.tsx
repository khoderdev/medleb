import { AddIcon } from "./icons/AddIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { ImportIcon } from "./icons/ImportIcon";
import { InspectIcon } from "./icons/InspectIcon";
import { DashboardIcon } from "./icons/DashboardIcon";
import { DistributeIcon } from "./icons/DistributeIcon";
import { TrackRecordsIcon } from "./icons/TrackRecordsIcon";

export const SideBarItems = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Search",
    icon: <SearchIcon />,
    link: "/search",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/admin/dashboard",
  },
  {
    title: "Add",
    icon: <AddIcon />,
    link: "/admin/add",
  },
  {
    title: "Importation",
    icon: <ImportIcon />,
    link: "/admin/importation",
  },
  {
    title: "Distribution",
    icon: <DistributeIcon />,
    link: "/admin/distribution",
  },
  {
    title: "Inspection",
    icon: <InspectIcon />,
    link: "/admin/inspection",
  },
  {
    title: "Track Records",
    icon: <TrackRecordsIcon />,
    link: "/admin/tracking",
  },
];
