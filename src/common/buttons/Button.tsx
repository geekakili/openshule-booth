import React, { FunctionComponent, ReactNode } from "react";
import cx from "classnames";

import styles from "./Button.module.scss";

interface IProps {
  children: ReactNode | ReactNode[];
  onClick?: any;
  className?: string;
}

const Button: FunctionComponent<IProps> = ({
  children,
  className,
  onClick
}) => {
  return (
    <button className={cx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
