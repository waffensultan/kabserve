import Typography from "@/components/typography/typography";
import { MapPin } from "lucide-react";

type EventParticipantsProps = {
    mainProfileImg?: string;
};

const EventParticipants: React.FC<EventParticipantsProps> = ({
    mainProfileImg = "/images/csso_profile.jpg",
}) => (
    <div className="flex flex-row items-center">
        {[
            mainProfileImg,
            "/images/placeholder3.png",
            "/images/placeholder3.png",
            "/images/placeholder3.png",
            "/images/placeholder3.png",
        ].map((src, idx) => (
            <img
                key={idx}
                src={src}
                alt={`Participant ${idx + 1}`}
                className={`h-10 w-10 rounded-full border border-light ${
                    idx !== 0 ? "-ml-5" : ""
                }`}
            />
        ))}
        <div className="-ml-5 h-10 w-15 rounded-full border border-light bg-[#DCDDD3] text-xs flex items-center justify-center">
            <Typography
                variant="p"
                className="text-[#526147] text-base md:text-xs"
            >
                +45
            </Typography>
        </div>
    </div>
);

export default function EventInfoPage() {
    return (
        <main className="flex flex-col gap-5 h-full">
            <div className="bg-primary/80 rounded-2xl p-4 flex flex-col gap-1 md:hidden">
                <Typography variant="p" className="text-light/60 font-light">
                    May 28 | Wednesday | 1:00 PM
                </Typography>
                <img src="/images/csso_event1.jpg" className="rounded-lg" />
                <Typography
                    variant="h2"
                    className="text-light font-semibold leading-tight mt-4"
                >
                    CSSO Blockchain Decoders: Web3 Foundations & Smart Contract
                    Development
                </Typography>
                <div className="flex flex-row gap-1 items-center">
                    <MapPin className="h-4 w-4 text-light/80 font-light" />
                    <Typography
                        variant="h6"
                        className="text-light/80 font-light"
                    >
                        CEIT Conference Room, Cavite State University
                    </Typography>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <img
                        src="/images/csso_profile.jpg"
                        className="h-4 w-4 rounded-full"
                    />
                    <Typography
                        variant="h6"
                        className="text-light/80 font-light leading-none"
                    >
                        by Computer Science Student Organization
                    </Typography>
                </div>
                <button
                    type="button"
                    className="mt-2 w-1/2 rounded-lg bg-primary text-xs text-light font-medium py-1.5 px-3 md:py-1.5 md:px-6 md:text-sm"
                >
                    Register
                </button>
            </div>

            <div className="bg-primary/80 rounded-2xl p-10 md:flex flex-row gap-10 hidden justify-between">
                <div className="w-3/5 flex flex-col justify-between">
                    <Typography
                        variant="p"
                        className="text-light/60 font-light"
                    >
                        May 28 | Wednesday | 1:00 PM
                    </Typography>
                    <div>
                        <Typography
                            variant="h1"
                            className="text-light font-semibold leading-tight my-4"
                        >
                            CSSO Blockchain Decoders: Web3 Foundations & Smart
                            Contract Development
                        </Typography>
                        <div className="flex flex-row gap-1 items-center mb-2">
                            <MapPin className="h-6 w-6 text-light/80 font-light" />
                            <Typography
                                variant="p"
                                className="text-light/80 font-light"
                            >
                                CEIT Conference Room, Cavite State University
                            </Typography>
                        </div>
                        <div className="flex flex-row gap-1 items-center mb-2">
                            <img
                                src="/images/csso_profile.jpg"
                                className="h-6 w-6 rounded-full"
                            />
                            <Typography
                                variant="p"
                                className="text-light/80 font-light leading-none"
                            >
                                by Computer Science Student Organization
                            </Typography>
                        </div>
                        <button
                            type="button"
                            className="mt-2 w-1/2 rounded-lg bg-primary text-xs text-light font-medium py-1.5 px-3 md:py-3 md:w-1/3 md:text-base"
                        >
                            Register
                        </button>
                    </div>
                </div>
                <div className="w-2/5">
                    <img src="/images/csso_event1.jpg" className="rounded-lg" />
                </div>
            </div>

            <hr className="h-0.5 bg-primary border-0" />

            <div>
                <Typography
                    variant="h2"
                    className="font-semibold leading-tight text-primary mb-1"
                >
                    Details
                </Typography>
                <Typography
                    variant="p"
                    className="leading-tight text-primary whitespace-pre-line"
                >
                    Stack the Blocks, Build the Future!
                    <br />
                    <br />
                    Blockchain isn't just hype-it's your next skill upgrade!
                    Dive into the world of Web3 and smart contracts in this
                    hands-on, two-track workshop brought to you Komsay students!
                    <br />
                    <br />
                    Track 1: General Blockchain Workshop
                    <br />
                    Track 2: Coding Smart Contracts (at least one laptop per
                    solo or duo group!)
                    <br />
                    <br />
                    Solo or duo? You choose! Just make sure one of you fills out
                    the form if you're registering as a pair. All participants
                    are expected to attend both tracks.
                    <br />
                    <br />
                    Form Link: https://forms.gle/wA4VNktZbRg9grBT8 <br />
                    <br />
                    #CSSO #KomsayA #WeCodeAsOne #CSSOBlockchainDecoders
                </Typography>
            </div>

            <hr className="h-0.5 bg-primary border-0" />

            <div>
                <Typography
                    variant="h2"
                    className="font-semibold leading-tight text-primary mb-1"
                >
                    Location
                </Typography>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.48993332135296!2d120.88042901722203!3d14.199493672224328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd83e5d4c6c68f%3A0x5e87163ef99e370d!2sDepartment%20of%20Civil%20Engineering!5e0!3m2!1sen!2sph!4v1748336713021!5m2!1sen!2sph"
                    className="border-0 md:h-64 w-full rounded-lg mt-2 mb-3"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <Typography
                    variant="h4"
                    className="font-semibold leading-tight text-primary"
                >
                    CEIT Conference Room
                </Typography>
                <Typography
                    variant="h5"
                    className="font-light leading-tight text-primary"
                >
                    Cavite State University - Indang Campus, Indang, 4122 Cavite
                </Typography>
            </div>

            <hr className="h-0.5 bg-primary border-0" />

            <div className="flex flex-col gap-4">
                <div>
                    <Typography
                        variant="h2"
                        className="font-semibold leading-tight text-primary mb-1 md:mb-2.5"
                    >
                        Host
                    </Typography>
                    <div className="flex flex-row items-center gap-2">
                        <img
                            src="/images/csso_profile.jpg"
                            className="h-10 w-10"
                        />
                        <Typography variant="h5" className=" text-primary">
                            Computer Science Student Organization
                        </Typography>
                    </div>
                </div>
                <hr className="h-[1px] bg-muted/20 border-0" />
                <div className="mb-5">
                    <Typography
                        variant="h2"
                        className="font-semibold leading-tight text-primary mb-1 md:mb-2.5"
                    >
                        Going
                    </Typography>
                    <div className="flex flex-col gap-2">
                        <EventParticipants />
                        <Typography variant="h5" className=" text-primary">
                            Waffen Ampatua, Ostline Casao, and 48 others
                        </Typography>
                    </div>
                </div>
            </div>
        </main>
    );
}
