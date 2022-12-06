import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import style from "./index.module.scss";
import cn from "classnames";

type SideBarItemProps = {
  name: string;
  children: ReactNode;
  notifications?: number;
  index: number;
  isActive: number;
  setActiveSideBarItem: React.Dispatch<React.SetStateAction<number>>;
};

export const SideBarItem: FC<SideBarItemProps> = ({
  name,
  children,
  notifications,
  isActive,
  index,
  setActiveSideBarItem,
}) => {
  const handleSelect = () => {
    setActiveSideBarItem(index);
  };

  return (
    <Link
      className={cn(style.link, {
        [style.active]: isActive === index,
      })}
      onClick={handleSelect}
      to="/"
    >
      <div className={style.iconWrap}>{children}</div>
      <h3 className={style.name}>{name}</h3>
      {/* {notifications && <span className="messagesCount">{notifications}</span>} */}
    </Link>
  );
};
