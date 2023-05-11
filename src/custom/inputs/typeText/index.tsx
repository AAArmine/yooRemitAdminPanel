import React, { FC } from "react";
import styles from "./index.module.scss";

type dataProps = {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: boolean;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  id?: string;
  name?: string;
  tel?: boolean;
  fields?: any;
};

const TypeText: FC<dataProps> = ({
  label,
  onChange,
  required,
  error,
  placeholder,
  disabled,
  value,
  id,
  name,
  tel,
  fields,
}) => {
  return (
    <div className={styles["filter-item-cont"]}>
      <label htmlFor="provider">
        {label}
        {required && <span className="text-main font-bold">*</span>}
      </label>
      <>
        <input
          type="text"
          {...fields}
          className={
            error && tel
              ? `${styles["error"]} ${styles["padding-left"]}`
              : tel
              ? styles["padding-left"]
              : error
              ? styles["error"]
              : ""
          }
          placeholder={placeholder}
          value={value}
          id={id}
          name={name}
          onChange={onChange}
        />

        {tel && <span className="absolute left-2 top-2 font-bold">+972</span>}
      </>
    </div>
  );
};
export default TypeText;
