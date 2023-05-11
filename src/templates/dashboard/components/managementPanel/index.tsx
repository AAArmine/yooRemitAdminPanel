import React, { FC } from "react";

import styles from "./index.module.scss";

type managementProps = {
  dataFor: { name: string; value: number; color: string };
};
export const Management: FC<managementProps> = ({ dataFor }) => {
  return (
    <div className={styles["panel-cont"]}>
      <div className={styles.data}>
        <h4>{dataFor.name}</h4>
        <div className={`${styles.value} ${styles[`${dataFor.color}`]}`}>
          {dataFor.value}
        </div>
      </div>
    </div>
  );
};
