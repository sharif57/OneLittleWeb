import Image from 'next/image';

const reviews = [
    {
        name: "Jenny Wilson",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        featured: false,
    },
    {
        name: "Esther Howard",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        featured: true,
    },
    {
        name: "Robert Fox",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        featured: false,
    },
];

export default function ClientReviews() {
    return (
        <section className="bg-white py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold leading-tight text-secondary md:text-[40px]">
                        Check Our Clients <span className="text-primary">Review</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 text-secondary/80 md:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>

                <div className="mt-10 rounded-tl-lg rounded-tr-lg bg-[#f5f5f5] px-3 py-8 md:mt-12 md:px-5 md:py-10">
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                        {reviews.map((review) => (
                            <article
                                key={review.name}
                                className={`rounded-xl border border-black/5 bg-[#f8f8f8] p-4 shadow-[0_10px_26px_rgba(0,0,0,0.05)] transition-all duration-300 md:p-5 ${review.featured ? "md:-translate-y-4 md:bg-white md:shadow-[0_16px_40px_rgba(0,0,0,0.1)]" : "md:translate-y-0"}`}
                            >
                                <div className="flex items-start gap-3">
                                    <div
                                        className={`h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 ${review.featured ? "border-amber-300" : "border-sky-200"}`}
                                    >
                                        <Image src={review.image} alt={review.name} width={56} height={56} className="h-full w-full object-cover" />
                                    </div>

                                    <div>
                                        <h3 className="text-[18px] font-bold leading-tight text-[#111111]">{review.name}</h3>
                                        <p className="mt-1 max-w-57.5 text-[11px] font-medium leading-[1.55] text-black/80">
                                            {review.text}
                                        </p>

                                        <div className="mt-2.5 flex items-center gap-1 text-[#f59e0b]">
                                            <span className="text-[12px]">★</span>
                                            <span className="text-[12px]">★</span>
                                            <span className="text-[12px]">★</span>
                                            <span className="text-[12px]">★</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}