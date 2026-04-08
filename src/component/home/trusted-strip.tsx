import Image from "next/image";

const trustedLogos = [
    { id: 1, src: "/images/tap1.svg", alt: "Airbnb" },
    { id: 2, src: "/images/tap2.svg", alt: "Booking.com" },
    { id: 3, src: "/images/tap3.svg", alt: "Vrbo" },
    { id: 4, src: "/images/tap4.svg", alt: "Tripadvisor" },
    { id: 5, src: "/images/tap5.svg", alt: "Agoda" },
    { id: 6, src: "/images/tap6.svg", alt: "Expedia" },
    { id: 7, src: "/images/tap7.svg", alt: "HomeToGo" },
];

export default function TrustedStrip() {
    const scrollingLogos = [...trustedLogos, ...trustedLogos];

    return (
        <div className="relative border-t border-[#ececec]  py-5 md:py-12">
            <p className="text-center text-xl font-semibold text-[#000000]">Trusted by leaders in 50+ industries</p>

            <div className="mt-5 overflow-hidden bg-[#F6F6F6] py-6">
                <div className="trusted-marquee flex w-max items-center gap-10 md:gap-12">
                    {scrollingLogos.map((logo, index) => (
                        <div
                            key={`${logo.id}-${index}`}
                            className="flex h-8 shrink-0 items-center justify-center opacity-95"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={130}
                                height={28}
                                className="h-6 w-auto md:h-7"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
