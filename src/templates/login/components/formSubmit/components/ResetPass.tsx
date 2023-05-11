import React, { useState } from "react";
import styles from "./index.module.scss";
import PrimaryButton from "custom/buttons/primary";
import { Eye, Hide } from "assets/icons";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
  const [changeTypePass1, setChangeTypePass1] = useState<boolean>(false);
  const [changeTypePass2, setChangeTypePass2] = useState<boolean>(false);

  const [newPass, setNewPass] = useState<string>("");
  
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [errorPassMatch, setErrorPassMatch] = useState<boolean>(false);
  const [successChangePass, setSuccessChangePass] = useState(false);
  let navigate = useNavigate();
  // const passSuccess=()=>{

  // }
  const passResetSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPass === newPass) {
      setErrorPassMatch(false);
      setSuccessChangePass(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setErrorPassMatch(true);
    }
  };

  return (
    <>
      <h1>Set Your Password</h1>
      <p>Please Create Your New Password</p>
      <form onSubmit={(e) => passResetSubmit(e)}>
        <label htmlFor="username">New Password</label>
        <input
          id="username"
          onChange={(e) => setNewPass(e.target.value)}
          type={changeTypePass1 ? "text" : "password"}
        />
        <label htmlFor="password">Confirm New Password</label>
        <span
          className={`${styles.eye1} absolute cursor-pointer`}
          onClick={() => setChangeTypePass1(!changeTypePass1)}
        >
          {changeTypePass1 ? <Eye /> : <Hide />}
        </span>
        <input
          id="password"
          type={changeTypePass2 ? "text" : "password"}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        {errorPassMatch && (
          <div className={`text-error ${styles.message}`}>
            *Inserted passwords don't match
          </div>
        )}
        {successChangePass && (
          <div className={`text-success ${styles.message}`}>
            Your password hab been changed!
          </div>
        )}
        <span
          className={`${styles.eye2} absolute cursor-pointer`}
          onClick={() => setChangeTypePass2(!changeTypePass2)}
        >
          {changeTypePass2 ? <Eye /> : <Hide />}
        </span>
        <div className={styles["submit-cont"]}>
          <PrimaryButton text="Login" type="submit" />
        </div>
      </form>
    </>
  );
};

export default ResetPass;
