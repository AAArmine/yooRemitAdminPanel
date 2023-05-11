import React, { FC } from "react";
import ContentWrapper from "custom/wrappers/contentWrapper";
import styles from "./index.module.scss";
import Layout from "custom/layout";
import { Management } from "./components/managementPanel";
import {
  InvoiceReport,
  TransactionReport,
  FeeManagement,
  UserManagement,
  Arrow,
} from "assets/icons";
import { NavLink } from "react-router-dom";

type dashboardProps = {
  test: string;
};
const reviewData = [
  { name: "Due Invoices", value: 80, color: "secondary" },
  { name: "Failed Transactions", value: 5, color: "secondary" },
  { name: "Total SMS Sent", value: 40, color: "main" },
  { name: "Total KYC Checks", value: 25, color: "secondary" },
  { name: "Total TRN", value: 19, color: "alternative" },
];
export const Dashboard: FC<dashboardProps> = ({ test }) => {
  return (
    <Layout>
      <ContentWrapper title="Dashboard">
        <div className={`${styles["dashboard-cont"]} flex-between flex-wrap`}>
          <div className={styles["dashboard-item"]}>
            <div className={styles["image-cont"]}>
              <TransactionReport />
            </div>
            <NavLink to="/transaction-report">
              <div className={`${styles["just-items"]} flex-between`}>
                <span>Client Transaction Reports</span>
                <span className={styles.arrow}>
                  <Arrow />
                </span>
              </div>
            </NavLink>
          </div>
          <div className={styles["dashboard-item"]}>
            <div className={styles["image-cont"]}>
              <InvoiceReport />
            </div>
            <NavLink to="/invoice-report">
              <div className="flex-between">
                <span>Client Invoice Reports</span>
                <span className={styles.arrow}>
                  <Arrow />
                </span>
              </div>
            </NavLink>
          </div>
          <div className={styles["dashboard-item"]}>
            <div className={styles["image-cont"]}>
              <FeeManagement />
            </div>
            <NavLink to="/fee-management">
              <div className="flex-between">
                <span>Client Fee Managment</span>
                <span className={styles.arrow}>
                  <Arrow />
                </span>
              </div>
            </NavLink>
          </div>
          <div className={styles["dashboard-item"]}>
            <div className={styles["image-cont"]}>
              <UserManagement />
            </div>
            <NavLink to="/user-management">
              <div className="flex-between">
                <span>User Managment</span>
                <span className={styles.arrow}>
                  <Arrow />
                </span>
              </div>
            </NavLink>
          </div>
        </div>
        <h2 className={styles["secondary-title"]}>
          Quick Review For Reporting Period
        </h2>
        <div className={`${styles["dashboard-cont"]} flex-between flex-wrap`}>
          {reviewData.map((data) => (
            <div className={styles["management-item"]} key={data.name}>
              <Management dataFor={data} />
            </div>
          ))}
        </div>
      </ContentWrapper>
    </Layout>
  );
};
