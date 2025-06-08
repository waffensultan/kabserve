"use client";

import { useRouter } from "next/navigation";

import {
  GraduationCap as GraduationCapIcon,
  Users as UsersIcon,
  ScanEye as ScanEyeIcon,
} from "lucide-react";

import Typography from "@/components/typography/typography";
import Background from "@/components/background";
import Footer from "@/components/ui/footer";

export type UserRole = "student" | "organization" | "guest";

export default function ContinueAs() {
  const router = useRouter();

  const handleSelect = (role: UserRole) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("role", role);
    }

    // Navigate immediately based on role
    if (role === "guest") {
      router.push("/guest");
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <div className="px-5 md:px-10 lg:px-29 xl:px-43 flex-grow mb-20">
        <Background />
        <main className="flex flex-col gap-10 justify-center items-center py-15">
          <img
            src="/images/kabserve_logo_big.png"
            alt="Kabserve Logo"
            className="max-h-50 md:max-h-100 md:-mt-45 object-contain"
          />
          <span className="text-white font-semibold -mt-25 md:-mt-40 md:text-4xl mb-20">
            Vibrant communities.{" "}
            <span className="bg-gradient-to-r from-[#FF4800] to-[#FFDD00] inline-block text-transparent bg-clip-text">
              Fiery{" "}
            </span>{" "}
            passion.
          </span>
          <section className="flex flex-col w-full -mt-20">
            <Typography className="text-white font-semibold">
              Continue as...
            </Typography>
            <Typography variant="h3" className="text-white">
              Identify as a Student, Organization, or Guest
            </Typography>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              onClick={() => handleSelect("student")}
              // Adjusted padding: Smaller on mobile, larger from md breakpoint.
              // Added a specific smaller width for base mobile, and md:w-75 for wider screens.
              className="transition duration-300 relative bg-white rounded-t-2xl flex flex-col justify-center items-center p-6 md:p-10 text-center w-64 md:w-75 justify-self-center cursor-pointer hover:-translate-y-5"
            >
              {/* Adjusted icon size */}
              <GraduationCapIcon size={90} />
              {/* Adjusted mobile heading size */}
              <Typography className="text-[#255F38] font-semibold md:hidden text-xl">
                Student
              </Typography>
              {/* Adjusted mobile description size */}
              <Typography className="md:hidden text-base">
                Explore campus orgs, join events, and grow your CvSU journey.
              </Typography>
              <Typography
                variant="h2"
                className="text-[#255F38] font-semibold hidden md:flex"
              >
                Student
              </Typography>
              <Typography variant="p" className="hidden md:flex">
                Explore campus orgs, join events, and grow your CvSU journey.
              </Typography>
            </article>

            <article
              onClick={() => handleSelect("organization")}
              // Adjusted padding and width
              className="transition duration-300 relative bg-white rounded-t-2xl flex flex-col justify-center items-center p-6 md:p-10 text-center w-64 md:w-75 justify-self-center cursor-pointer hover:-translate-y-5"
            >
              {/* Adjusted icon size */}
              <UsersIcon size={90} />
              {/* Adjusted mobile heading size */}
              <Typography className="text-[#255F38] font-semibold md:hidden text-xl">
                Organization
              </Typography>
              {/* Adjusted mobile description size */}
              <Typography className="md:hidden text-base">
                Manage your org, post events, and engage with Kabsuhenyos.
              </Typography>
              <Typography
                variant="h2"
                className="text-[#255F38] font-semibold hidden md:flex"
              >
                Organization
              </Typography>
              <Typography variant="p" className="hidden md:flex">
                Manage your org, post events, and engage with Kabsuhenyos.
              </Typography>
            </article>

            <article
              onClick={() => handleSelect("guest")}
              // Adjusted padding and width
              className="transition duration-300 relative bg-white rounded-t-2xl flex flex-col justify-center items-center p-6 md:p-10 text-center w-64 md:w-75 justify-self-center cursor-pointer hover:-translate-y-5"
            >
              {/* Adjusted icon size */}
              <ScanEyeIcon size={90} />
              {/* Adjusted mobile heading size */}
              <Typography className="text-[#255F38] font-semibold md:hidden text-xl">
                Guest
              </Typography>
              {/* Adjusted mobile description size */}
              <Typography className="md:hidden text-base">
                Browse as a visitor and discover what Kabserve has to offer.
              </Typography>
              <Typography
                variant="h2"
                className="text-[#255F38] font-semibold hidden md:flex"
              >
                Guest
              </Typography>
              <Typography variant="p" className="hidden md:flex">
                Browse as a visitor and discover what Kabserve has to offer.
              </Typography>
            </article>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}