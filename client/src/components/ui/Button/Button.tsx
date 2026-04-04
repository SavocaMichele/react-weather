import styles from "./Button.module.scss";
import clsx from "clsx";
import React from "react";
import {NavLink} from "react-router";

interface ButtonProps {
    type?: "button" | "submit" | "reset" | "none";
    variant?: "primary" | "secondary" | "input";
    size?: "sm" | "md" | "lg";
    width?: "full";
    value: string;

    startItem?: React.ReactNode;
    endItem?: React.ReactNode;
    loading?: boolean;
    disabled?: boolean;

    href?: string;

    onClick?: (e: any) => void;
}

const Button = (props: ButtonProps) => {
    const Component = props.href ? NavLink : "button";

    // If props.type === none, stop the button from submitting forms when clicked
    const onClick = (e: any ) => {
        if (props.type === "none" && !props.href) {
            e.preventDefault();
        }

        props.onClick && props.onClick(e);
    }

    return (
        <Component
            onClick={(e) => onClick(e)}
            to={props.href || ""}
            type={props.type === "none" ? undefined : props.type}
            className={clsx(
                styles.Button,
                props.variant && styles[`--variant-${props.variant}`],
                props.size && styles[`--size-${props.size}`],
                props.width && styles[`--width-${props.width}`],
                (props.loading || props.disabled) && styles["--disabled"]
            )}
        >

            {props.loading && <span className={styles.Spinner}></span>}
            {(props.startItem && !props.loading) && props.startItem}

            <span>{props.value}</span>

            {(props.endItem && !props.loading) && props.endItem}
        </Component>
    );
}

export default Button;
