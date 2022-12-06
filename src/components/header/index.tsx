import React, { FC } from "react";

import CloseIcon from "@mui/icons-material/Close";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

import logo from "./../../images/logo.png";

import style from "./index.module.scss";
import { UserSection } from "./userSection";
import { UseGeneral } from "../../contexts/general/GeneralContext";
import cn from "classnames";

export const Header: FC = () => {
  const { isMobile, isSideBarOpen, setIsSideBarOpen, isLightTheme } =
    UseGeneral();

  return (
    <div
      className={cn(style.wrapper, {
        [style.darkWrapper]: !isLightTheme,
      })}
    >
      <div className={style.logoSection}>
        {isMobile && (
          <div className={cn(style.headerBtnWrapper)}>
            {isSideBarOpen ? (
              <CloseIcon
                className={cn(style.close, {
                  [style.darkThemeIcon]: !isLightTheme,
                })}
                onClick={() => setIsSideBarOpen(false)}
              />
            ) : (
              <MenuSharpIcon
                className={cn(style.menuIconBtn, style.menuBtn, {
                  [style.darkThemeIcon]: !isLightTheme,
                })}
                onClick={() => setIsSideBarOpen(true)}
              />
            )}
          </div>
        )}
        <div className={style.logoWrap}>
          <img src={logo} alt="avatar" className={style.logoImg} />
          <h2 className={style.logoText}>
            <span
              className={cn({
                [style.darkThemeText]: !isLightTheme,
              })}
            >
              GG
            </span>
            <span className="danger">RRITS</span>
          </h2>
        </div>
      </div>
      <h1
        className={cn(style.title, {
          [style.darkThemeText]: !isLightTheme,
        })}
      >
        Dashboard
      </h1>
      <UserSection />
    </div>
  );
};
