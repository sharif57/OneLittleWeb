import Image from "next/image";
import Link from "next/link";

type FooterLink = {
    label: string;
    href: string;
};

type FooterGroup = {
    title: string;
    links: FooterLink[];
};

type SocialLink = {
    label: string;
    href: string;
    icon: () => JSX.Element;
    accent?: boolean;
};

const footerGroups: FooterGroup[] = [
    {
        title: "Company",
        links: [
            { label: "About", href: "#" },
            { label: "Features", href: "#" },
            { label: "Works", href: "#" },
            { label: "Career", href: "#" },
        ],
    },
    {
        title: "Help",
        links: [
            { label: "Customer Support", href: "#" },
            { label: "Delivery Details", href: "#" },
            { label: "Terms & Conditions", href: "#" },
            { label: "Privacy Policy", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Free eBooks", href: "#" },
            { label: "Development Tutorial", href: "#" },
            { label: "How to - Blog", href: "#" },
            { label: "Youtube Playlist", href: "#" },
        ],
    },
];

const socialLinks: SocialLink[] = [
    { label: "Email", href: "#", icon: MailIcon, accent: true },
    { label: "Facebook", href: "#", icon: FacebookIcon },
    { label: "Instagram", href: "#", icon: InstagramIcon },
    { label: "GitHub", href: "#", icon: GitHubIcon },
];

function MailIcon() {
    return (
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9991 1.49275C15.3991 1.75813 14.7658 1.92399 14.0992 2.02351C14.7658 1.62544 15.2991 0.995169 15.5325 0.232206C14.8992 0.597101 14.1992 0.862479 13.4326 1.02834C12.8326 0.398067 11.966 0 11.0327 0C9.23282 0 7.76623 1.45958 7.76623 3.25088C7.76623 3.51626 7.79957 3.74847 7.86623 3.98067C5.16638 3.84799 2.73318 2.55427 1.09994 0.563929C0.833287 1.06151 0.666629 1.59227 0.666629 2.18937C0.666629 3.31723 1.23326 4.3124 2.13321 4.9095C1.59991 4.87633 1.09994 4.74364 0.633298 4.51143V4.5446C0.633298 6.13687 1.76657 7.46376 3.26648 7.76232C2.99983 7.82866 2.69985 7.86183 2.39987 7.86183C2.19988 7.86183 1.96656 7.82866 1.76657 7.79549C2.19988 9.08921 3.39981 10.0512 4.83306 10.0512C3.69979 10.9137 2.29987 11.4444 0.766624 11.4444C0.499972 11.4444 0.23332 11.4444 0 11.4113C1.46658 12.3401 3.16649 12.8708 5.03305 12.8708C11.066 12.8708 14.3659 7.895 14.3659 3.58261C14.3659 3.44992 14.3659 3.28406 14.3659 3.15137C14.9992 2.72013 15.5658 2.1562 15.9991 1.49275Z" fill="#27272A" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
            <path
                d="M14.5 8.5H16V6h-1.5c-2 0-3.25 1.24-3.25 3.3V11H9.5v2.5h1.75V18H14v-4.5h2l.25-2.5H14v-1.4c0-.7.35-1.1.5-1.1Z"
                fill="currentColor"
            />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
            <rect x="5.5" y="5.5" width="13" height="13" rx="4" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="16.7" cy="7.35" r="0.95" fill="currentColor" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
            <path
                d="M12 4.5a7.5 7.5 0 0 0-2.37 14.61c.37.07.5-.16.5-.36v-1.26c-2.04.44-2.47-.86-2.47-.86-.33-.84-.81-1.06-.81-1.06-.66-.45.05-.44.05-.44.73.05 1.11.75 1.11.75.64 1.1 1.68.78 2.09.6.06-.47.25-.78.45-.96-1.63-.19-3.34-.81-3.34-3.6 0-.79.28-1.43.75-1.94-.08-.19-.33-.95.07-1.97 0 0 .61-.2 2 .74a7.15 7.15 0 0 1 3.64 0c1.4-.94 2-.74 2-.74.41 1.02.16 1.78.08 1.97.47.51.75 1.15.75 1.94 0 2.8-1.71 3.4-3.35 3.59.26.23.5.67.5 1.35v1.99c0 .2.13.43.51.36A7.5 7.5 0 0 0 12 4.5Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="border-t border-black/5 bg-white">
            <div className="mx-auto container px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
                    <div className="max-w-md text-center lg:text-left">
                        <Link href="/" className="inline-flex items-center justify-center lg:justify-start">
                            <Image
                                src="/images/logo.png"
                                alt="Google"
                                width={132}
                                height={48}
                                className="h-auto w-[108px] sm:w-[120px]"
                            />
                        </Link>

                        <p className="mt-5 text-sm leading-6 text-[#6B7280] sm:text-[15px] sm:leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br className="hidden sm:block" />
                            Nullam dictum aliquet accumsan porta lectus ridiculus in mattis.
                            Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
                        </p>

                        <ul className="mt-8 flex items-center justify-center gap-5 lg:justify-start" aria-label="Social links">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <li key={social.label}>
                                        <Link
                                            href={social.href}
                                            aria-label={social.label}
                                            className={`inline-flex h-8 w-8 items-center justify-center rounded-sm border transition-colors ${social.accent ? "border-[#8B5CF6] bg-[#8B5CF6] text-white" : "border-transparent bg-transparent text-[#1E1E1E] hover:border-black/10 hover:bg-black/5"}`}
                                        >
                                            <Icon />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="grid gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3 lg:gap-8">
                        {footerGroups.map((group) => (
                            <nav key={group.title} aria-label={group.title} className="space-y-4">
                                <h2 className="text-base font-semibold text-[#1F2937] sm:text-[17px]">{group.title}</h2>

                                <ul className="space-y-4">
                                    {group.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm font-normal text-[#1E1E1E] transition-colors hover:text-primary sm:text-[15px]"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}