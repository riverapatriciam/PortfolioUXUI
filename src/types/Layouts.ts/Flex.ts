import { ReactNode } from "react";

export const directions = {
    row: "flex-row",
    column: "flex-col",
} as const;

export const aligns = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
} as const;

export const justifies = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

export const gaps = {
    none: "gap-0",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
    "2xl": "gap-12",
    "3xl": "gap-16",
} as const;

export interface FlexProps {
    children: ReactNode;
    direction?: "row" | "column";
    align?: "start" | "center" | "end" | "stretch";
    justify?:
      | "start"
      | "center"
      | "end"
      | "between"
      | "around"
      | "evenly";
    gap?:
      | "none"
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl";
    wrap?: boolean;
    className?: string;
    as?: React.ElementType;
}