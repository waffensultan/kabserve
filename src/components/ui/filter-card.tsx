"use client";

import { Funnel } from "lucide-react";
import Typography from "../typography/typography";

import { useState } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function FilterCard() {
    const [open, setOpen] = useState(false);
    const [selectedCollege, setSelectedCollege] = useState("CEIT");
    const [selectedOrganizationType, setSelectedOrganizationType] =
        useState("Academic");

    return (
        <DropdownMenu open={open}>
            <DropdownMenuTrigger>
                <Funnel
                    onClick={() => setOpen(true)}
                    className="min-md:hidden"
                />
                <div
                    onClick={() => setOpen(true)}
                    className="max-md:hidden min-md:flex bg-primary px-8 py-1 text-white rounded-xl font-semibold flex justify-center items-center w-35 hover:brightness-95 duration-150 cursor-pointer"
                >
                    Filter
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onInteractOutside={(e) => setOpen(false)}
                onPointerDownOutside={(e) => e.preventDefault()}
                className="p-4 bg-primary/90 border-[#FFFDF6] backdrop-blur-md text-white"
            >
                <DropdownMenuLabel>
                    <Typography variant="h3">Explore By</Typography>
                    <Typography variant="p" className="font-normal max-w-xs">
                        Browse student organizations by interest, type, or
                        college to find your perfect fit at CvSU.
                    </Typography>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex flex-col items-start w-80 md:w-100 font-semibold">
                    <Typography variant="h3" className="font-semibold">
                        College
                    </Typography>
                    <div className="w-full flex">
                        <div className="grid grid-cols-3 gap-3 px-3">
                            {[
                                "CEIT",
                                "CAFENR",
                                "CAS",
                                "COJ",
                                "CED",
                                "CEMDS",
                                "CON",
                                "CSPEAR",
                                "CVMBS",
                            ].map((college) => (
                                <button
                                    key={college}
                                    onClick={() => setSelectedCollege(college)}
                                    className={`${selectedCollege === college ? "bg-white text-primary" : "bg-primary text-white"} hover:brightness-120 cursor-pointer py-1 px-3 border border-white rounded duration-120`}
                                >
                                    {college}
                                </button>
                            ))}
                        </div>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start w-80 md:w-100 font-semibold">
                    <Typography variant="h3" className="font-semibold">
                        Organization Type
                    </Typography>
                    <div className="w-full flex">
                        <div className="flex flex-wrap gap-3 px-3">
                            {[
                                "Academic",
                                "Non Academic",
                                "Sports and Recreation",
                                "Religious",
                                "Arts & Media",
                                "Leadership & Service",
                                "Advocacy",
                            ].map((type) => (
                                <button
                                    key={type}
                                    onClick={() =>
                                        setSelectedOrganizationType(type)
                                    }
                                    className={`${selectedOrganizationType === type ? "bg-white text-primary" : "bg-primary text-white"} hover:brightness-120 cursor-pointer py-1 px-3 border border-white rounded duration-120`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-end gap-3 items-center mt-3">
                    <button
                        onClick={() => setOpen(false)}
                        className="py-1 px-4 border border-red-500 font-semibold text-red-500 rounded-xl"
                    >
                        Discard
                    </button>
                    <button
                        onClick={() => setOpen(false)}
                        className="py-1 px-4 border border-green-500 font-semibold text-green-400 rounded-xl"
                    >
                        Apply
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
