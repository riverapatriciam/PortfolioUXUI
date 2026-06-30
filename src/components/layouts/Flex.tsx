import { aligns, directions, FlexProps, gaps, justifies } from "@/src/types/Layouts.ts/Flex";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function Flex({
  children,
  direction = "row",
  align = "start",
  justify = "start",
  gap = "none",
  wrap = false,
  className,
}: FlexProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "flex",
          directions[direction],
          aligns[align],
          justifies[justify],
          gaps[gap],
          wrap && "flex-wrap",
          className
        )
      )}
    >
      {children}
    </div>
  );
}