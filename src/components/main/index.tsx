import React, { FC } from "react";

import AnalyticsSharpIcon from "@mui/icons-material/AnalyticsSharp";
import StackedLineChartSharpIcon from "@mui/icons-material/StackedLineChartSharp";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import Search from "@mui/icons-material/Search";
import { MainCard } from "./main-card";
import { MainOrdersTable } from "./main-orders-table";

import style from "./index.module.scss";
import cn from "classnames";
import { UseGeneral } from "../../contexts/general/GeneralContext";

export const Main: FC = () => {
  const { isLightTheme } = UseGeneral();
  const mainItems = [
    {
      icon: <AnalyticsSharpIcon className={style.mainIcon} />,
      percent: 81,
      text: "Total Sales",
      className: "sales",
      sum: "25,024",
    },
    {
      icon: <BarChartSharpIcon className={style.mainIcon} />,
      percent: 62,
      text: "Total Expenses",
      className: "expenses",
      sum: "14,160",
    },
    {
      icon: <StackedLineChartSharpIcon className={style.mainIcon} />,
      percent: 20,
      text: "Total Income",
      className: "income",
      sum: "10,864",
    },
  ];
  return (
    <main className={style.main}>
      <div className={style.dateLine}>
        <div className={style.date}>
          <input
            type="date"
            className={cn(style.dateInput, {
              [style.dateInputDark]: !isLightTheme,
            })}
          />
        </div>
        <Search
          className={cn(style.searchButton, {
            [style.darkThemeText]: !isLightTheme,
          })}
        />
      </div>

      <div className={style.insights}>
        {mainItems.map((mItem, index) => (
          <MainCard
            percent={mItem.percent}
            sum={mItem.sum}
            title={mItem.text}
            classN={mItem.className}
            key={index}
          >
            {mItem.icon}
          </MainCard>
        ))}
      </div>

      <MainOrdersTable />
    </main>
  );
};
