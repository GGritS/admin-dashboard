import React, { FC } from "react";
import { MainTableItem } from "./table-item";

import style from "./index.module.scss";
import { UseGeneral } from "../../../contexts/general/GeneralContext";
import cn from "classnames";

export const MainOrdersTable: FC = () => {
  const tableItems = [
    {
      productName: "Mini drone",
      productStatus: "Delivered",
      payment: "Due",
      productNumber: 83838,
    },
    {
      productName: "Mini drone",
      productStatus: "Declined",
      payment: "Refunded",
      productNumber: 83838,
    },
    {
      productName: "Mini drone",
      productStatus: "Delivered",
      payment: "Paid",
      productNumber: 83838,
    },
    {
      productName: "Mini drone",
      productStatus: "Pending",
      payment: "Due",
      productNumber: 83838,
    },
    {
      productName: "Mini drone",
      productStatus: "Pending",
      payment: "Due",
      productNumber: 83838,
    },
    {
      productName: "Mini drone",
      productStatus: "Pending",
      payment: "Due",
      productNumber: 83838,
    },
    {
      productName: "Mini drone",
      productStatus: "Pending",
      payment: "Due",
      productNumber: 83838,
    },
  ];
  const { isLightTheme } = UseGeneral();
  return (
    <div
      className={cn(style.recentOrders, {
        [style.darkThemeText]: !isLightTheme,
      })}
    >
      <h2 className={style.title}>Recent Orders</h2>
      <table
        className={cn(style.table, {
          [style.darkWrapper]: !isLightTheme,
        })}
      >
        <thead>
          <tr
            className={cn({
              [style.darkThemeText]: !isLightTheme,
            })}
          >
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payments</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((tItem, index) => (
            <MainTableItem
              productName={tItem.productName}
              productNumber={tItem.productNumber}
              productPayments={tItem.payment}
              productStatus={tItem.productStatus}
              key={index}
            />
          ))}
        </tbody>
      </table>
      <a href="#/" className={style.showMoreButton}>
        Show More
      </a>
    </div>
  );
};
