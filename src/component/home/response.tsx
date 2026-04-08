import Image from 'next/image';
import { Check, MoveRight } from 'lucide-react';

const reasons = [
  'Brilliant Client Service',
  'Flexibility & Adaptability',
  'We make it Personal',
  'We have expert in our team',
];


export default function Response() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="overflow-hidden rounded-[30px] border border-primary/20 bg-[#f7ecef] px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold leading-tight text-[#121212] md:text-[36px] md:leading-[1.15]">
                Few Reasons Why you
                <br />
                Choose us?
              </h2>

              <p className="mt-5 max-w-md text-sm font-medium leading-6 text-secondary/85">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>

              <ul className="mt-6 space-y-3.5">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-center gap-3 text-[16px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {reason}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-[#d73460]"
              >
                Schedule A Meeting
                <MoveRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative mx-auto flex min-h-[420px] w-full max-w-[560px] items-end justify-center lg:min-h-[460px]">

             <Image
                src="/images/right.png"
                alt="Response Image"
                width={560}
                height={460}
                className="h-auto w-full rounded-[30px] object-cover object-center"
              />

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
