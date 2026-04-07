"use client";

import { useState } from 'react';
import Heading from '@/component/heading/heading';
import { MessageCircle, Minus, Plus } from 'lucide-react';

const faqs = [
    {
        question: 'Is there a free trial available?',
        answer:
            "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        question: 'Can I change my plan later?',
        answer:
            'Yes. You can upgrade or downgrade your plan anytime from your account settings without losing your existing data.',
    },
    {
        question: 'What is your cancellation policy?',
        answer:
            'You can cancel your subscription at any time. Your access remains active until the end of your billing period.',
    },
    {
        question: 'Can other info be added to an invoice?',
        answer:
            'Absolutely. You can add company details, tax information, and other billing notes when generating invoices.',
    },
    {
        question: 'How does billing work?',
        answer:
            'Billing is handled automatically based on the plan you choose, and you can review all charges from your dashboard.',
    },
    {
        question: 'How do I change my account email?',
        answer:
            'Open your account settings, update your email address, and confirm the change using the verification link we send.',
    },
];

const avatars = [
    {
        initials: 'JW',
        bg: 'bg-gradient-to-br from-[#f7a6ba] to-[#f15b7c]',
    },
    {
        initials: 'EH',
        bg: 'bg-gradient-to-br from-[#c9b5ff] to-[#9b7bff]',
    },
    {
        initials: 'RF',
        bg: 'bg-gradient-to-br from-[#ffc36e] to-[#ff8b3d]',
    },
];

export default function ChooseUs() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="rounded-[18px] bg-[#F9FAFB] px-5 py-8  md:px-10 md:py-12">
                    <div className="mx-auto max-w-2xl text-center">
                        <Heading
                            title="Frequently asked"
                            highlight="questions"
                            description="Everything you need to know about the product and billing."
                        />
                    </div>

                    <div className="mx-auto mt-10 max-w-3xl  px-4 py-5 md:px-8 md:py-8">
                        <div className="space-y-0">
                            {faqs.map((faq, index) => {
                                const open = index === activeIndex;

                                return (
                                    <div key={faq.question} className="border-b border-primary/15 py-4 first:pt-0 last:border-b-0 last:pb-0 md:py-5">
                                        <button
                                            type="button"
                                            className="flex w-full items-center justify-between gap-4 text-left"
                                            onClick={() => setActiveIndex(open ? -1 : index)}
                                            aria-expanded={open}
                                        >
                                            <span className="text-lg font-bold leading-6 text-[#000000] md:text-base">
                                                {faq.question}
                                            </span>
                                            <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-primary transition-all duration-300 ${open ? 'border-primary' : 'border-primary/80'}`}>
                                                {open ? <Minus className="h-3 w-3" strokeWidth={3} /> : <Plus className="h-3 w-3" strokeWidth={3} />}
                                            </span>
                                        </button>

                                        <div className={`grid overflow-hidden transition-all duration-300 ${open ? 'mt-2 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                            <div className="overflow-hidden">
                                                <p className="max-w-2xl text-xs leading-5 text-secondary/70 md:text-base font-normal">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                </div>
                <div className="mx-auto mt-5  rounded-[18px] bg-[#F9FAFB] px-4 py-6 text-center  md:px-8 md:py-8">
                    <div className="flex justify-center">
                        <div className="flex -space-x-2">
                            {avatars.map((avatar) => (
                                <span
                                    key={avatar.initials}
                                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow-sm ${avatar.bg}`}
                                >
                                    {avatar.initials}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[#171717]">Still have Questions?</h3>
                    <p className="mt-2 text-sm font-medium text-secondary/60">
                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </p>

                    <button
                        type="button"
                        className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-[#d73460]"
                    >
                        <MessageCircle className="h-4 w-4" />
                        Get in touch
                    </button>
                </div>
            </div>
        </section>
    );
}
