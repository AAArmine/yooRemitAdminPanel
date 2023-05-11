import React from "react";
import TypeText from "custom/inputs/typeText";
import { TypePassword } from "custom/inputs/typePassword";
import Select from "custom/inputs/selectHeader";
import styles from "./index.module.scss";

export const CreateUserInputs = () => {
  const userRoles = { data: ["PM", "PO", "Finance", "Admin"] };
  return (
    <div
      className={`${styles["inputs-cont"]} flex flex-wrap justify-between mt-2 pb-8`}
    >
      <div className={styles["select-item"]}>
        <TypeText label="Name" required={true} error={true} />
      </div>
      <div className={styles["select-item"]}>
        <TypeText label="Middle Name" required={true} />
      </div>
      <div className={styles["select-item"]}>
        <TypeText label="Last Name" required={true} />
      </div>
      <div className={styles["select-item"]}>
        <TypeText label="Username" required={true} />
      </div>
      <div className={styles["select-item"]}>
        <Select label="User Role" data={userRoles} required={true} />
      </div>
      <div className={styles["select-item"]}>
        <TypeText label="Email" required={true} />
      </div>
      <div className={styles["select-item"]}>
        <TypePassword label="Confirm Password" required={true} error={true} />
      </div>
      <div className={styles["select-item"]}>
        <TypePassword label="Confirm Password" required={true} error={true} />
      </div>
    </div>
  );
};
