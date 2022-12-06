import React, { FC, useState } from "react";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import { SideBarItem } from "./sidebar-item";
//

import style from "./index.module.scss";
import cn from "classnames";
import { UseGeneral } from "../../contexts/general/GeneralContext";

export const SideBar: FC = () => {
  const [activeSideBarItem, setActiveSideBarItem] = useState(0);
  const { isLightTheme } = UseGeneral();

  const dashboardItems = [
    { name: "Dashboard", icon: <DashboardIcon className={style.icon} /> },
    { name: "Customers", icon: <Person2OutlinedIcon className={style.icon} /> },
    { name: "Orders", icon: <EventNoteOutlinedIcon className={style.icon} /> },
    {
      name: "Analytics",
      icon: <InsightsOutlinedIcon className={style.icon} />,
    },
    {
      name: "Messages",
      icon: <EmailOutlinedIcon className={style.icon} />,
      notifications: 26,
    },
    {
      name: "Products",
      icon: <FactCheckOutlinedIcon className={style.icon} />,
    },
    {
      name: "Report",
      icon: <ReportGmailerrorredOutlinedIcon className={style.icon} />,
    },
    { name: "Settings", icon: <SettingsIcon className={style.icon} /> },
    { name: "Add Product", icon: <AddIcon className={style.icon} /> },
    { name: "Logout", icon: <LogoutIcon className={style.icon} /> },
  ];
  const { isSideBarOpen } = UseGeneral();
  return (
    <aside className={style.aside}>
      <div
        className={cn(style.sidebar, {
          [style.open]: isSideBarOpen,
          [style.asideDark]: !isLightTheme,
        })}
      >
        {dashboardItems.map((dItem, dIndex) => (
          <SideBarItem
            name={dItem.name}
            key={dIndex}
            notifications={dItem.notifications}
            index={dIndex}
            isActive={activeSideBarItem}
            setActiveSideBarItem={setActiveSideBarItem}
          >
            {dItem.icon}
          </SideBarItem>
        ))}
      </div>
    </aside>
  );
};
