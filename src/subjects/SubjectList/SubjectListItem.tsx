import React from "react";

import styles from "./SubjectList.module.scss";

const SubjectListItem = ({ children }) => {
  return <li className={styles.item}>{children}</li>;
};

export default SubjectListItem;
