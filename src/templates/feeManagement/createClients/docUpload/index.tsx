import React from "react";
import UploadFile from "custom/buttons/upload";
import styles from "./index.module.scss";

const DocUpload = () => {
  return (
    <section className="my-6 flex wrap"> <span>scsndfdsfdfsdfd</span>
      <div className={styles["button-cont"]}>
       
        <UploadFile text="Certificate of Incorporation" error={true} />
      </div>
      <div className={styles["button-cont"]}>
        <span>scsndfdsfdfsdfd</span>

        <UploadFile text="Client House Documents" />
      </div>
      <div className={styles["button-cont"]}>
        <span>scsndfdsfdfsdfd</span>

        <UploadFile text="Other Necessary Documents" />
      </div>
      <div className={styles["button-cont"]}>
        <span>scsndfdsfdfsdfd</span>

        <UploadFile text="Other Necessary Documents" />
      </div>
    </section>
  );
};

export default DocUpload;
