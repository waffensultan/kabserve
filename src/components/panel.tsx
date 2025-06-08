"use client";

import { useState } from "react";
import Typography from "./typography/typography";
import { FeaturedEventCard } from "@/app/student/events/page";

import { motion, AnimatePresence } from "motion/react";

type TPage = "Events" | "Announcements";
export default function Panel() {
    const [page, setPage] = useState<TPage>("Events");

    return (
        <>
            <section className="flex flex-col blue-500 mb-10">
                <div className="flex flex-row items-center gap-2">
                    {["Events", "Announcements"].map((p, index) => (
                        <button
                            onClick={() => setPage(p as TPage)}
                            key={index}
                            className={`cursor-pointer transition duration-300 flex-row items-center gap-1 md:gap-2 ${page === p ? "bg-primary text-white" : "text-primary bg-white border-[#9F9F9F]"} border px-3 py-2  rounded-full font-semibold flex justify-center`}
                        >
                            <Typography variant="p" className="font-semibold">
                                {p}
                            </Typography>
                            <div
                                className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${page === p ? "bg-[#DF5B13]" : "bg-[#e4e4e4]"}  flex justify-center items-center`}
                            >
                                <Typography variant="p">4</Typography>
                            </div>
                        </button>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    {page === "Events" ? (
                        <motion.div
                            className="flex flex-col gap-3 pt-3"
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={{
                                hidden: {},
                                show: {
                                    transition: { staggerChildren: 0.15 },
                                },
                            }}
                        >
                            {Array.from({ length: 5 }).map((_, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.4 },
                                        },
                                    }}
                                >
                                    <FeaturedEventCard
                                        time="1:00 PM"
                                        title="𝗖𝗦𝗦𝗢 𝗕𝗹𝗼𝗰𝗸𝗰𝗵𝗮𝗶𝗻 𝗗𝗲𝗰𝗼𝗱𝗲𝗿𝘀: 𝗪𝗲𝗯𝟯 𝗙𝗼𝘂𝗻𝗱𝗮𝘁𝗶𝗼𝗻𝘀 & 𝗦𝗺𝗮𝗿𝘁 𝗖𝗼𝗻𝘁𝗿𝗮𝗰𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻t"
                                        location="CEIT Conference Room"
                                        organizer="Computer Science Student Organization"
                                        organizerImg="/images/csso_profile.jpg"
                                        eventImg="/images/csso_event1.jpg"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.main
                            key="announcements"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Announcement Card 1 */}
                            <div className="mt-8 flex gap-4 items-start bg-[#FFFDF6] rounded-lg p-4 max-w-3xl">
                                <img
                                    src="/images/csso_profile.jpg"
                                    alt="CSSO Logo"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-[#1A1A1A]">
                                        Computer Science Student Organization
                                    </p>
                                    <p className="text-sm text-gray-600 mb-2">
                                        2m •
                                    </p>
                                    <p className="font-bold text-green-900 mb-1">
                                        Registration is now CLOSED!
                                    </p>
                                    <p className="text-[#1A1A1A]">
                                        Thank you to everyone who signed up for{" "}
                                        <span className="font-semibold">
                                            CSSO Blockchain Decoders
                                        </span>
                                    </p>
                                    <p className="mt-1 text-[#1A1A1A]">
                                        We’re excited to build blocks and break
                                        limits with you this May 13! <br />
                                        <span className="block mt-2">
                                            Stay tuned for updates!
                                        </span>
                                    </p>
                                    <div className="mt-3 text-green-800 text-sm font-medium space-y-0.5">
                                        <p>#CSSO</p>
                                        <p>#KomsayA</p>
                                        <p>#WeCodeAsOne</p>
                                        <p>#CSSOBlockchainDecoders</p>
                                    </div>
                                </div>
                            </div>

                            {/* Announcement Card 2 */}
                            <div className="mt-8 flex gap-4 items-start bg-[#FFFDF6] rounded-lg p-4 max-w-3xl">
                                <img
                                    src="/images/csso_profile.jpg"
                                    alt="CSSO Logo"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-[#1A1A1A]">
                                        Computer Science Student Organization
                                    </p>
                                    <p className="text-sm text-gray-600 mb-2">
                                        2m •
                                    </p>
                                    <p className="font-bold text-green-900 mb-1">
                                        Registration for CSSO Blockchain
                                        Decoders will be open until 11:59 PM
                                        Today Only
                                    </p>
                                    <p className="text-[#1A1A1A]">
                                        Don’t miss your chance to secure a slot
                                        and dive into the world of Web3 and
                                        smart contracts!
                                    </p>
                                    <p className="mt-1 text-[#1A1A1A]">
                                        <b>Form Link:</b> <br />
                                        https://forms.gle/wA4VNktZbRq9grBT8{" "}
                                        <br />
                                        https://forms.gle/wA4VNktZbRq9grBT8{" "}
                                        <br />
                                        https://forms.gle/wA4VNktZbRq9grBT8
                                    </p>
                                    <div className="mt-3 text-green-800 text-sm font-medium space-y-0.5">
                                        <p>#CSSO</p>
                                        <p>#KomsayA</p>
                                        <p>#WeCodeAsOne</p>
                                        <p>#CSSOBlockchainDecoders</p>
                                    </div>
                                    <div>
                                        <img
                                            src="/images/csso_announcement.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.main>
                    )}
                </AnimatePresence>
            </section>
        </>
    );
}
