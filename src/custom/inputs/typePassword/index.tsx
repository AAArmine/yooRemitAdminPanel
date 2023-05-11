import React, { FC, useState } from "react";
import styles from "./index.module.scss";
import { Eye } from "assets/icons";

type dataProps = {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: boolean;
};

export const TypePassword: FC<dataProps> = ({
  label,
  onChange,
  required,
  error,
}) => {
  const [changeType, setChangeType] = useState(false);
  return (
    <div className={styles["filter-item-cont"]}>
      <label htmlFor="provider">
        {label}
        {required && <span className="text-main font-bold">*</span>}
      </label>

      {error ? (
        <>
          <input
            type={changeType ? "texts" : "password"}
            name="provider"
            onChange={onChange}
            className={styles["error"]}
          />
          <div className="text-main font-bold text-xs relative bottom-4">
            *This field is required
          </div>
        </>
      ) : (
        <input
          type={changeType ? "texts" : "password"}
          name="provider"
          onChange={onChange}
        />
      )}
      <span
        className={`${styles.eye} absolute cursor-pointer`}
        onClick={() => setChangeType(!changeType)}
      >
        <Eye />
      </span>
    </div>
  );
};
