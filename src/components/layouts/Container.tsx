import clsx from "clsx";

type ContainerSize =
    | "default"
    | "wide"
    | "narrow";

interface ContainerProps {
    children: React.ReactNode;
    size?: ContainerSize;
    className?: string;
}

const sizes = {
    default: "max-w-[1320px]",
    wide: "max-w-[1440px]",
    narrow: "max-w-[840px]",
};

export default function Container({
    children,
    size = "default",
    className,
}: ContainerProps) {
    return (
        <div
            className={clsx(
                "mx-auto w-full px-5 md:px-11 xl:px-15",
                sizes[size],
                className
            )}
        >
            {children}
        </div>
    );
}