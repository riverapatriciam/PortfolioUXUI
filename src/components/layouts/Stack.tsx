import { FlexProps } from "@/src/types/Layouts.ts/Flex";
import { Flex } from "./Flex";

export function Stack(props: Omit<FlexProps, "direction">) {
    return <Flex direction="column" {...props} />;
}