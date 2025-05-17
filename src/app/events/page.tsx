"use client";
import React, { useState, useEffect } from "react";
import Typography from "@/components/typography/typography";
import { MapPin } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Type definitions
type DateHeaderProps = {
    date: string;
    day: string;
};

type EventLocationProps = {
    location: string;
    isDark?: boolean;
};

type EventOrganizerProps = {
    organizer: string;
    profileImg: string;
    isDark?: boolean;
};

type EventParticipantsProps = {
    mainProfileImg?: string;
};

type FeaturedEventCardProps = {
    time: string;
    title: string;
    location: string;
    organizer: string;
    organizerImg: string;
    eventImg: string;
};

type CarouselEventCardProps = {
    dateInfo: string;
    title: string;
    location: string;
    organizer: string;
    organizerImg: string;
};

type RegisterButtonProps = {
    isDark?: boolean;
};

// Data interfaces
interface EventItem {
    time: string;
    title: string;
    location: string;
    organizer: string;
    organizerImg: string;
    eventImg: string;
}

interface DateGroup {
    date: string;
    day: string;
    events: EventItem[];
}

interface CarouselEventItem {
    dateInfo: string;
    title: string;
    location: string;
    organizer: string;
    organizerImg: string;
}

interface EventsData {
    featuredEvents: DateGroup[];
    carouselEvents: CarouselEventItem[];
}

// Reusable components
const DateHeader: React.FC<DateHeaderProps> = ({ date, day }) => (
    <div className="flex flex-row gap-2 max-sm:my-2 min-md:mt-7 max-sm:items-center min-md:flex-col min-md:gap-0 md:flex-1/3">
        <Typography
            variant="h2"
            className="font-semibold leading-tight text-primary"
        >
            {date}
        </Typography>
        <Typography variant="h4" className="text-muted">
            {day}
        </Typography>
    </div>
);

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
                className={`h-4 w-4 rounded-full border border-[#526147] ${
                    idx !== 0 ? "-ml-2" : ""
                }`}
            />
        ))}
        <div className="-ml-2 h-4 w-8 rounded-full border border-[#526147] bg-light text-xs flex items-center justify-center">
            <Typography variant="p" className="text-[#526147] md:text-xs">
                +45
            </Typography>
        </div>
    </div>
);

const EventLocation: React.FC<EventLocationProps> = ({
    location,
    isDark = false,
}) => (
    <div className="flex flex-row gap-1 items-center">
        <MapPin
            className={`h-4 w-4 ${isDark ? "text-light/80" : "text-primary/80"}`}
        />
        <Typography
            variant="h6"
            className={`${isDark ? "text-light/80" : "text-primary/80"} font-light`}
        >
            {location}
        </Typography>
    </div>
);

const EventOrganizer: React.FC<EventOrganizerProps> = ({
    organizer,
    profileImg,
    isDark = false,
}) => (
    <div className="flex flex-row gap-1 items-center">
        <img
            src={profileImg}
            alt={`${organizer} profile`}
            className="h-4 w-4 rounded-full"
        />
        <Typography
            variant="h6"
            className={`${isDark ? "text-light/80" : "text-primary/80"} font-light leading-none`}
        >
            by {organizer}
        </Typography>
    </div>
);

const RegisterButton: React.FC<RegisterButtonProps> = ({ isDark = false }) => (
    <button
        type="button"
        className="rounded-lg bg-primary text-xs text-light font-medium py-0.5 px-3 md:py-1.5 md:px-6 md:text-sm"
    >
        Register
    </button>
);

// Featured event card (dark background)
const FeaturedEventCard: React.FC<FeaturedEventCardProps> = ({
    time,
    title,
    location,
    organizer,
    organizerImg,
    eventImg,
}) => (
    <div className="rounded-2xl border border-primary border-solid bg-primary/80 p-4 bg-linear-10 hover:from-warning to-70% hover:to-primary">
        <div className="flex flex-row justify-between gap-3">
            <div className="flex flex-col gap-1.5">
                <Typography variant="p" className="text-light/60 font-light">
                    {time}
                </Typography>

                <Typography
                    variant="h4"
                    className="text-light font-semibold leading-tight"
                >
                    {title}
                </Typography>

                <EventLocation location={location} isDark={true} />
                <EventOrganizer
                    organizer={organizer}
                    profileImg={organizerImg}
                    isDark={true}
                />

                <div className="flex flex-row gap-1 items-center mt-1">
                    <RegisterButton />
                    <EventParticipants mainProfileImg={organizerImg} />
                </div>
            </div>
            <img
                src={eventImg}
                alt={title}
                className="rounded-xl h-32 w-32 object-cover"
            />
        </div>
    </div>
);

// Carousel event card (light background)
const CarouselEventCard: React.FC<CarouselEventCardProps> = ({
    dateInfo,
    title,
    location,
    organizer,
    organizerImg,
}) => (
    <div className="rounded-xl border border-primary/20 border-solid bg-primary/20 p-2 flex flex-col">
        <Typography variant="h6" className="text-primary/80 font-light mb-4">
            {dateInfo}
        </Typography>
        <div className="flex items-end h-9">
            <Typography
                variant="h4"
                className="text-primary font-semibold leading-none"
            >
                {title}
            </Typography>
        </div>
        <div className="flex flex-row gap-1 items-center mt-2 h-5 leading-none">
            <EventLocation location={location} />
        </div>
        <div className="flex flex-row gap-1 items-center mt-1 h-5">
            <EventOrganizer organizer={organizer} profileImg={organizerImg} />
        </div>
        <div className="flex flex-row gap-1 items-center mt-3">
            <RegisterButton />
            <EventParticipants mainProfileImg={organizerImg} />
        </div>
    </div>
);

export default function EventsPage(): React.ReactElement {
    const [eventsData, setEventsData] = useState<EventsData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Function to fetch the events data
        const fetchEvents = async () => {
            try {
                const response = await fetch("data/events.json");

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data: EventsData = await response.json();
                setEventsData(data);
                setIsLoading(false);
            } catch (err) {
                console.error("Failed to fetch events data:", err);
                setError("Failed to load events. Please try again later.");
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    // Loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Typography variant="h3" className="text-primary">
                    Loading events...
                </Typography>
            </div>
        );
    }

    // Error state
    if (error || !eventsData) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Typography variant="h3" className="text-red-500">
                    {error || "Something went wrong. Please try again."}
                </Typography>
            </div>
        );
    }

    // Render the events page with the data
    return (
        <main className="flex flex-col gap-8 h-full">
            <div className="flex flex-col gap-2 mt-3">
                <Typography
                    variant="h1"
                    className="font-semibold leading-tight text-primary text-4xl min-md:hidden"
                >
                    Events
                </Typography>
                <Typography
                    variant="h1"
                    className="font-semibold leading-tight text-primary text-4xl hidden md:flex"
                >
                    Events
                </Typography>

                <hr className="h-0.5 bg-primary border-0" />

                <section>
                    {eventsData.featuredEvents.map((dateGroup, idx) => (
                        <div key={dateGroup.date}>
                            {idx > 0 && (
                                <hr className="h-[1px] bg-muted/20 border-0" />
                            )}
                            <div className="md:flex md:flex-row md:flex-1/2 md:justify-between md:mt-4">
                                <DateHeader
                                    date={dateGroup.date}
                                    day={dateGroup.day}
                                />

                                <div className="flex flex-col gap-2 mb-4 md:flex-3/4">
                                    {dateGroup.events.map((event, eventIdx) => (
                                        <FeaturedEventCard
                                            key={eventIdx}
                                            time={event.time}
                                            title={event.title}
                                            location={event.location}
                                            organizer={event.organizer}
                                            organizerImg={event.organizerImg}
                                            eventImg={event.eventImg}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <hr className="h-0.5 bg-primary border-0" />

                <section className="mb-4 md:flex md:flex-col">
                    <Typography
                        variant="h2"
                        className="text-primary font-semibold mb-2"
                    >
                        More Events
                    </Typography>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="md:w-10/12 md:self-center"
                    >
                        <CarouselPrevious className="max-sm:hidden" />
                        <CarouselContent>
                            {eventsData.carouselEvents.map((event, idx) => (
                                <CarouselItem key={idx} className="basis-2/3">
                                    <CarouselEventCard
                                        dateInfo={event.dateInfo}
                                        title={event.title}
                                        location={event.location}
                                        organizer={event.organizer}
                                        organizerImg={event.organizerImg}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className="max-sm:hidden" />
                    </Carousel>
                </section>
            </div>
        </main>
    );
}
