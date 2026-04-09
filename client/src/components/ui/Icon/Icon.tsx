import styles from "./Icon.module.scss";
import React from "react";
import type {IconName} from "./iconNames";
import iconMap from "./index";
import clsx from "clsx";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    icon: IconName;
    color?: "primary" | "light" | "normal" | "warning" | "success";
    size?: "xs" | "sm" | "md" | "lg" | "4xl" | "7xl" | "8xl";
}

export const Icon = (props: IconProps) => {
    const DisplayIcon = iconMap[props.icon];

    if (!DisplayIcon) {
        console.error(`Icon "${props.icon}" not found in iconMap.`);
        return null;
    }

    return (
        <span
            {...props}
            style={props.style}
            className={clsx({
                [styles.Icon]: true,
                [styles[`--color-${props.color}`]]: props.color,
                [styles[`--size-${props.size}`]]: props.size,
            }, props.className)}
        >
            <DisplayIcon />
    </span>
    );
};
