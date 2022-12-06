import React, { FC, useState } from "react";

import avatar from "./../../../images/avatar.png";

import WbSunnySharpIcon from "@mui/icons-material/WbSunnySharp";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import cn from "classnames";

import style from "./index.module.scss";
import { UseGeneral } from "../../../contexts/general/GeneralContext";

export const UserSection: FC = () => {
  const { isLightTheme, setIsLightTheme } = UseGeneral();
  return (
    <div className={style.userSection}>
      <div className={style.themeToggle}>
        <WbSunnySharpIcon
          onClick={() => setIsLightTheme(true)}
          className={cn(style.themeToggleIcon, {
            [style.active]: isLightTheme,
            [style.darkThemeIcon]: !isLightTheme,
          })}
        />
        <DarkModeSharpIcon
          onClick={() => setIsLightTheme(false)}
          className={cn(style.themeToggleIcon, {
            [style.active]: !isLightTheme,
            [style.darkThemeIcon]: !isLightTheme,
          })}
        />
      </div>
      <div className={style.profile}>
        <div className={style.info}>
          <div
            className={cn(style.infoNameWrapper, {
              "text-muted": !isLightTheme,
            })}
          >
            <div>Hey, </div>
            <b
              className={cn(style.userName, {
                [style.darkThemeText]: !isLightTheme,
              })}
            >
              Name
            </b>
          </div>
          <small className={cn("text-muted", {})}>Admin</small>
        </div>
        <div className={style.profilePhotoWrapper}>
          <img src={avatar} alt="" className="profile-photo" />
        </div>
      </div>
    </div>
  );
};
