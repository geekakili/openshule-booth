import React from "react";

import styles from "./SubjectList.module.scss";
import Button from "../../common/buttons/Button";
import { ReactComponent as BulbIcon } from "../../common/icons/bulb.svg";

const SubjectListItem = ({ children, onClick }) => {
  return (
    <li className={styles.item}>
      <Button className={styles.itemButton} onClick={onClick}>
        <div className={styles.icon}>
          <BulbIcon />
        </div>
        <span>{children}</span>
      </Button>
    </li>
  );
};

export default SubjectListItem;
