import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Banner1 from "../icon/banner1";
import Banner2 from "../icon/banner2";
import Banner3 from "../icon/banner3";
import Banner4 from "../icon/banner4";

const floatingTools = [
    {
        id: "airbnb",
        label: "airbnb",
        badge: <Banner2 />,
        cardClass:
            "left-[16%] top-[15%] -rotate-[30deg] bg-[#f15768] text-white shadow-[0_18px_30px_rgba(241,87,104,0.28)]",
    },
    {
        id: "wheel",
        label: "Wheel",
        badge: <Banner4 />,
        cardClass:
            "left-[20%] bottom-[18%] -rotate-[24deg] bg-[#11306e] text-[#62d0ff] shadow-[0_18px_30px_rgba(17,48,110,0.26)]",
    },
    {
        id: "booking",
        label: "Booking",
        badge: <Banner3 />,
        cardClass:
            "right-[21%] top-[18%] rotate-[28deg] bg-[#0f4787] text-white shadow-[0_18px_30px_rgba(15,71,135,0.24)]",
    },
    {
        id: "trip",
        label: "Trip",
        badge: <Banner1 />,
        cardClass:
            "right-[20%] bottom-[16%] rotate-[32deg] bg-[#38d5a0] text-[#021f1c] shadow-[0_18px_30px_rgba(56,213,160,0.24)]",
    },
];

const dots = [
    { id: 1, className: "left-[6%] top-[24%] bg-[#6061f0]" },
    { id: 2, className: "left-[14%] bottom-[30%] bg-[#f15f5f]" },
    { id: 3, className: "left-[7%] bottom-[10%] bg-[#e4be38]" },
    { id: 4, className: "left-1/2 top-[17%] bg-[#3ad08f]" },
    { id: 5, className: "left-1/2 bottom-[10%] bg-[#45d3d5]" },
    { id: 6, className: "right-[13%] top-[29%] bg-[#d3c23d]" },
    { id: 7, className: "right-[7.5%] bottom-[21%] bg-[#1f4f8f]" },
];

export default function Banner() {
    return (
        <section className="relative overflow-hidden">
            <div className="banner-grid-bg absolute inset-0" aria-hidden="true" />

            {dots.map((dot) => (
                <span
                    key={dot.id}
                    className={`absolute h-2.5 w-2.5 rounded-full ${dot.className}`}
                    aria-hidden="true"
                />
            ))}

            <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
                {floatingTools.map((tool) => (
                    <div
                        key={tool.id}
                        className={`absolute flex h-16 w-16 items-center justify-center rounded-xl text-2xl font-bold tracking-tight ${tool.cardClass}`}
                    >
                        {tool.badge}
                        <span className="sr-only">{tool.label}</span>
                    </div>
                ))}
            </div>

            <div className="relative mx-auto flex min-h-[390px] w-full max-w-[1100px] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[558px]">
                <h1 className="max-w-[650px] text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0f0f0f] md:text-[48px]">
                    Airbnb Assistants For
                    <span className="block text-[38px] font-medium leading-[1.35]">Property Management</span>
                </h1>

                <p className="mt-6 max-w-[620px] text-[13px] font-medium leading-[1.55] text-[#333333] md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4">

                    <button
                        type="button"
                        className="inline-flex h-[52px] items-center justify-center rounded-md bg-primary px-6 text-[15px] font-semibold text-white shadow-[0_12px_22px_rgba(237,60,106,0.32)] transition-colors hover:bg-[#d6355f]"
                    >
                        Schedule A Meeting
                        <span className="ml-2 size-[20px]"><ArrowRight /></span>
                    </button>

                    <a href="#" className="text-sm font-medium underline text-[#1e1e1e] transition-colors hover:text-[#ed3c6a]">
                        See Pricing
                    </a>
                </div>

                <div className="pointer-events-none mt-6 block md:hidden" aria-hidden="true">
                    <Image src="/images/arrow.png" alt="" width={96} height={60} className="h-auto w-20 opacity-80" />
                </div>
            </div>

           
        </section>
    );
}
