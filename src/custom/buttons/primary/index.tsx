import React, { FC } from "react";
import styles from "./index.module.scss";

type primaryButtonProps = {
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event?: React.FormEvent<HTMLElement> | number | string) => void;
  addFields?: boolean;
  inactive?: boolean;
};
const PrimaryButton: FC<primaryButtonProps> = ({
  text,
  onClick,
  type,
  addFields,
  inactive,
}) => {
  const defineClass = {};
  return (
    <button
      type={type}
      className={
        addFields
          ? styles.add
          : inactive
          ? `${styles.primary} ${styles.inactive}`
          : styles.primary
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default PrimaryButton;
