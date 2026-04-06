import styles from "./Popover.module.scss";
import { Popover as RadixPopover } from "radix-ui";
import type {PopoverContentProps as RadixPopoverContentProps, PopoverTriggerProps as RadixPopoverTriggerProps} from "@radix-ui/react-popover";
import clsx from "clsx";
import React from "react";



interface PopoverProps {
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    modal?: boolean;
}

const Popover = ({children, ...props}: PopoverProps) => {
    return (
        <RadixPopover.Root {...props}>
            {children}
        </RadixPopover.Root>

    );
}

interface PopoverTriggerProps extends RadixPopoverTriggerProps {
    width?: "full" | "grow" | "auto";
}

const PopoverTrigger = ({children, width, className, ...props}: PopoverTriggerProps) => {
    return (
        <RadixPopover.Trigger {...props} className={clsx(
            styles.Trigger,
            width && styles[`--width-${width}`],
            className
        )}>
            {children}
        </RadixPopover.Trigger>
    )
}

interface PopoverContentProps extends RadixPopoverContentProps {
    inset?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
}

const PopoverContent = ({children, ...props}: PopoverContentProps) => {
    return (
        <RadixPopover.Portal>
            <RadixPopover.Content sideOffset={4} {...props} className={clsx(
                styles.Content,
                props.inset && styles[`--inset-${props.inset}`],

                props.className
            )}>
                {children}
            </RadixPopover.Content>
        </RadixPopover.Portal>
    )
}

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;