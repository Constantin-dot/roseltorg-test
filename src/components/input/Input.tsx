import React, { InputHTMLAttributes } from "react";
import classes from "./Input.module.scss";

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = React.memo(({ label, ...rest }: PropsType) => {
    return (
        <div className={classes.input}>
            <p className={classes.input__label}>{label}</p>
            <input className={classes.input__elem} {...rest} />
        </div>
    );
});
