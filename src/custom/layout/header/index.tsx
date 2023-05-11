import React, { FC } from "react";
import { Time, Logout } from "assets/icons";
import styles from "./index.module.scss";

const Header: FC = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <section className={styles.header}>
      <div className={styles.time}>
        <Time />
        <span>{date}</span>
      </div>
      <div className={styles.logout}>
        <span>
          <b>Welcome,</b> John Smith
        </span>
        <Logout />
      </div>
    </section>
  );
};
export default Header;
