import { twMerge } from "tailwind-merge";

type TVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
    variant?: TVariant;
}

const sizes: Record<TVariant, string> = {
    h1: "text-[1.563rem] md:text-[3rem]",
    h2: "text-[1.063rem] md:text-[2.625rem]",
    h3: "text-[0.875rem] md:text-[1.75rem]",
    h4: "text-[0.75rem] md:text-[1.5rem]",
    h5: "text-[0.688rem] md:text-[1.25rem]",
    h6: "text-[0.625rem] md:text-[0.875rem]",
    p: "text-[0.688rem] md:text-[1.125rem] font-anek",
};

// const sizes: Record<TVariant, string> = {
//     h1: "text-[25px] md:text-[48px]",
//     h2: "text-[17px] md:text-[32px]",
//     h3: "text-[14px] md:text-[28px]",
//     h4: "text-[24px] md:text-[24px]",
//     h5: "text-[20px] md:text-[20px]",
//     h6: "text-[14px] md:text-[14px]",
//     p: "text-[11px] md:text-[18px] font-anek",
// };

const Typography = ({
    children,
    className,
    variant = "h1",
}: TypographyProps) => {
    const Element = variant;

    return (
        <Element className={twMerge(sizes[variant], className)}>
            {children}
        </Element>
    );
};

export default Typography;
