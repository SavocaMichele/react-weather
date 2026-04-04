import styles from "./Box.module.scss";
import type { FlexProps } from "@types"
import clsx from "clsx";
import React from "react";

interface BoxProps extends FlexProps {
    variant?:   "";
    inset?:     "xs" | "sm" | "md" | "lg" | "xl";
    ref?:       React.Ref<HTMLDivElement>;
}


/**
 * __Box Component__
 *
 * The Box component can be used to wrap and style content in various ways.
 * It supports different layout options such as flexbox properties, padding, and variants for styling.
 *
 * @param children
 * @param props
 * @constructor
 *
 * @author Michele Savoca
 */
const Box = ({children, ...props}: BoxProps) => {
    return (
        <div
            ref={props.ref}
            onClick={props.onClick}
            style={props.style}
            className={clsx(
                styles.Box,
                props.variant && styles[`--variant-${props.variant}`],
                props.justifyContent && styles[`--justify-${props.justifyContent}`],
                props.alignItems && styles[`--align-${props.alignItems}`],
                props.flexDirection && styles[`--direction-${props.flexDirection}`],
                props.gap && styles[`--gap-${props.gap}`],
                props.wrap && styles["--wrap"],
                props.width && styles[`--width-${props.width}`],
                props.height && styles[`--height-${props.height}`],
                props.inset && styles[`--inset-${props.inset}`],
                props.className
            )}
        >
            {children}
        </div>
    );
}

export default Box;