import React from "react";

const Button = ({ className="", children, ...otherProps }) => {
    return (
        <button className={`btn btn-primary ${className}`} {...otherProps}>
            {children}
        </button>
    );
}

export default Button;
