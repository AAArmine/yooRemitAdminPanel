import ActionButton from "custom/buttons/action";
import styles from "./index.module.scss";
import { Search } from "assets/icons";

export const SearchUsers = () => {
  return (
    <div className="pt-8">
      <div className="flex justify-between wrap relative">
        <input
          type="text"
          className={styles["search-users"]}
          placeholder="Search by User Roles, by Month, Status"
        />
        <ActionButton text="Excel" />
        <div className="absolute p-2">
          <Search />
        </div>
      </div>
    </div>
  );
};
