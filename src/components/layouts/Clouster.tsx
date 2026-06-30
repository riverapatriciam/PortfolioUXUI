import { FlexProps } from "@/src/types/Layouts.ts/Flex";
import { Flex } from "./Flex";

type ClusterProps = Omit<FlexProps, "direction">;

export function Cluster(props: ClusterProps) {
  return (
    <Flex
      direction="row"
      wrap
      align="center"
      {...props}
    />
  );
}