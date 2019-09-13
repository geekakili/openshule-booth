import React from "react";

import styles from "./branding.module.scss";

const SidebarTitle = () => {
  return (
    <div className={styles.sidebarTitle}>
      <h1 className={styles.title}>Openshule Booth</h1>
      <p className={styles.desc}>Learn something today!</p>
    </div>
  );
};

export default SidebarTitle;
