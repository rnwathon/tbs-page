import clsx from "clsx";
import React from "react";
import { Button as BootButton } from "react-bootstrap";

const Button  = ({children, color = "primary", className, ...props}) => {
  const style = clsx([
    color === "primary" && 'tbs-primary-btn', 
    color === "secondary" && 'tbs-secondary-btn', 
    className]);
  return <BootButton className={style} {...props}>
    {children}
  </BootButton>;
}

export default Button;