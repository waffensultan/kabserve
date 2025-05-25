"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export default function Transition({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
}
