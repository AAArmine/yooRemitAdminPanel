import React, { FC, useState } from "react";
import styles from "./index.module.scss";

type dataProps = {
  data: info;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  all?: boolean;
  required?: boolean;
};
type info = {
  data: string[];
};

const SelectFilter: FC<dataProps> = ({
  data,
  label,
  onChange,
  all,
  required,
}) => {
  const [filterValue, setFilterValue] = useState<string[]>(["All"]);
  return (
    <div className={styles["filter-item-cont"]}>
      <label htmlFor="pageSelect" className={styles.label}>
        {label}
        {required && <span className="text-main font-bold">*</span>}
      </label>
      <select className={styles.select} name="pageSelect" onChange={onChange}>
        {data.data.map((pageOption) => (
          <option key={pageOption}>{pageOption}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectFilter;
