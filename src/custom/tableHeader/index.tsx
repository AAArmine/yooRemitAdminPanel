import React, { FC } from "react";
import SelectFilter from "../inputs/selectFilter";
import ActionButton from "../buttons/action";
import styles from "./index.module.scss";

type tableHeaderProps = {
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
export const TableHeader: FC<tableHeaderProps> = ({
  itemsPerPage,
  setItemsPerPage,
  setCurrentPage,
}) => {
  const pageOptions = { data: ["2", "4", "5", "15", "10", "20"] };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    const value = event.target.value;
    console.log("changes", value);
    setItemsPerPage(parseInt(value));
  };
  return (
    <div className={`${styles["table-header-cont"]} flex flex-wrap mt-2`}>
      <div className={`${styles["pageNumber-cont"]}`}>
        <SelectFilter data={pageOptions} label="Show" onChange={handleChange} />
      </div>
      <div className="buttons-content">
        <ActionButton text="Excel" />
      </div>
    </div>
  );
};
