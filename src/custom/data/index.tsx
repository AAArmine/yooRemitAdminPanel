import React, { FC } from "react";
import { Calendar } from "assets/icons";
import styles from "./index.module.scss";

type dataInputProps = {
  label: string;
  defaultValue?: string;
  disabled?: boolean;
};
const DataInput: FC<dataInputProps> = ({ label, disabled, defaultValue }) => {
  return (
    <div className={styles["filter-item-cont"]}>
      <span className={styles["open-button"]}>
        <button type="button">
          <Calendar />
        </button>
      </span>
      <label htmlFor="provider">{label}</label>
      <input type="date" defaultValue={defaultValue} disabled={disabled} />
    </div>
  );
};
export default DataInput;
