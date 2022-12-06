import React, { FC } from "react";

import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import AddIcon from "@mui/icons-material/Add";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

import { RecentUpdate } from "./recent-update";
import { SalesAnalyticsItem } from "./sales-analytics-item";

import style from "./index.module.scss";
import cn from "classnames";
import { UseGeneral } from "../../contexts/general/GeneralContext";

export const Right: FC = () => {
  const { isLightTheme } = UseGeneral();
  const recentUpdates = [{}, {}, {}];
  const salesAnalytics = [
    {
      wrapperClassN: "online",
      percent: "+39",
      title: "Online Orders",
      amount: 8398,
      icon: <ShoppingCartSharpIcon className="salesAnalyticsIcon" />,
    },
    {
      wrapperClassN: "offline",
      percent: "-17",
      title: "Offline Orders",
      amount: 1100,
      icon: <LocalMallSharpIcon className="salesAnalyticsIcon" />,
    },
    {
      wrapperClassN: "customers",
      percent: "+25",
      title: "New Customers",
      amount: 849,
      icon: <Person2SharpIcon className="salesAnalyticsIcon" />,
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.recentUpdates}>
        <h2
          className={cn(style.title, {
            [style.darkThemeText]: !isLightTheme,
          })}
        >
          Recent Updates
        </h2>
        <div
          className={cn(style.updates, {
            [style.darkThemeUpdates]: !isLightTheme,
          })}
        >
          {recentUpdates.map((rItem, index) => (
            <RecentUpdate key={index} />
          ))}
        </div>
      </div>
      <div className={style.salesAnalytics}>
        <h2
          className={cn({
            [style.darkThemeText]: !isLightTheme,
          })}
        >
          Sales Analytics
        </h2>
        {salesAnalytics.map((sAItem, index) => (
          <SalesAnalyticsItem
            amount={sAItem.amount}
            percent={sAItem.percent}
            title={sAItem.title}
            wrapperClassN={sAItem.wrapperClassN}
            key={index}
          >
            {sAItem.icon}
          </SalesAnalyticsItem>
        ))}
        <div className={cn(style.item, style.addProduct)}>
          <div className={style.flexWrapper}>
            <AddIcon />
            <h3 className={style.addProductTitle}>Add Product</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
