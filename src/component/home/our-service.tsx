import Heading from "@/component/heading/heading";
import Property from "../icon/Property";
import Time from "../icon/time";
import House from "../icon/house";
import Review from "../icon/review";
import Report from "../icon/report";
import Support from "../icon/support";

const services = [
    {
        title: "Manage Property Listings",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: Property,
    },
    {
        title: "Manage Customer Bookings",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: Time,
    },
    {
        title: "Schedule House Cleaning",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: House,
    },
    {
        title: "Monitor Guest Reviews",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: Review,
    },
    {
        title: "Track & Report Expenses",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: Report,
    },
    {
        title: "Guest Inquiry & Support",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: Support,
    },
];

export default function OurService() {
    return (
        <section className=" py-14 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <Heading
                    title="Our"
                    highlight="Service"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <article
                                key={service.title}
                                className={`rounded-xl cursor-pointer border border-primary/25 px-10 py-10 transition-all duration-300 hover:border-transparent shadow hover:bg-white hover:shadow-sm 
                                    `}
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                                    <Icon  />
                                </div>

                                <h3 className=" text-xl font-bold max-w-[200px]  leading-[1.2] tracking-[-0.01em] text-[#1E1E1E]">
                                    {service.title}
                                </h3>

                                <p className="mt-3 max-w-[290px] text-sm font-medium leading-6 text-secondary">{service.description}</p>

                                <button
                                    type="button"
                                    className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-primary px-6 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                                >
                                    Read More
                                </button>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
