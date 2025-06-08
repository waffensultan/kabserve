"use client";

import { useState, useEffect } from "react";

import {
    GraduationCap as GraduationCapIcon,
    Users as UsersIcon,
    ScanEye as ScanEyeIcon,
} from "lucide-react";

import Link from "next/link";

import Typography from "@/components/typography/typography";
import Background from "@/components/background";

export type UserRole = "student" | "organization" | "guest";
export default function ContinueAs() {
    const [selected, setSelected] = useState<UserRole | undefined>(undefined);

    useEffect(() => {
        if (selected) {
            if (typeof window !== "undefined" && window.localStorage) {
                localStorage.setItem("role", selected);
            }
        }
    }, [selected]);

    return (
        <div className="px-5 md:px-10 lg:px-29 xl:px-43 flex-grow">
            <Background />
            <main className="flex flex-col gap-10 justify-center items-center py-15">
                <section className="flex flex-col w-full">
                    <Typography className="text-white font-semibold">
                        {" "}
                        Continue as...
                    </Typography>
                    <Typography variant="h3" className="text-white">
                        Identify as a Student, Organization, or Guest
                    </Typography>
                </section>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <article
                        onClick={() => setSelected("student")}
                        className={`${selected === "student" && "-translate-y-5"} transition duration-300 relative bg-white rounded-t-2xl flex flex-col justify-center items-center p-10 text-center w-75 cursor-pointer`}
                    >
                        <GraduationCapIcon size={120} />
                        <Typography className="text-[#255F38] font-semibold md:hidden">
                            Student
                        </Typography>
                        <Typography variant="h3" className="md:hidden">
                            Explore campus orgs, join events, and grow your CvSU
                            journey.
                        </Typography>
                        <Typography
                            variant="h2"
                            className="text-[#255F38] font-semibold hidden md:flex"
                        >
                            Student
                        </Typography>
                        <Typography variant="p" className="hidden md:flex">
                            Explore campus orgs, join events, and grow your CvSU
                            journey.
                        </Typography>
                        <div
                            className={`absolute bottom-0 left-0 h-3 w-full bg-green-600 transition-all duration-300 ${
                                selected === "student"
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    </article>

                    <article
                        onClick={() => setSelected("organization")}
                        className={`${selected === "organization" && "-translate-y-5"} transition duration-300 relative bg-white rounded-t-2xl flex flex-col justify-center items-center p-10 text-center w-75 cursor-pointer`}
                    >
                        <UsersIcon size={120} />
                        <Typography className="text-[#255F38] font-semibold md:hidden">
                            Organization
                        </Typography>
                        <Typography variant="h3" className="md:hidden">
                            Explore campus orgs, join events, and grow your CvSU
                            journey.
                        </Typography>
                        <Typography
                            variant="h2"
                            className="text-[#255F38] font-semibold hidden md:flex"
                        >
                            Organization
                        </Typography>
                        <Typography variant="p" className="hidden md:flex">
                            Manage your org, post events, and engage with
                            Kabsuhenyos.
                        </Typography>
                        <div
                            className={`absolute bottom-0 left-0 h-3 w-full bg-green-600 transition-all duration-300 ${
                                selected === "organization"
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    </article>

                    <article
                        onClick={() => setSelected("guest")}
                        className={`${selected === "guest" && "-translate-y-5"} transition duration-300 relative bg-white rounded-t-2xl flex flex-col justify-center items-center p-10 text-center w-75 cursor-pointer`}
                    >
                        <ScanEyeIcon size={120} />
                        <Typography className="text-[#255F38] font-semibold md:hidden">
                            Guest
                        </Typography>
                        <Typography variant="h3" className="md:hidden">
                            Browse as a visitor and discover what Kabserve has
                            to offer.
                        </Typography>
                        <Typography
                            variant="h2"
                            className="text-[#255F38] font-semibold hidden md:flex"
                        >
                            Guest
                        </Typography>
                        <Typography variant="p" className="hidden md:flex">
                            Browse as a visitor and discover what Kabserve has
                            to offer.
                        </Typography>

                        <div
                            className={`absolute bottom-0 left-0 h-3 w-full bg-green-600 transition-all duration-300 ${
                                selected === "guest"
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    </article>
                </div>

                <Link href={selected !== "guest" ? '/login' :  '/guest'}>
                    <button className="cursor-pointer text-xl w-full bg-yellow-400 text-green-900 font-bold py-2 px-10 rounded hover:bg-yellow-500 transition active:scale-97">
                        Next
                    </button>
                </Link>
            </main>
        </div>
    );
}
