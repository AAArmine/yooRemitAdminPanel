import React, { FC } from "react";
import styles from "./index.module.scss";

type ContentWrapperProps = {
  title: string;
  children: React.ReactNode;
};
const ContentWrapper: FC<ContentWrapperProps> = ({ title, children }) => {
  return (
    <section className={styles.content}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
export default ContentWrapper;
