import React, { useState } from "react";
import { Logo } from "assets/icons";
import styles from "./index.module.scss";
import LoginForm from "./components/LoginForm";
import ResetPass from "./components/ResetPass";

const FormSubmit = () => {
  const [firstLogin, setFirstlogin] = useState<boolean>(false);
  return (
    <div className={`${styles["form-cont"]}`}>
      <div className={styles.form}>
        {firstLogin ? (
          <ResetPass />
        ) : (
          <LoginForm setFirstlogin={setFirstlogin} />
        )}
      </div>
      <div className={styles["logo-cont"]}>
        <Logo />
      </div>
    </div>
  );
};
export default FormSubmit;
