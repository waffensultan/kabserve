import Typography from "@/components/typography/typography";

interface AvatarCardProps {
    title: string;
    secondaryTitle?: string;
    imageUrl: string;
}

const AvatarCard = ({ title, secondaryTitle }: AvatarCardProps) => {
    return (
        <article className="bg-gradient-to-t from-[#5E5E5E] to-[#C4C4C4] relative flex flex-col aspect-square w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 rounded-2xl shadow-xl border border-muted/10 overflow-hidden">
            <div className="flex-grow" />

            <section className="w-full bg-primary/95 text-white py-2 px-3 rounded-b-2xl z-50">
                <Typography variant="h5" className="font-bold truncate">
                    {title}
                </Typography>
                <Typography
                    variant="h5"
                    className="text-muted leading-tight line-clamp-2"
                >
                    {secondaryTitle}
                </Typography>
            </section>
        </article>
    );
};

export default AvatarCard;
