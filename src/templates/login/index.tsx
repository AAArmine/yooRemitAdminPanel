import React from "react";
import styles from "./index.module.scss";
import { LoginImage } from "./components/loginImage";
import FormSubmit from "./components/formSubmit";

const Login = () => {
  return (
    <section className={styles["login-cont"]}>
      <FormSubmit />
      <LoginImage />
    </section>
  );
};
export default Login;
