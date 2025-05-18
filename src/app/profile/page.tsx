import Typography from "@/components/typography/typography";
import AvatarCard from "@/components/ui/avatar-card";
import { FeaturedEventCard } from "@/app/events/page";

export default function Page() {
    return (
        <main className="flex flex-col">
            <section className="w-full relative flex flex-col mb-30 md:mb-40">
                <div className="relative rounded-2xl">
                    <img
                        src="/images/cvsu_background.jpg"
                        alt="cvsu-background"
                        className="w-full h-40 lg:h-70 object-cover rounded-2xl z-0"
                    />
                    <div className="hidden lg:flex bg-white/10 backdrop-blur-[2px] gap-4 rounded-2xl absolute right-3 bottom-2 text-white border border-white flex-row items-center py-2 px-4">
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
                            <Typography variant="h6">
                                Attended Events
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="z-50 absolute -bottom-25 md:-bottom-35 self-center flex flex-col w-full">
                    <div className="w-30 h-30 p-2 rounded-full bg-light self-center">
                        <img
                            className="rounded-full"
                            src="images/placeholder2.png"
                            alt="placeholder"
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                        <Typography variant="h2" className="font-semibold">
                            First Name Last Name
                        </Typography>
                        <Typography variant="h6" className="text-muted">
                            College of Engineering and Information Technology
                            (CEIT)
                        </Typography>
                        <Typography variant="h6" className="text-muted">
                            BSCS 1-2
                        </Typography>
                    </div>
                </div>
            </section>
            <hr className="w-full h-0.5 border-none bg-dark mb-3" />
            <section className="mb-3">
                <Typography variant="h3" className="font-semibold">
                    About Me
                </Typography>
                <Typography variant="p" className="px-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur pharetra pharetra neque ut bibendum. Fusce
                    faucibus consectetur justo, eget porttitor nisl blandit vel.
                    Quisque a nibh velit. Praesent ac auctor massa. Nulla tellus
                    turpis, mollis viverra sagittis dapibus, lobortis et odio.
                    Morbi euismod, augue ac ornare malesuada, metus turpis
                    faucibus risus, eget bibendum nulla tortor sit amet velit.
                    Vivamus at iaculis ex, at pharetra ante.
                </Typography>
            </section>
            <hr className="w-full h-0.5 border-none bg-dark mb-3" />
            <section className="mb-3">
                <Typography variant="h3" className="font-semibold">
                    Organizations
                </Typography>
                <div className="flex flex-row gap-5 px-2">
                    <AvatarCard
                        title="Computer Science Student Organization"
                        imageUrl="csso_profile.jpg"
                    />
                    <AvatarCard
                        title="AWS Learning Club - Spade"
                        imageUrl="spade_profile.jpg"
                    />
                </div>
            </section>
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
                            open={false}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
