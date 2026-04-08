'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import Heading from '@/component/heading/heading';
import Image from 'next/image';

type BillingCycle = 'monthly' | 'yearly';

type Plan = {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  featured?: boolean;
  buttonVariant?: 'outline' | 'solid';
  features: Array<{
    label: string;
    included: boolean;
  }>;
};

const plans: Plan[] = [
  {
    name: 'Freebie',
    description: 'Ideal for individuals who need quick access to basic features.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonVariant: 'outline',
    features: [
      { label: '20,000+ of PNG & SVG graphics', included: true },
      { label: 'Access to 100 million stock images', included: true },
      { label: 'Upload custom icons and fonts', included: false },
      { label: 'Unlimited Sharing', included: false },
      { label: 'Upload graphics & video in up to 4k', included: false },
      { label: 'Unlimited Projects', included: false },
      { label: 'Instant Access to our design system', included: false },
      { label: 'Create teams to collaborate on designs', included: false },
    ],
  },
  {
    name: 'Professional',
    description: 'Ideal for individuals who need advanced features and tools for client work.',
    monthlyPrice: 25,
    yearlyPrice: 19,
    featured: true,
    buttonVariant: 'solid',
    features: [
      { label: '20,000+ of PNG & SVG graphics', included: true },
      { label: 'Access to 100 million stock images', included: true },
      { label: 'Upload custom icons and fonts', included: true },
      { label: 'Unlimited Sharing', included: true },
      { label: 'Upload graphics & video in up to 4k', included: true },
      { label: 'Unlimited Projects', included: true },
      { label: 'Instant Access to our design system', included: false },
      { label: 'Create teams to collaborate on designs', included: false },
    ],
  },
  {
    name: 'Enterprise',
    description: 'Ideal for businesses who need personalized services and security for large teams.',
    monthlyPrice: 100,
    yearlyPrice: 75,
    buttonVariant: 'outline',
    features: [
      { label: '20,000+ of PNG & SVG graphics', included: true },
      { label: 'Access to 100 million stock images', included: true },
      { label: 'Upload custom icons and fonts', included: true },
      { label: 'Unlimited Sharing', included: true },
      { label: 'Upload graphics & video in up to 4k', included: true },
      { label: 'Unlimited Projects', included: true },
      { label: 'Instant Access to our design system', included: true },
      { label: 'Create teams to collaborate on designs', included: true },
    ],
  },
];

function formatPrice(value: number) {
  return value.toLocaleString('en-US');
}

function PriceSymbol({ included }: { included: boolean }) {
  return included ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <X className="h-3.5 w-3.5" strokeWidth={3} />;
}

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <section className="relative overflow-hidden  py-16 sm:py-20 lg:py-8">

      <div className="max-w-7xl relative mx-auto px-4 md:px-6">
        <Heading
          title="Airbnb Assistant"
          highlight="pricing"
          description="Choose a plan that’s right for you"
        />

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-primary' : 'text-secondary/70 hover:text-secondary'}`}
              aria-pressed={billingCycle === 'monthly'}
            >
              Pay Monthly
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`relative flex h-6 w-11 items-center rounded-full p-0.5 transition-colors ${billingCycle === 'yearly' ? 'bg-primary' : 'bg-black/20'}`}
              aria-label="Toggle billing cycle"
              aria-pressed={billingCycle === 'yearly'}
            >
              <span
                className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'}`}
              />
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`text-sm font-medium transition-colors ${billingCycle === 'yearly' ? 'text-primary' : 'text-secondary/70 hover:text-secondary'}`}
              aria-pressed={billingCycle === 'yearly'}
            >
              Pay Yearly
            </button>
          </div>

          <div className="mt-1 hidden items-end  gap-2 text-sm font-medium text-primary sm:flex sm:mt-0 sm:translate-y-1">
            <Image src="/images/arrow.png" alt="Airbnb" width={600} height={200} className="h-[55px] w-[90px]" />
            <p>Save 25%</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          {plans.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const isFeatured = Boolean(plan.featured);

            return (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-2xl border px-5 py-6 shadow-sm transition-all duration-300 sm:px-6 sm:py-7 ${isFeatured ? 'border-primary bg-primary text-white shadow-[0_24px_60px_-28px_rgba(237,60,106,0.85)]' : 'border-primary/25 bg-white text-[#1E1E1E] hover:-translate-y-1 hover:border-primary/40 hover:shadow-md'}`}
              >
                <div className="flex-1">
                  <h3 className={`text-[22px] font-bold tracking-[-0.02em] ${isFeatured ? 'text-white' : 'text-[#1E1E1E]'}`}>
                    {plan.name}
                  </h3>

                  <p className={`mt-3  text-base font-normal leading-6 ${isFeatured ? 'text-white/85' : 'text-secondary/70'}`}>
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                      ${formatPrice(price)}
                    </span>
                    <span className={`pb-2 text-sm ${isFeatured ? 'text-white/75' : 'text-secondary/60'}`}>
                      / Month
                    </span>
                  </div>

                  {billingCycle === 'yearly' && plan.monthlyPrice > 0 ? (
                    <p className={`mt-1 text-xs font-medium ${isFeatured ? 'text-white/75' : 'text-primary'}`}>
                      Billed yearly, save 25%
                    </p>
                  ) : null}

                  <button
                    type="button"
                    className={`mt-6 inline-flex h-11 w-full items-center justify-center rounded-sm border text-base font-semibold transition-colors ${plan.buttonVariant === 'solid'
                      ? 'border-white bg-white text-primary hover:bg-white/95'
                      : isFeatured
                        ? 'border-white bg-transparent text-white hover:bg-white/10'
                        : 'border-primary bg-transparent text-primary hover:bg-primary hover:text-white'
                      }`}
                  >
                    Get Started Now
                  </button>

                  <ul className="mt-6 space-y-3 sm:mt-7 sm:space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className={`flex items-start gap-3 text-base font-medium leading-5 ${feature.included ? (isFeatured ? 'text-white' : 'text-secondary/80') : (isFeatured ? 'text-white/80' : 'text-secondary/45')}`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${feature.included ? (isFeatured ? 'bg-white text-primary' : 'bg-primary/15 text-primary') : (isFeatured ? 'bg-white/15 text-white/80' : 'bg-black/5 text-secondary/50')}`}
                        >
                          <PriceSymbol included={feature.included} />
                        </span>
                        <span>{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
