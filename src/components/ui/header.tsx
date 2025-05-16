"use client";

import Typography from "@/components/typography/typography";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Search, Bell } from "lucide-react";

export default function Header() {
    const pathname = usePathname();

    const links = [
        {
            link: "Organizations",
            path: "/",
        },
        {
            link: "Announcements",
            path: "/announcements",
        },
        {
            link: "Events",
            path: "/events",
        },
    ];

    return (
        <nav className="p-2 mb-5 flex w-full justify-between items-center">
            <ul className="flex items-center lg:gap-14 xl:gap-28">
                <li>
                    <img src="images/kabserve_logo1.svg" alt="kabserve-logo" />
                </li>
                <ul className="hidden lg:flex font-semibold lg:gap-9">
                    {links.map((link) => (
                        <li
                            className={`${pathname === link.path ? "text-dark" : "text-muted"}`}
                            key={link.path}
                        >
                            <Link href={link.path}>
                                <Typography variant="h5">
                                    {link.link}
                                </Typography>
                            </Link>
                        </li>
                    ))}
                </ul>
            </ul>
            <ul className="flex items-center gap-4 text-muted">
                <li>
                    <Search />
                </li>
                <li>
                    <Bell />
                </li>
                <li>
                    <div className="w-10 h-10 p-0.5 rounded-full bg-[#27391C]">
                        <img
                            className="rounded-full"
                            src="images/placeholder2.png"
                            alt="placeholder"
                        />
                    </div>
                </li>
            </ul>
        </nav>
    );
}
