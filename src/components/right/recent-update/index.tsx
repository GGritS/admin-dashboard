import cn from "classnames";
import React, { FC } from "react";
import { UseGeneral } from "../../../contexts/general/GeneralContext";

import avatar from "./../../../images/avatar.png";
import style from "./index.module.scss";

export const RecentUpdate: FC = () => {
  const { isLightTheme } = UseGeneral();
  return (
    <div className={style.update}>
      <div>
        <img src={avatar} alt="" className="profile-photo" />
      </div>
      <div className={style.message}>
        <p className={style.paragraph}>
          <b
            className={cn(style.userName, {
              [style.darkThemeText]: !isLightTheme,
            })}
          >
            Name Surname
          </b>
          Nobis ipsum assumenda laudantium incidunt ut consequuntur.
          <small className={`text-muted ${style.addedTime}`}>
            2 Minutes Ago
          </small>
        </p>
      </div>
    </div>
  );
};
