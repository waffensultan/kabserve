import Typography from "@/components/typography/typography";
import AvatarCard from "@/components/ui/avatar-card";
import { FeaturedEventCard } from "@/app/events/page";
import { Facebook, Instagram, Mail } from "lucide-react";

import { promises as fs } from "fs";

export async function generateStaticParams() {
    const file = await fs.readFile(
        process.cwd() + "/public/data/student-orgs.json",
        "utf8"
    );
    const data = JSON.parse(file);

    return data.map((organization: any) => ({
        slug: organization.id,
    }));
}

export default async function Page({ params }: { params: { org: string } }) {
    const orgFile = await fs.readFile(
        process.cwd() + "/public/data/student-orgs.json",
        "utf8"
    );

    const orgData = JSON.parse(orgFile);

    const organizationData = orgData.find(
        (organization: any) => organization.orgId === params.org
    );

    return (
        <main className="flex flex-col">
            <section className="w-full relative flex flex-col mb-30 md:mb-45">
                <div className="relative rounded-2xl">
                    <img
                        src={
                            organizationData.images.background
                                ? organizationData.images.background
                                : "/images/cvsu_background.jpg"
                        }
                        alt="cvsu-background"
                        className="w-full h-40 lg:h-70 object-cover rounded-2xl z-0"
                    />
                    <div className="hidden lg:flex bg-white/10 backdrop-blur-[2px] gap-4 rounded-2xl absolute right-3 bottom-2 text-white border border-white flex-row items-center py-2 px-4">
                        <div className="flex flex-col items-center">
                            <Typography variant="h4" className="font-bold">
                                380
                            </Typography>
                            <Typography variant="h6">Members</Typography>
                        </div>
                        <div className="w-0.5 flex bg-white h-10">&nbsp;</div>
                        <div className="flex flex-col items-center">
                            <Typography variant="h4" className="font-bold">
                                2
                            </Typography>
                            <Typography variant="h6">Organizations</Typography>
                        </div>
                        <div className="w-0.5 flex bg-white h-10">&nbsp;</div>
                        <div className="flex flex-col items-center">
                            <Typography variant="h4" className="font-bold">
                                5
                            </Typography>
                            <Typography variant="h6">Posts</Typography>
                        </div>
                    </div>
                </div>
                <div className="z-50 absolute -bottom-25 md:-bottom-40 self-center flex flex-col w-full">
                    <div className="flex flex-row justify-center relative">
                        <div className="w-30 h-30 p-2 rounded-full bg-light">
                            <img
                                className="rounded-full"
                                src={organizationData.images.profile}
                                alt="placeholder"
                            />
                        </div>

                        <div className="hidden md:flex absolute right-3 -bottom-1 flex-row items-center gap-3">
                            {[<Facebook />, <Instagram />, <Mail />].map(
                                (icon: any, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer hover:bg-blue-400 duration-150 p-1 rounded-full bg-[#D9D9D9] flex justify-center items-center"
                                    >
                                        <div className="w-15 h-15 rounded-full p-2 bg-white flex justify-center items-center">
                                            {icon}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center mt-4">
                        <Typography variant="h2" className="font-semibold">
                            {organizationData.orgTitle}
                        </Typography>
                        <Typography variant="h6" className="text-muted">
                            {organizationData.orgType} Organization
                        </Typography>
                    </div>
                </div>
            </section>
            <hr className="w-full h-0.5 border-none bg-dark mb-3" />
            <section className="mb-3">
                <Typography variant="h3" className="font-semibold">
                    Get to Know Us
                </Typography>
                <Typography variant="p" className="px-5">
                    Computer Science Student Organization (CSSO) is a legally
                    recognized organization that serves Computer Science
                    students, to the extent possible by law, emphasizes
                    participation of students from groups with low rates of
                    eligibility to four-year institutions. CSSO offers a
                    pipeline of extra-curricular services from first year to
                    fourth year students to increase the number of students who
                    graduated with Bachelor of Science in Computer Science. The
                    CSSO was established to assist, advise and develop BSCS
                    students to achieve optimum academic and technical
                    performance in their chosen field of specialty.
                </Typography>
            </section>
            <hr className="w-full h-0.5 border-none bg-dark mb-3" />
            <section className="mb-3">
                <Typography variant="h3" className="font-semibold">
                    Administration
                </Typography>
                <div className="flex flex-row gap-5 px-2">
                    <AvatarCard
                        title="President"
                        secondaryTitle="Aldrei Santua"
                        imageUrl="placeholder2.png"
                    />
                </div>
            </section>
            {organizationData.description.membershipEligibility !== "" && (
                <div className="flex flex-col mb-3">
                    <hr className="w-full h-0.5 border-none bg-dark mb-3" />
                    <section className="mb-3">
                        <Typography variant="h3" className="font-semibold">
                            Who Can Join
                        </Typography>
                        <Typography
                            variant="p"
                            className="whitespace-pre-wrap px-5"
                        >
                            {organizationData.description.membershipEligibility}
                        </Typography>
                    </section>
                    <button className="self-center bg-primary rounded-xl text-white font-semibold py-2 px-8 text-sm">
                        Register Now
                    </button>
                </div>
            )}
            <hr className="w-full h-0.5 border-none bg-dark mb-3" />
            <section className="flex flex-col blue-500 mb-10">
                <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row items-center gap-1 md:gap-2 bg-primary px-3 py-2 text-white rounded-xl font-semibold flex justify-center items-center">
                        <Typography variant="p" className="font-semibold">
                            Events
                        </Typography>
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#DF5B13] flex justify-center items-center">
                            <Typography variant="p">4</Typography>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-1 md:gap-2 bg-primary px-3 py-2 text-white rounded-xl font-semibold flex justify-center items-center">
                        <Typography variant="p" className="font-semibold">
                            Announcements
                        </Typography>
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#DF5B13] flex justify-center items-center">
                            <Typography variant="p">2</Typography>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-3">
                    {Array.from({ length: 5 }).map((item, index) => (
                        <FeaturedEventCard
                            key={index}
                            time="1:00 PM"
                            title="𝗖𝗦𝗦𝗢 𝗕𝗹𝗼𝗰𝗸𝗰𝗵𝗮𝗶𝗻 𝗗𝗲𝗰𝗼𝗱𝗲𝗿𝘀: 𝗪𝗲𝗯𝟯 𝗙𝗼𝘂𝗻𝗱𝗮𝘁𝗶𝗼𝗻𝘀 & 𝗦𝗺𝗮𝗿𝘁 𝗖𝗼𝗻𝘁𝗿𝗮𝗰𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻t"
                            location="CEIT Conference Room"
                            organizer="Computer Science Student Organization"
                            organizerImg="/images/csso_profile.jpg"
                            eventImg="/images/csso_event1.jpg"
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
