import Typography from "@/components/typography/typography";
import { promises as fs } from "fs";

import { Funnel } from "lucide-react";

export default async function Page() {
    const file = await fs.readFile(
        process.cwd() + "/public/data/student-orgs.json",
        "utf8"
    );

    const data = JSON.parse(file);

    console.log(data);

    return (
        <main className="flex flex-col gap-8 h-full">
            <div className="flex flex-col gap-2 mt-3">
                <Typography
                    variant="h1"
                    className="font-semibold leading-tight text-primary text-4xl min-md:hidden"
                >
                    Discover Organizations
                </Typography>
                <Typography variant="h2" className="min-md:hidden">
                    Discover a vibrant network of student-led organizations that
                    foster leadership, creativity, and collaboration—join a
                    community where your passions thrive, your voice matters,
                    and your potential is amplified.
                </Typography>
                <Typography
                    variant="h2"
                    className="font-semibold leading-tight text-primary text-4xl hidden md:flex"
                >
                    Discover Organizations
                </Typography>
                <Typography variant="h4" className="hidden md:flex">
                    Discover a vibrant network of student-led organizations that
                    foster leadership, creativity, and collaboration—join a
                    community where your passions thrive, your voice matters,
                    and your potential is amplified.
                </Typography>
            </div>

            <section className="flex flex-col">
                <div className="flex justify-between items-center mb-5 md:mb-10">
                    <Typography
                        variant="h1"
                        className="font-semibold leading-tight text-primary min-md:hidden"
                    >
                        Popular Organizations
                    </Typography>
                    <Typography
                        variant="h3"
                        className="font-semibold leading-tight text-primary hidden md:flex"
                    >
                        Popular Organizations
                    </Typography>
                    <div className="max-md:hidden min-md:flex bg-primary px-8 py-1 text-white rounded-xl font-semibold flex justify-center items-center w-35">
                        View All
                    </div>
                </div>

                <div className="max-md:hidden min-md:grid grid-cols-2 gap-10">
                    {data
                        .filter((org: any) => org.status === "popular")
                        .map((org: any) => (
                            <article
                                key={org.orgId}
                                className="flex flex-row gap-4"
                            >
                                <img
                                    src={org.images.profile}
                                    alt={org.orgId}
                                    className="h-20 h-20 rounded-xl"
                                />
                                <div className="flex flex-col gap-1">
                                    <Typography
                                        variant="h4"
                                        className="font-semibold leading-tight text-primary"
                                    >
                                        {org.orgTitle}
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        className="text-muted"
                                    >
                                        {org.totalMembers} Members
                                    </Typography>
                                </div>
                            </article>
                        ))}
                </div>

                <div className="flex flex-col gap-6 mt-6 md:hidden">
                    {data
                        .filter((org: any) => org.status === "popular")
                        .map((org: any) => (
                            <article
                                key={org.orgId}
                                className="flex flex-row gap-4"
                            >
                                <img
                                    src={org.images.profile}
                                    alt={org.orgId}
                                    className="h-20 h-20 rounded-xl"
                                />
                                <div className="flex flex-col gap-1">
                                    <Typography
                                        variant="h2"
                                        className="font-semibold leading-tight text-primary"
                                    >
                                        {org.orgTitle}
                                    </Typography>

                                    <Typography
                                        variant="h3"
                                        className="text-muted"
                                    >
                                        {org.totalMembers} Members
                                    </Typography>
                                </div>
                            </article>
                        ))}
                </div>
            </section>

            <hr className="w-full h-0.5 border-none bg-dark my-8" />

            <section className="flex flex-col">
                <div className="flex justify-between md:items-center mb-5 md:mb-10">
                    <Typography
                        variant="h1"
                        className="font-semibold leading-tight text-primary min-md:hidden"
                    >
                        All Organizations
                    </Typography>
                    <Typography
                        variant="h3"
                        className="font-semibold leading-tight text-primary hidden md:flex"
                    >
                        All Organizations
                    </Typography>

                    <Funnel className="min-md:hidden" />
                    <div className="max-md:hidden min-md:flex bg-primary px-8 py-1 text-white rounded-xl font-semibold flex justify-center items-center w-35">
                        Filter
                    </div>
                </div>

                <div className="max-md:hidden min-md:grid grid-cols-2 gap-10">
                    {data
                        .filter((org: any) => org.status !== "popular")
                        .map((org: any) => (
                            <article
                                key={org.orgId}
                                className="flex flex-row gap-4"
                            >
                                <img
                                    src={org.images.profile}
                                    alt={org.orgId}
                                    className="h-20 h-20 rounded-xl"
                                />
                                <div className="flex flex-col gap-1">
                                    <Typography
                                        variant="h4"
                                        className="font-semibold leading-tight text-primary"
                                    >
                                        {org.orgTitle}
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        className="text-muted"
                                    >
                                        {org.totalMembers} Members
                                    </Typography>
                                </div>
                            </article>
                        ))}
                </div>

                <div className="flex flex-col gap-6 mt-6 md:hidden">
                    {data
                        .filter((org: any) => org.status !== "popular")
                        .map((org: any) => (
                            <article
                                key={org.orgId}
                                className="flex flex-row gap-4"
                            >
                                <img
                                    src={org.images.profile}
                                    alt={org.orgId}
                                    className="h-20 h-20 rounded-xl"
                                />
                                <div className="flex flex-col gap-1">
                                    <Typography
                                        variant="h2"
                                        className="font-semibold leading-tight text-primary"
                                    >
                                        {org.orgTitle}
                                    </Typography>

                                    <Typography
                                        variant="h3"
                                        className="text-muted"
                                    >
                                        {org.totalMembers} Members
                                    </Typography>
                                </div>
                            </article>
                        ))}
                </div>
            </section>

            <div className="w-full flex justify-center items-center gap-3 grow py-5">
                {["1", "2", "3", "...", "15"].map((elem: string) => (
                    <div
                        key={elem}
                        className={`${elem === "1" && "bg-primary text-white"} rounded-xl flex justify-center items-center w-10 h-10 border border-primary`}
                    >
                        <Typography variant="h1" className="min-md:hidden">
                            {elem}
                        </Typography>
                        <Typography variant="h4" className="max-md:hidden">
                            {elem}
                        </Typography>
                    </div>
                ))}
            </div>
        </main>
    );
}
