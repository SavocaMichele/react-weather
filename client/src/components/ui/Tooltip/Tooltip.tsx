import styles from "./Tooltip.module.scss";
import {Tooltip as RadixTooltip} from "radix-ui";
import React from "react";

interface TooltipProps {
    content: React.ReactNode
    children: React.ReactNode
    side?: "top" | "right" | "bottom" | "left"
    offset?: number
    align?: "start" | "center" | "end"
}

const Tooltip = ({children, ...props}: TooltipProps) => {
    return (
        <RadixTooltip.Root>
            <RadixTooltip.Trigger asChild>
                {children}
            </RadixTooltip.Trigger>
            <RadixTooltip.Portal>
                <RadixTooltip.Content
                    side={props.side || "top"}
                    sideOffset={props.offset || 4}
                    align={props.align || "center"}
                    className={styles.Content}
                >
                    {props.content}
                    <RadixTooltip.Arrow className={styles.Arrow} />
                </RadixTooltip.Content>
            </RadixTooltip.Portal>
        </RadixTooltip.Root>

    );
}

export default Tooltip;
