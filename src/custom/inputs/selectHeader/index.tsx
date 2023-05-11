import React, { FC, useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import { Arrow } from "assets/icons";
import { useDispatch } from "react-redux";

type dataProps = {
  data: info;
  label: string;
  all?: boolean;
  required?: boolean;
  singleChose?: boolean;
  name?: string;
  idData?: string;
  reducerFunc?: any;
};
type info = {
  data: string[];
};

const Select: FC<dataProps> = ({
  data,
  label,
  required,
  all,
  singleChose,
  name,
  idData,
  reducerFunc,
}) => {
  const [filterValue, setFilterValue] = useState<string[]>(
    all ? ["All"] : [""]
  );
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [expandSearch, setExpandSearch] = useState<boolean>(false);
  const handleExpandClick = (): void => {
    setExpandSearch(!expandSearch);
  };
  const dispatch = useDispatch();

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setExpandSearch(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);
  const handleMultiSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (filterValue.includes(inputValue)) {
      const chosedItems = filterValue.filter(
        (item) => item !== "All" && item !== inputValue
      );
      if (chosedItems.length === 0) {
        chosedItems.push("All");
      }
      setFilterValue(chosedItems);
    } else {
      const chosedItems = filterValue.filter((item) => item !== "All");
      chosedItems.push(inputValue);
      setFilterValue(chosedItems);
    }
  };
  return (
    <div className={styles["filter-item-cont"]}>
      <div className={styles.label}>
        {label}
        {required && <span className="text-main font-bold">*</span>}
      </div>
      <div ref={wrapperRef} className={styles["select-cont"]}>
        <div onClick={handleExpandClick}>
          <input
            type="text"
            className={styles.select}
            value={filterValue.map((el) => ` ${el}`)}
            name={name}
            disabled
          />
          <span className={expandSearch ? styles.rotate : ""}>
            <Arrow />
          </span>
        </div>
        {expandSearch && (
          <div className={styles.data}>
            {data.data.map((choseOption, index) => (
              <div className={styles.option} key={choseOption}>
                {singleChose ? (
                  <input
                    type="radio"
                    id={choseOption}
                    value={choseOption}
                    name="position"
                    checked={filterValue[0] === choseOption ? true : false}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setFilterValue([e.target.value]);
                      dispatch(
                        reducerFunc({
                          id: idData || "{}",
                          position: e.target.value,
                        })
                      );
                    }}
                  />
                ) : (
                  <input
                    type="checkbox"
                    id={choseOption}
                    value={choseOption}
                    checked={filterValue.includes(choseOption) ? true : false}
                    onChange={handleMultiSelect}
                  />
                )}

                <label htmlFor={choseOption}>{choseOption}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Select;
