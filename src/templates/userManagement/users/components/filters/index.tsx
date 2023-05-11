import React from "react";
import PrimaryButton from "custom/buttons/primary";
import Select from "custom/inputs/selectHeader";
import TypeText from "custom/inputs/typeText";
import styles from "./index.module.scss";

export const FilterAllUsers = () => {
  const userRoles = { data: ["PM", "PO", "Finance", "Admin"] };
  return (
    <div
      className={`${styles["inputs-cont"]} flex flex-wrap justify-between relative py-4`}
    >
      <div className={styles["select-item"]}>
        <Select label="User Role" data={userRoles} />
      </div>
      <div className={styles["select-item"]}>
        <TypeText label="Username" />
      </div>
      <div className={styles["select-item"]}>
        <TypeText label="User Full Name" />
      </div>
      <div className={styles["select-item"]}>
        <PrimaryButton text="Submit" />
      </div>
    </div>
  );
};
