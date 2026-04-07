type HeadingProps = {
    title: string;
    highlight?: string;
    description?: string;
};

export default function Heading({ title, highlight, description }: HeadingProps) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-secondary md:text-[40px]">
                {title}
                {highlight ? <span className="text-primary"> {highlight}</span> : null}
            </h2>
            {description ? (
                <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 text-secondary/80 md:text-sm">
                    {description}
                </p>
            ) : null}
        </div>
    );
}
