import React from "react";
import styles from "./Orders.module.css";
import orders from "./Data";

export default function Orders() {
  return (
    <>
      {/* Title for the Orders section */}
      <div className={styles.title}>Recent Orders</div>
      
      {/* Orders table */}
      <table className={styles.table}>
        <thead>
          <tr>
            {/* Table headers */}
            <th className={styles.header}>Customer</th>
            <th className={styles.header}>Order No.</th>
            <th className={styles.header}>Amount</th>
            <th className={styles.header}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            // Table row for each order
            <tr key={item.orderNo}>
              {/* Customer details with avatar */}
              <td className={styles.cell}>
                <img
                  className={styles.avatar}
                  src={`https://randomuser.me/api/portraits/men/${Math.floor(
                    Math.random() * 100
                  )}.jpg`}
                  alt={item.customer}
                />
                {item.customer}
              </td>
              {/* Order number */}
              <td className={styles.cell}>{item.orderNo}</td>
              {/* Amount formatted as currency */}
              <td className={styles.cell}>${item.amount.toFixed(2)}</td>
              {/* Order status with conditional styling */}
              <td className={styles.cell}>
                <span
                  className={
                    item.status === "Delivered"
                      ? styles.delivered
                      : item.status === "Cancelled"
                      ? styles.cancelled
                      : styles.pending
                  }
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
