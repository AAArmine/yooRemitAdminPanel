import React from "react";
import styles from "./index.module.scss";
import TypeText from "custom/inputs/typeText";
import PrimaryButton from "custom/buttons/primary";

const ContactPersonDetails = () => {
  return (
    <section className={`${styles["contact-person-details"]} mt-2 pt-2`}>
      <div className="flex my-6 flex-wrap">
        <div className={styles["contact-person-detais-item"]}>
          <TypeText label="Contact Person Full Name" required error={true} />
        </div>
        <div className={styles["contact-person-detais-item"]}>
          <TypeText label="Contact Person Position" required />
        </div>
        <div className={styles["contact-person-detais-item"]}>
          <TypeText label="Contact Phone Number" required />
        </div>
        <div className={styles["contact-person-detais-item"]}>
          <TypeText label="Contact Email" required />
        </div>
        <div className={`${styles["contact-person-detais-item"]} flex`}>
          <div className={`${styles["button-item"]} mr-1`}>
            <PrimaryButton text="+ New Person" addFields={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPersonDetails;
