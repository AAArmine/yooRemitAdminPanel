import React, { useLayoutEffect, useState } from "react";
import { LightLogo } from "assets/icons";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import {
  DashboardIcon,
  ClientIcon,
  ArrowExpand,
  Setting,
  ArrowWhite,
} from "assets/icons";

const Sidebar = () => {
  const [expandInvoice, setExpandInvoice] = useState<boolean>(false);
  const [expandUsers, setExpandUsers] = useState<boolean>(false);

  useLayoutEffect(() => {
    const pageLocation = window.location.pathname;
    if (
      pageLocation === "/invoice-report" ||
      pageLocation === "/fee-management" ||
      pageLocation === "/transaction-report"
    ) {
      setExpandInvoice(true);
    } else {
      setExpandInvoice(false);
    }
    if (pageLocation === "/user-management") {
      setExpandUsers(true);
    } else {
      setExpandUsers(false);
    }
  }, []);
  return (
    <section className={styles.sidebar}>
      <div className={styles["logo-cont"]}>
        <LightLogo />
      </div>
      <div className={styles.sidenav}>
        <NavLink
          to="/dashboard"
          className={(props) =>
            props.isActive
              ? `${styles["sidenav-item"]} ${styles.active}`
              : styles["sidenav-item"]
          }
        >
          <div>
            <DashboardIcon />
          </div>
          <span>Dashboard</span>
        </NavLink>
        <div
          className={styles["sidenav-item"]}
          onClick={() => setExpandInvoice(!expandInvoice)}
        >
          <ClientIcon />
          <span>Client</span>
          <div
            className={
              expandInvoice
                ? `${styles.rotate} ${styles.expand}`
                : styles.expand
            }
          >
            <ArrowExpand />
          </div>
        </div>
        {expandInvoice && (
          <>
            <NavLink
              to="/transaction-report"
              className={(props) =>
                props.isActive
                  ? `${styles["sidenav-item"]} ${styles.active}`
                  : styles["sidenav-item"]
              }
            >
              <div />
              <span>Transaction Report</span>
            </NavLink>
            <NavLink
              to="/fee-management"
              className={(props) =>
                props.isActive
                  ? `${styles["sidenav-item"]} ${styles.active}`
                  : styles["sidenav-item"]
              }
            >
              <div />
              <span>Fee Management</span>
            </NavLink>
            <NavLink
              to="/invoice-report"
              className={(props) =>
                props.isActive
                  ? `${styles["sidenav-item"]} ${styles.active}`
                  : styles["sidenav-item"]
              }
            >
              <div />
              <span>Invoice Report</span>
            </NavLink>
          </>
        )}
        <div
          className={styles["sidenav-item"]}
          onClick={() => setExpandUsers(!expandUsers)}
        >
          <Setting />
          <span>Settings</span>
          <div
            className={
              expandUsers ? `${styles.rotate} ${styles.expand}` : styles.expand
            }
          >
            <ArrowWhite />
          </div>
        </div>
        {expandUsers && (
          <NavLink
            to="/user-management"
            className={(props) =>
              props.isActive
                ? `${styles["sidenav-item"]} ${styles.active}`
                : styles["sidenav-item"]
            }
          >
            <div />
            <span>User Management</span>
          </NavLink>
        )}
        
      </div>
    </section>
  );
};
export default Sidebar;
