import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";

export default function SearchInput() {
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex items-center gap-2 overflow-hidden max-w-[100%]"
        >
            <div
                onClick={() => setIsFocused(true)}
                className="cursor-pointer text-muted"
            >
                <Search />
            </div>

            <AnimatePresence>
                {isFocused && (
                    <motion.div
                        key="search-input"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "12rem", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="overflow-hidden min-w-0"
                    >
                        <input
                            type="text"
                            autoFocus
                            placeholder="Search..."
                            className="w-full pl-4 pr-3 py-1 rounded-full border border-primary text-sm placeholder:text-muted focus:outline-none bg-white text-black"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

