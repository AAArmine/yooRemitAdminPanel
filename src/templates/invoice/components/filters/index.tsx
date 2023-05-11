import React from "react";
import PrimaryButton from "custom/buttons/primary";
import TypeText from "custom/inputs/typeText";
import DataInput from "custom/data";
import Select from "custom/inputs/selectHeader";
import styles from "./index.module.scss";

export const InvoiceFilters = () => {
  const clientData = {
    data: [
      "client 1",
      "client 2",
      "client 3",
      "client 4",
      "client 5",
      "client 6",
      "client 7",
      "client 8",
      "client 9",
    ],
  };
  return (
    <form style={{ height: "100%", width: "100%" }} onSubmit={(e: React.SyntheticEvent) => {
      e.preventDefault();
    }}>
      <div
      className={`${styles["invoice-cont"]} flex flex-wrap justify-start pt-8 mt-2`}
    >
      <div className={styles["select-item"]}>
        <Select label="Client" data={clientData} all/>
      </div>
      <div className={styles["select-item"]}>
        <DataInput label="Date" />
      </div>
      <div className={styles["select-item"]}>
        <Select label="Status" data={clientData} all/>
      </div>
      <div className={styles["select-item"]}>
        <TypeText label="Invoice Amount" />
      </div>
      <div className={styles["select-item"]}>
        <Select label="Currency" data={clientData} all/>
      </div>
      <div className={styles["select-item"]}>
        <PrimaryButton text="Submit" />
      </div>
      <div className={styles["select-item"]} />
      <div className={styles["select-item"]} />
    </div>
    </form>
    
  );
};
