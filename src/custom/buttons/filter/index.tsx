import React, { FC } from "react";
import styles from "./index.module.scss";

type filterButtonProps = {
  onClick?: (event?: React.FormEvent<HTMLElement>) => void;
  children: React.ReactNode;
  inactive?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};
const FilterButton: FC<filterButtonProps> = ({
  onClick,
  children,
  inactive,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        inactive
          ? `${styles["filter-button"]} ${styles["inactive"]}`
          : styles["filter-button"]
      }
    >
      {children}
    </button>
  );
};
export default FilterButton;
