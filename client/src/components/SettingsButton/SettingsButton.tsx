import styles from "./SettingsButton.module.scss";
import React from "react";
import clsx from "clsx";

interface SettingsButtonProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    variant?: "error" | "primary"
    active?: boolean;
    callback: (value: string) => void;
}

const SettingsButton = (props: SettingsButtonProps) => {
    return (
        <button
            onClick={() => props.callback(props.value)}
            className={clsx(
                styles.SettingsButton,
                props.variant && styles[`--variant-${props.variant}`],
                props.active && styles["--active"]
            )}
        >
            <div className={styles.Icon}>
                {props.icon}
            </div>

            {props.title}
        </button>
    );
}

export default SettingsButton;