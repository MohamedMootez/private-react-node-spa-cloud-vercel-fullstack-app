/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import styles from "./CHButton.module.css";

export const CHButton = ({
  children,
  handleClick,
  variant,
  CHBtnClassname,
  path,
  ...rest
}) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          path && navigate(path);
          handleClick && handleClick();
        }}
        className={clsx([
          CHBtnClassname,
          styles.CHBtn,
          {
            [styles.CHPrimaryBorderedBtn]: variant === "primary-bordered",
          },
        ])}
        {...rest}
      >
        <span>{children}</span>
      </button>
    </>
  );
};
