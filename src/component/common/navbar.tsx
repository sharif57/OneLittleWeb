"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Resources", href: "#resources" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSmoothScroll = (
        event: MouseEvent<HTMLAnchorElement>,
        href: string,
        closeMenu = false
    ) => {
        if (!href.startsWith("#")) return;

        event.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.replaceState(null, "", href);
        }

        if (closeMenu) {
            setIsOpen(false);
        }
    };

    return (
        <header className="w-full border-b border-black/10 bg-white">
            <div className="container mx-auto flex w-full items-center justify-between px-4 py-4 md:px-6">
                <Link href="/" className="shrink-0">
                    <Image
                        src="/images/logo.png"
                        alt="Google"
                        width={125}
                        height={45}
                        className="h-[34px] w-auto sm:h-[38px]"
                        priority
                    />
                </Link>

                <nav className="hidden items-center gap-6 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={(event) => handleSmoothScroll(event, item.href)}
                            className={`text-lg leading-none transition-colors ${item.label === "Home" ? "font-medium text-primary" : "font-normal text-[#1E1E1E] hover:text-primary"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <Link
                        href="#contact"
                        onClick={(event) => handleSmoothScroll(event, "#contact")}
                        className="inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-5 text-base font-semibold text-white transition-opacity hover:opacity-90"
                    >
                        Schedule A Meeting
                        <span aria-hidden="true"><ArrowRight /></span>
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(true)}
                    className="flex h-10 w-10 items-center justify-center rounded border border-black/15 bg-white text-secondary lg:hidden"
                >
                    <span aria-hidden="true" className="text-xl leading-none">
                        ☰
                    </span>
                </button>
            </div>

            <div
                className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <aside
                className={`fixed right-0 top-0 z-50 h-full w-[86%] max-w-[340px] bg-white p-5 shadow-2xl transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-hidden={!isOpen}
            >
                <div className="mb-6 flex items-center justify-between">
                    <span className="text-lg font-semibold text-secondary">Menu</span>
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setIsOpen(false)}
                        className="flex h-9 w-9 items-center justify-center rounded border border-black/15 text-secondary"
                    >
                        <span aria-hidden="true" className="text-xl leading-none">
                            ×
                        </span>
                    </button>
                </div>

                <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={(event) => handleSmoothScroll(event, item.href, true)}
                            className={`rounded-md px-3 py-3 text-base transition-colors ${item.label === "Home"
                                ? "bg-primary/10 font-medium text-primary"
                                : "text-secondary hover:bg-black/5 hover:text-primary"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="#contact"
                    onClick={(event) => handleSmoothScroll(event, "#contact", true)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-semibold text-white"
                >
                    Schedule A Meeting
                    <span aria-hidden="true">→</span>
                </Link>
            </aside>
        </header>
    );
}
