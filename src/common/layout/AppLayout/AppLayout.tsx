import React from "react";

import styles from "./AppLayout.module.scss";

const AppLayout = ({ children }) => {
  return <div className={styles.appLayout}>{children}</div>;
};

AppLayout.Sidebar = ({ children }) => (
  <aside className={styles.sidebar}>{children}</aside>
);

AppLayout.Content = ({ children }) => (
  <main className={styles.content}>{children}</main>
);

export default AppLayout;
