import React from "react";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    justifyContent?:    "center" | "flex-start" | "flex-end" | "space-between" | "space-around"
    alignItems?:        "center" | "flex-start" | "flex-end" | "stretch"
    flexDirection?:     "row" | "column"
    gap?:               "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
    width?:             "full" | "grow" | "auto"
    height?:            "full" | "auto" | "grow"
    wrap?:              boolean
}