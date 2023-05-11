import React, { useState } from "react";
import styles from "./index.module.scss";
import DataInput from "custom/data";
import { Visa } from "assets/icons";
import PrimaryButton from "custom/buttons/primary";
import FilterButton from "custom/buttons/filter";

const PaymentMethod = () => {
  const [inactive, setInactive] = useState<boolean>(false);
  return (
    <section className={styles["payment-method-cont"]}>
      <h3>Monthly Payment Method</h3>
      <div className={`${styles["payment-chose"]} flex  flex-wrap mt-6`}>
        <div className={`${styles["payment-item"]} ${styles.chose}`}>
          <div className={styles.relative}>
            <input type="radio" id="card" name="method" />
            <label htmlFor="card">Card Payment</label>
            <Visa />
          </div>
        </div>
        <div className={styles["payment-item"]}>
          <DataInput label="Payment Date" />
        </div>
        <div className={`${styles["payment-item"]} ${styles.chose}`}>
          <div className={styles.relative}>
            <input type="radio" id="deposit" name="method" />
            <label htmlFor="deposit">Deposit Payment</label>
          </div>
        </div>
      </div>
      <div className="text-right justify-end flex">
        <div className={styles["buttons-cont"]}>
          <div className={styles["buttons-item"]}>
            <FilterButton inactive={inactive ? true : false} type="button">
              Cancel
            </FilterButton>
          </div>
          <div className={styles["buttons-item"]}>
            <PrimaryButton text="Save" inactive={inactive ? true : false} type="submit"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
