import React, { FC, ReactNode } from "react";

import cn from "classnames";

import style from "./index.module.scss";
import { UseGeneral } from "../../../contexts/general/GeneralContext";

type SalesAnalyticsItemProps = {
  wrapperClassN: string;
  title: string;
  amount: number;
  percent: string;
  children: ReactNode;
};

export const SalesAnalyticsItem: FC<SalesAnalyticsItemProps> = ({
  wrapperClassN,
  title,
  amount,
  percent,
  children,
}) => {
  const { isLightTheme } = UseGeneral();
  return (
    <div
      className={cn(style.item, style[wrapperClassN], {
        [style.darkThemeBackground]: !isLightTheme,
      })}
    >
      <div
        className={cn(style.iconWrapper, {
          [style.darkIconWrapper]: !isLightTheme,
        })}
      >
        {children}
      </div>
      <div className={style.flexWrapper}>
        <div className={style.info}>
          <h3
            className={cn({
              [style.darkThemeText]: !isLightTheme,
            })}
          >
            {title.toUpperCase()}
          </h3>
          <small className="text-muted">Last 24 hours</small>
        </div>
        <h5
          className={cn({
            success2: percent[0] === "+",
            danger: percent[0] !== "+",
          })}
        >
          {percent}%
        </h5>
        <h3
          className={cn({
            [style.darkThemeText]: !isLightTheme,
          })}
        >
          {amount}
        </h3>
      </div>
    </div>
  );
};
