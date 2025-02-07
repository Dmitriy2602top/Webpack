import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
Button.displayName = "Button";

export default Button;
