import React, { FC } from "react";
import styles from "./index.module.scss";
import { Upload } from "assets/icons";

type uploadFileProps = {
  error?: boolean;
  text: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fields?: any;
  value?: string;
  multiple?: boolean;
};
const UploadFile: FC<uploadFileProps> = ({
  text,
  error,
  onChange,
  fields,
  value,
  multiple
}) => {
  return (
    <div className={styles["upload-cont"]}>
      <input
        type="file"
        id={`upload-btn ${text}`}
        hidden
        {...fields}
        onChange={onChange}
        value={value}
        multiple={multiple}
      />
      <label
        htmlFor={`upload-btn ${text}`}
        className={error ? styles.error : ""}
      >
        <Upload />
        {text}
      </label>
    </div>
  );
};

export default UploadFile;
