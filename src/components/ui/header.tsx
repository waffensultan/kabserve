"use client";

import Typography from "@/components/typography/typography";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
                    <Link href={"/"}>
                        <img
                            src="images/kabserve_logo1.svg"
                            alt="kabserve-logo"
                        />
                    </Link>
                </li>
                <ul className="hidden lg:flex font-semibold lg:gap-9">
                    {links.map((link) => (
                        <li
                            className={`${pathname === link.path ? "text-dark" : "text-muted"} duration-100`}
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
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger>
                            <div className="w-10 h-10 p-0.5 rounded-full bg-[#27391C]">
                                <img
                                    className="rounded-full"
                                    src="images/placeholder2.png"
                                    alt="placeholder"
                                />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-primary/90 border-[#FFFDF6] backdrop-blur-md text-white">
                            <DropdownMenuLabel className="flex flex-row items-center gap-2">
                                <div className="w-10 h-10 p-0.5 rounded-full bg-[#27391C]">
                                    <img
                                        className="rounded-full"
                                        src="images/placeholder2.png"
                                        alt="placeholder"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span>First Name Last Name</span>
                                    <span className="font-normal text-xs">
                                        firstnamelastname@cvsu.edu.ph
                                    </span>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild className="font-semibold">
                                <Link href={"/profile"}>View Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="font-semibold">
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
            </ul>
        </nav>
    );
}
