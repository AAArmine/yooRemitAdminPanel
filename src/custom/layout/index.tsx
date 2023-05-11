import React, { FC } from "react";
import styles from "./index.module.scss";
import Sidebar from "./sidebar";
import Header from "./header";

type propsLayout = { children: React.ReactNode };
const Layout: FC<propsLayout> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <section className={styles.pattern}>
        <Header />
        {children}
      </section>
    </div>
  );
};
export default Layout;
