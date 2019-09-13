import React, { FunctionComponent, ReactNode } from "react";
import cx from "classnames";

import styles from "./Button.module.scss";

interface IProps {
  children: ReactNode | ReactNode[];
  className?: string;
}

const Button: FunctionComponent<IProps> = ({ children, className }) => {
  return <button className={cx(styles.button, className)}>{children}</button>;
};

export default Button;
