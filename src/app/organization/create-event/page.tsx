import {
    MapPin as PinIcon,
    Plus as PlusIcon,
    Images as ImagesIcon,
} from "lucide-react";

import Typography from "@/components/typography/typography";

export default function CreateAnEvent() {
    return (
        <main className="flex flex-col md:pb-10">
            <div className="flex flex-col gap-1">
                <Typography className="font-semibold">
                    Create an Event
                </Typography>
                <hr className="w-full h-0.5 border-none bg-primary" />
            </div>

            <div className="lg:hidden h-70 rounded-2xl flex flex-col gap-5 justify-center items-center bg-neutral-300 text-neutral-500 w-full my-5">
                <ImagesIcon size={80} />
                <Typography variant="h4">
                    Add and upload your images here...
                </Typography>
            </div>
            <section className="flex gap-5 lg:pt-10">
                <section className="flex flex-col lg:w-1/2">
                    <Typography
                        variant="h3"
                        className="text-primary font-semibold lg:hidden"
                    >
                        EVENT NAME
                    </Typography>
                    <Typography
                        variant="h4"
                        className="text-primary font-semibold hidden lg:flex"
                    >
                        EVENT NAME
                    </Typography>
                    <Typography variant="h3" className="text-primary lg:hidden">
                        May 28 | Wednesday | 1:00 PM
                    </Typography>
                    <Typography
                        variant="h5"
                        className="text-primary hidden lg:flex"
                    >
                        May 28 | Wednesday | 1:00 PM
                    </Typography>
                    <div className="flex items-center gap-1 mt-3">
                        <PinIcon />
                        <input
                            type="text"
                            autoFocus
                            placeholder="Add event location..."
                            className="focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-1">
                        <PlusIcon />
                        <input
                            type="text"
                            autoFocus
                            placeholder="Add event description..."
                            className="focus:outline-none"
                        />
                    </div>
                    <button className="mt-4 font-semibold bg-primary text-white rounded-xl px-13 py-1 self-start">
                        Save
                    </button>
                </section>

                <div className="hidden lg:flex h-70 rounded-2xl flex-col gap-5 justify-center items-center bg-neutral-300 text-neutral-500 w-full">
                    <ImagesIcon size={80} />
                    <Typography variant="h4">
                        Add and upload your images here...
                    </Typography>
                </div>
            </section>
        </main>
    );
}
