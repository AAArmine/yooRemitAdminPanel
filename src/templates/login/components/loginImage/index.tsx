import styles from "./index.module.scss";
import { Main } from "assets/images";

export const LoginImage = () => {
  return (
    <div className={`${styles["image-cont"]}`}>
      <img src={Main} />
    </div>
  );
};
