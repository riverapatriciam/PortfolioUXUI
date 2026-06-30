export type Gap =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl";

export type Align =
  | "start"
  | "center"
  | "end"
  | "stretch";

export type Justify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around";

export const gaps = {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
    "2xl": "gap-12",
    "3xl": "gap-16",
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
} as const;

export type StackProps = {
    children: React.ReactNode;
    className?: string;
    gap?: keyof typeof gaps;       
    align?: keyof typeof aligns;
    justify?: keyof typeof justifies;
}