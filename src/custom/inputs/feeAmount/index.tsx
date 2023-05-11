import React, { FC } from "react";
import styles from "./index.module.scss";
import { Dollar } from "assets/icons";
import { Percent } from "assets/icons";

type FeeAmount = {
  amount?: number;
  dollar?: boolean;
  placeholder?: string;
  disabled?: boolean;
  right?: boolean;
  percent?: boolean;
  error?:boolean
};
const FeeAmount: FC<FeeAmount> = ({
  amount,
  dollar,
  placeholder,
  disabled,
  right,
  percent,
  error
}) => {
  return (
    <div className="mb-2 relative">
      <input
        type="text"
        className={error?`${styles["custom-input"]} ${styles.error}`:styles["custom-input"]}
        placeholder={placeholder}
        disabled={disabled}
        value={amount}
      />
      {dollar && (
        <span
          className={right ? `${styles.dollar} ${styles.right}` : styles.dollar}
        >
          {percent ? <Percent /> : <Dollar />}
        </span>
      )}
    </div>
  );
};

export default FeeAmount;
