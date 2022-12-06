import cn from "classnames";
import React, { FC } from "react";

import style from "./index.module.scss";

export type MainTableItemProps = {
  productName: string;
  productNumber: number;
  productPayments: string;
  productStatus: string;
};

export const MainTableItem: FC<MainTableItemProps> = ({
  productName,
  productNumber,
  productPayments,
  productStatus,
}) => {
  return (
    <tr className={style.wrapper}>
      <td className={style.tItem}>{productName}</td>
      <td className={style.tItem}>{productNumber}</td>
      <td className={style.tItem}>{productPayments}</td>
      <td
        className={cn(style.tItem, {
          [style.warning]: productStatus === "Pending",
          [style.success2]: productStatus === "Delivered",
          [style.danger]: productStatus === "Declined",
        })}
      >
        {productStatus}
      </td>
      <td className={cn(style.details, style.tItem)}>Details</td>
    </tr>
  );
};
