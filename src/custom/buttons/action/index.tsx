import React, { FC } from "react";
import styles from "./index.module.scss";

type filterButtonProps = {
  text: string;
  onClick?: () => void;
};
const ActionButton: FC<filterButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles["action-button"]}>
      {text}
    </button>
  );
};
export default ActionButton;
