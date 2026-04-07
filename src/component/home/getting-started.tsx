import Heading from '@/component/heading/heading';
import User from '../icon/user';
import Users from '../icon/users';
import Speaker from '../icon/spaker';

const steps = [
    {
        number: '01',
        title: 'Add requirements\n& sign up today',
        icon: User,
    },
    {
        number: '02',
        title: 'Connect with your CSM &\nonboarding team',
        icon: Users,
    },
    {
        number: '03',
        title: 'Meet your STR\nAssistant next week',
        icon: Speaker,
    },
];

export default function GettingStarted() {
    return (
        <section className="bg-white py-14 md:py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <Heading
                    title="Getting Started is"
                    highlight="Easy"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />

                <div className="mt-10 grid grid-cols-1 gap-7 md:mt-12 md:grid-cols-3 md:gap-6">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <article key={step.number} className="text-center">
                                <div className="relative flex min-h-42.5 items-center justify-center rounded-xl border border-primary/20 bg-white px-6 py-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_16px_30px_rgba(237,60,106,0.18)] md:px-8 md:py-11">
                                    <span className="absolute -left-3 -top-3 inline-flex h-15 w-15 items-center text-[29px] justify-center rounded-full border-4 border-primary bg-white  font-medium leading-none text-[#1e1e1e] md:-left-4 md:-top-4">
                                        {step.number}
                                    </span>

                                    <span className="inline-flex size-20 items-center justify-center">
                                        <Icon className="h-full w-full" />
                                    </span>
                                </div>

                                <p className="mx-auto mt-5 max-w-70 whitespace-pre-line text-center text-[20px] font-semibold leading-tight tracking-[-0.02em] text-[#141414]">
                                    {step.title}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}