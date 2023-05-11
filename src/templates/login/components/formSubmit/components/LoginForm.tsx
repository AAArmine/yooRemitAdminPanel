import React, { FC, useState } from "react";
import styles from "./index.module.scss";
import PrimaryButton from "custom/buttons/primary";
import { Eye, Hide } from "assets/icons";

type LoginFormProps = {
  setFirstlogin: React.Dispatch<React.SetStateAction<boolean>>;
};
const LoginForm: FC<LoginFormProps> = ({ setFirstlogin }) => {
  const [changeType, setChangeType] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const fakeUser = { username: "Armine", password: "pass" };

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO-> check if user is first time logged in
    if (userName === fakeUser.username && password === fakeUser.password) {
      setErrorLogin(false);
      setFirstlogin(true);
    } else {
      setErrorLogin(true);
    }
  };
  return (
    <>
      <h1> Login</h1>
      <form onSubmit={(e) => loginSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className={errorLogin ? styles.border : ""}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className={errorLogin ? styles.border : ""}
          type={changeType ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorLogin && (
          <div className={`text-error ${styles.message}`}>
            *Wrong username or password
          </div>
        )}
        <span
          className={`${styles.eye2} absolute cursor-pointer`}
          onClick={() => setChangeType(!changeType)}
        >
          {changeType ? <Eye /> : <Hide />}
        </span>
        <div className={styles["submit-cont"]}>
          <PrimaryButton text="Login" type="submit" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
