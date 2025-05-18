import Typography from "@/components/typography/typography";

interface AvatarCardProps {
    title: string;
    imageUrl: string;
}

const AvatarCard = ({ title, imageUrl }: AvatarCardProps) => {
    return (
        <article className="relative flex aspect-square w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 rounded-2xl shadow-xl border border-muted/10">
            <img
                src={`/images/${imageUrl}`}
                alt={`${title}-avatar-image`}
                className="w-full h-full object-cover absolute rounded-2xl"
            />
            <section className="min-h-12 lg:min-h-18 w-full bg-primary/95 text-white py-1.5 px-3 rounded-b-2xl tracking-wide self-end z-50">
                <Typography variant="h5" className="font-bold">
                    {title}
                </Typography>
            </section>
        </article>
    );
};

export default AvatarCard;
