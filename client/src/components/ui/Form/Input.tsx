import styles from "./Form.module.scss";
import React from "react";
import clsx from "clsx";
import Stack from "../Stack/Stack.tsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    value?: string | number;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    startItem?: React.ReactNode;
    endItem?: React.ReactNode;

    label?: string;
    align?: "row" | "column";
    width?: "full";
    error?: boolean;

    ref?: React.Ref<HTMLInputElement>;
}

const Input = (props: InputProps) => {
    const inputId = React.useId();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.readOnly) return;
        props.onChange?.(e);
    }

    return (
        <label
            className={clsx(
                styles.InputField,
                props.align && styles[`--align-${props.align}`],
                props.width && styles[`--width-${props.width}`],
                props.readOnly && styles["--readonly"],
                props.disabled && styles["--disabled"],
                props.hidden && styles["--hidden"],
                props.error && styles["--error"],
            )}
            htmlFor={inputId}
        >

            {props.label && (
                <span className={styles.Label}>
                    {props.label} {props.required && "*"}
                </span>
            )}

            <Stack
                gap={"xs"}
                flexDirection={"column"}
                width={props.type !== "checkbox" ? "grow" : "auto"}
                alignItems={props.align === "row" ? "flex-end" : "stretch"}
            >
                <div className={clsx(
                    styles.Input,
                    props.endItem && styles["--has-end-item"],
                    props.startItem && styles["--has-start-item"],
                    props.className
                )}>

                    {props.startItem && props.startItem}

                    <input
                        ref={props.ref}
                        hidden={props.hidden}
                        id={inputId}
                        type={props.type}
                        name={props.name}
                        {...(props.onChange ? { value: props.value ?? "" } : { defaultValue: props.value ?? "" })}
                        placeholder={props.placeholder}
                        onChange={onChange}
                        onFocus={props.onFocus}
                        required={props.required}
                        readOnly={props.readOnly}
                        disabled={props.disabled}
                    />

                    {props.endItem && props.endItem}
                </div>
            </Stack>
        </label>
    );
}

export default Input;
