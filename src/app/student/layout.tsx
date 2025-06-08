import Transition from "@/components/ui/transition";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen overflow-auto flex flex-col justify-between">
            <Header user="student" />
            <main className="px-5 md:px-10 lg:px-29 xl:px-43 flex-grow">
                <Transition>{children}</Transition>
            </main>
            <Footer />
        </div>
    );
}
