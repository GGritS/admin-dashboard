import cn from "classnames";
import React, { FC, ReactNode } from "react";
import { UseGeneral } from "../../../contexts/general/GeneralContext";

import style from "./index.module.scss";

type MainCardProps = {
  children: ReactNode;
  sum: string;
  percent: number;
  title: string;
  classN: string;
};

export const MainCard: FC<MainCardProps> = ({
  sum,
  children,
  percent,
  title,
  classN,
}) => {
  const { isLightTheme } = UseGeneral();
  return (
    <div
      className={cn(style.classN, style.wrapper, {
        [style.darkWrapper]: !isLightTheme,
      })}
    >
      <div
        className={cn(style[classN], style.mainIconWrap, {
          [style.darkMainIconWrap]: !isLightTheme,
        })}
      >
        {children}
      </div>
      <div className={style.middle}>
        <div className={style.left}>
          <h3
            className={cn(style.title, {
              [style.darkThemeText]: !isLightTheme,
            })}
          >
            {" "}
            {title}
          </h3>
          <div
            className={cn(style.totalSum, {
              [style.darkThemeText]: !isLightTheme,
            })}
          >
            ${sum}
          </div>
        </div>
        <div className={style.progress}>
          <svg className={style.svg}>
            <circle
              cx={38}
              cy={38}
              r={36}
              className={cn(style.circle, style.circleBackground, {
                [style.darkCircleBackground]: !isLightTheme,
              })}
            ></circle>
            <circle
              cx={38}
              cy={38}
              r={36}
              className={cn(style.circle, style.circleFill)}
              style={{ strokeDashoffset: 226.6 - (226.6 * percent) / 100 }}
            ></circle>
          </svg>
          <div className={style.number}>
            <p>{percent}%</p>
          </div>
        </div>
      </div>
      <small className={`text-muted ${style.small}`}>Last 24 hours</small>
    </div>
  );
};
