"use client";

import Transition from "@/components/ui/transition";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

import { useState, useEffect } from "react";

import { type UserRole } from "../page";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    const [savedRole, setSavedRole] = useState<UserRole | undefined>(undefined);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const role = localStorage.getItem("role");
            if (role) {
                setSavedRole(role as UserRole);
            }
        }
    }, [])

    if (!savedRole) return <></>

    return (
        <div className="h-screen overflow-auto flex flex-col justify-between">
            <Header user={savedRole} />
            <main className="px-5 md:px-10 lg:px-29 xl:px-43 flex-grow">
                <Transition>{children}</Transition>
            </main>
            <Footer />
        </div>
    );
}
