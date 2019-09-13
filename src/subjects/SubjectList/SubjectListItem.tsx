import React from "react";

import styles from "./SubjectList.module.scss";
import Button from "../../common/buttons/Button";

const SubjectListItem = ({ children }) => {
  return (
    <li className={styles.item}>
      <Button className={styles.itemButton}>{children}</Button>
    </li>
  );
};

export default SubjectListItem;
