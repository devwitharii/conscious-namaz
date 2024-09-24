import Link from "next/link";
import React from "react";

const Button = ({ 
    className, 
    href, 
    children, 
    varient = "primary" 
}) => {

  const variantClass = {
    default: "py-3 px-4 rounded-[3px] uppercase transition-colors",
    primary: "bg-primary hover:bg-primary-hover text-white",
    light: "bg-white hover:bg-gray-200 text-primary",
    "outline-primary" :"border border-primary text-primary bg-white hover:bg-primary hover:text-white"
  };

  const btnClass = `${variantClass.default} ${variantClass[varient]} ${className}`;

  return href ? (
    <Link href={href} className={btnClass}>
      {children}
    </Link>
  ) : (
    <button className={btnClass}>{children}</button>
  );
};

export default Button;
