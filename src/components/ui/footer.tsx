import Typography from "@/components/typography/typography";

export default function Footer() {
    const team = [
        "Waffen Ampatua",
        "Ostline Casao",
        "Oswill McCarver",
        "Coleen Legaspi",
    ];

    return (
        <nav className="px-5 md:px-10 lg:px-29 xl:px-43">
            <ul>
                <li>
                    <hr className="w-full h-0.5 border-none bg-dark" />
                </li>
                <li className="w-full flex flex-row py-7 px-1 gap-5">
                    <img src="images/kabserve_logo1.svg" alt="kabserve-logo" />
                    <div>
                        <div className="flex flex-col gap-1">
                            <Typography
                                variant="h6"
                                className="font-semibold leading-tight md:hidden"
                            >
                                Register your organization with Kabserve
                            </Typography>
                            <div className="grid grid-cols-2 gap-x-2 md:gap-x-14">
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
                    </div>
                    <div className="hidden md:flex flex-col items-end grow">
                        <div className="font-semibold leading-tight">
                            <Typography variant="h6">
                                Register your organization with
                            </Typography>
                            <Typography variant="h6">Kabserve</Typography>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
