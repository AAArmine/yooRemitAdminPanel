import React from "react";
import Select from "custom/inputs/selectHeader";
import SelectFilter from "custom/inputs/selectFilter";
import PrimaryButton from "custom/buttons/primary";
import DataInput from "custom/data";
import styles from "./index.module.scss";

const Filters = () => {
  const providerData = { data: ["provider 1", "provider 2", "provider 3"] };
  return (
    <form
      style={{ height: "100%", width: "100%" }}
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
      }}
    >
      <div
        className={`${styles.filters} flex flex-wrap justify-start pt-4 mt-2 pb-4`}
      >
        <div className={styles["select-item"]}>
          <DataInput label="Date" />
        </div>
        <div className={styles["select-item"]}>
          <Select data={providerData} label="Branch" all />
        </div>
        <div className={styles["select-item"]}>
          <Select data={providerData} label="Destination Country" all />
        </div>
        <div className={styles["select-item"]}>
          <Select data={providerData} label="Transaction ID" all />
        </div>
        <div className={styles["select-item"]}>
          <Select data={providerData} label="Client" all />
        </div>
        <div className={styles["select-item"]}>
          <Select data={providerData} label="Provider" all />
        </div>
        <div className={styles["select-item"]}>
          <Select data={providerData} label="Status" all />
        </div>
        <div className={styles["select-item"]}>
          <Select data={providerData} label="Lexis-Nexis Check" all />
        </div>
        <div className={styles["select-item"]}>
          <Select data={providerData} label="SMS Sent" all />
        </div>
        <div className={styles["select-item"]}>
          <Select data={providerData} label="TheteRay Check" all />
        </div>
        <div className={styles["select-item"]}>
          <div className={styles.submit}>
            <PrimaryButton text="Submit" />
          </div>
        </div>
      </div>
    </form>
  );
};
export default Filters;
