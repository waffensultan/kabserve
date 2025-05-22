"use client";

import Typography from "@/components/typography/typography";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    const isAuth =
        pathname.startsWith("/sign-up") || pathname.startsWith("/login");

    const team = [
        "Waffen Ampatua",
        "Ostline Casao",
        "Oswill McCarver",
        "Coleen Legaspi",
    ];

    if (!isAuth) {
        return (
            <nav className="px-5 md:px-10 lg:px-29 xl:px-43">
                <ul>
                    <li>
                        <hr className="w-full h-0.5 border-none bg-dark" />
                    </li>
                    <li className="w-full flex flex-row py-7 px-1 gap-5">
                        <img
                            src="images/kabserve_logo1.svg"
                            alt="kabserve-logo"
                        />
                        <div className="w-full flex justify-end md:justify-between">
                            <div className="flex flex-col gap-1">
                                <Typography
                                    variant="h4"
                                    className="font-semibold leading-tight md:hidden"
                                >
                                    Vibrant communities.{" "}
                                    <span className="bg-gradient-to-r from-[#FF4800] to-[#FFDD00] inline-block text-transparent bg-clip-text">
                                        Fiery{" "}
                                    </span>{" "}
                                    passion.
                                </Typography>
                                <div className="grid grid-cols-2 space-x-5 self-end md:text-start">
                                    {team.map((member) => (
                                        <Typography
                                            key={member}
                                            variant="h6"
                                            className="font-semibold text-muted"
                                        >
                                            {member}
                                        </Typography>
                                    ))}
                                </div>
                            </div>

                            <div className="hidden md:flex">
                                <Typography
                                    variant="h6"
                                    className="font-semibold leading-tight min-lg:hidden"
                                >
                                    Vibrant communities.{" "}
                                    <span className="bg-gradient-to-r from-[#FF4800] to-[#FFDD00] inline-block text-transparent bg-clip-text">
                                        Fiery{" "}
                                    </span>{" "}
                                    passion.
                                </Typography>

                                <Typography
                                    variant="h5"
                                    className="font-semibold leading-tight max-lg:hidden"
                                >
                                    Vibrant communities.{" "}
                                    <span className="bg-gradient-to-r from-[#FF4800] to-[#FFDD00] inline-block text-transparent bg-clip-text">
                                        Fiery{" "}
                                    </span>{" "}
                                    passion.
                                </Typography>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}
