import React from "react";
import styles from "./index.module.scss";
import FeeAmount from "custom/inputs/feeAmount";

const FeeDatas = () => {
  return (
    <section className={`${styles["fee-cont"]} my-6 pt-6`}>
      <h1>sjsj</h1>
      <h1>sjsj</h1>

      <h1>sjsj</h1>
      <h1>sjsj</h1>

      <div className="flex">
        <FeeAmount dollar={true} error={true} />
        <span className="relative pt-1 ml-10">Monthly Hosting Fee</span>
      </div>
      <div className="flex">
        <FeeAmount dollar={true} />
        <span className="relative pt-1 ml-10">Monthly Maintenance Fee</span>
      </div>
      <div className="flex">
        <FeeAmount dollar={true} />
        <span className="relative pt-1 ml-10">SMS Charge Fee</span>
      </div>
      <div className="flex">
        <FeeAmount dollar={true} />
        <span className="relative pt-1 ml-10">KYC Fee Per Check</span>
      </div>
      <div className="flex">
        <FeeAmount dollar={true} />
        <span className="relative pt-1 ml-10">PAI Wallet Fee</span>
      </div>
    </section>
  );
};

export default FeeDatas;
