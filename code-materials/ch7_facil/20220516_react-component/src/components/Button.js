import React from 'react';
import classNames from "classnames"
import { PropTypes } from "prop-types"
import style from "./Button.module.css"

const backgroundColor = {
  primary: "#61DBFB",
  secondary: "#ffffff",
  black: "#000000",
}

const textColor = {
  primary: "#000000",
  secondary: "#000000",
  black: "#ffffff",
}

const Button = ({ children, variant, onClick, className, ...props }) => {
  const styles = {
    backgroundColor: backgroundColor[variant] || backgroundColor.primary,
    color: textColor[variant] || textColor.primary,
  };

  return (
    <button style={styles} {...props} onClick={onClick} className={classNames(style.Button, className)}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "black"
  ]),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  variant: "primary",
  onClick: () => {},
}

export default Button;
