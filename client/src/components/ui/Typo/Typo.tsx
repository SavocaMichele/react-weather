import styles from "./Typo.module.scss";
import clsx from "clsx";
import React from "react";


interface TypoProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: "primary" | "secondary" | "tertiary" | "light" | "warning";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "7xl" | "8xl";
    weight?: "light" | "normal" | "medium" | "semibold" | "bold";
    align?: "left" | "center" | "right";
    transform?: "uppercase" | "lowercase" | "capitalize";
    children?: React.ReactNode;
}

const Typo = ({
    color,
    size,
    weight,
    align,
    transform,
    children,
    className,
    ...props
}: TypoProps) => {
    return (
        <span
            className={clsx(
                styles.Typo,
                color && styles[`--color-${color}`],
                size && styles[`--size-${size}`],
                weight && styles[`--weight-${weight}`],
                align && styles[`--align-${align}`],
                transform && styles[`--transform-${transform}`],
                props.onClick && styles["--clickable"],
                className
            )}
            {...props}
        >
                {children}
            </span>
    );
}

export default Typo;
