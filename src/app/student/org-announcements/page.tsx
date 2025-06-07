/* eslint-disable @next/next/no-img-element */
import Typography from "@/components/typography/typography";
import { Send, Paperclip } from "lucide-react";
export default function AnnouncementsPage() {
    return (
        <main>
            <div className="flex flex-col gap-2 mt-3">
                <Typography
                    variant="h1"
                    className="font-semibold leading-tight text-primary min-md:hidden"
                >
                    Announcements
                </Typography>
                <Typography variant="h2" className="min-md:hidden">
                    Stay connected with the latest updates, events, and
                    important notices from the organizations you've joined.
                    Never miss a beat in the communities you’re part of.
                </Typography>
                <Typography
                    variant="h1"
                    className="font-semibold leading-tight text-primary hidden md:flex"
                >
                    Announcements
                </Typography>
                <Typography variant="h4" className="hidden md:flex">
                    Stay connected with the latest updates, events, and
                    important notices from the organizations you've joined.
                    Never miss a beat in the communities you’re part of.
                </Typography>
            </div>

            <hr className="w-full h-0.5 border-none bg-dark mb-3 mt-[50px]" />

            <div className="mt-6 flex items-start gap-3 p-3">
                <img
                    src="/images/csso_profile.jpg"
                    alt="Group Logo"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 relative">
                    <textarea
                        placeholder="Write something to keep your members informed..."
                        className="w-full h-30 resize-none border-2 border-gray-300 rounded-xl px-4 py-2 pr-15 max-sm:pr-20 text-base focus:outline-none focus:border-gray-500 focus:border-2 overflow-y-auto"
                    ></textarea>
                    <div className="flex flex-row-reverse absolute top-2 right-3 text-gray-500 cursor-pointer">
                        <Send className="text-gray h-5 w-5 m-1" />
                        <Paperclip className="text-gray h-5 w-5 m-1" />
                    </div>
                </div>
            </div>

            {/* CSSO Announcement Card */}
            <div className="mt-8 flex gap-4 items-start bg-[#FFFDF6] rounded-lg p-4">
                <img
                    src="/images/csso_profile.jpg"
                    alt="CSSO Logo"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-[#1A1A1A]">
                        Computer Science Student Organization
                    </p>
                    <p className="text-sm text-gray-600 mb-2">2m •</p>
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
                        We’re excited to build blocks and break limits with you
                        this May 13! <br />
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

            <div className="mt-8 flex gap-4 items-start bg-[#FFFDF6] rounded-lg p-4">
                <img
                    src="/images/csso_profile.jpg"
                    alt="CSSO Logo"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-[#1A1A1A]">
                        Computer Science Student Organization
                    </p>
                    <p className="text-sm text-gray-600 mb-2">2m •</p>
                    <p className="font-bold text-green-900 mb-1">
                        Registration for CSSO Blockchain Decoders will be open
                        until 11:59 PM Today Only
                    </p>
                    <p className="text-[#1A1A1A]">
                        Don’t miss your chance to secure a slot and dive into
                        the world of Web3 and smart contracts!
                    </p>
                    <p className="mt-1 text-[#1A1A1A]">
                        <b>Form Link:</b> <br />
                        https://forms.gle/wA4VNktZbRq9grBT8 <br />
                        https://forms.gle/wA4VNktZbRq9grBT8 <br />
                        https://forms.gle/wA4VNktZbRq9grBT8
                    </p>
                    <div className="mt-3 text-green-800 text-sm font-medium space-y-0.5">
                        <p>#CSSO</p>
                        <p>#KomsayA</p>
                        <p>#WeCodeAsOne</p>
                        <p>#CSSOBlockchainDecoders</p>
                    </div>
                    <div className="">
                        <img src="/images/csso_announcement.png" alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
}
