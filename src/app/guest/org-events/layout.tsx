import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events | Kabserve",
    description: "Your hotstop for student organizations in CvSU.",
};

export default function EventsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
