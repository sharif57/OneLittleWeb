import React from 'react'
import Heading from '../heading/heading'
import Image from 'next/image'

const tools = [
    { id: 1, name: 'PriceLabs', logo: '/images/tool1.png' },
    { id: 2, name: 'Wheelhouse', logo: '/images/tool2.png'  },
    { id: 3, name: 'Beyond Pricing', logo: '/images/tool3.png' },
    { id: 4, name: 'Hostfully', logo: '/images/tool4.png' },
    { id: 5, name: 'Guesty', logo: '/images/tool5.png' },
    { id: 6, name: 'LODGIFY', logo: '/images/image.png' },
    { id: 7, name: 'Hostfully', logo: '/images/tool1.png' },
    { id: 8, name: 'Guesty', logo: '/images/tool5.png' },
    { id: 9, name: 'LODGIFY', logo: '/images/image.png' },
]

export default function OurTools() {
    return (
        <section className="w-full ">
            <div className="mb-12 md:mb-16 px-4 md:px-6">
                <Heading
                    title="Our"
                    highlight="Tools"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </div>

            <div className="w-full  px-4 md:px-6 py-6 ">
                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto ">
                    {tools.map((tool) => (
                        <div
                            key={tool.id}
                            className="tool-card flex min-h-[140px] items-center justify-center p-6 md:p-8 rounded-xl bg-white shadow-sm cursor-pointer"
                        >
                            <div className="text-center">
                                {tool.logo ? (
                                    <Image
                                        src={tool.logo}
                                        alt={tool.name}
                                        width={172}
                                        height={40}
                                        className="mx-auto mb-4 h-auto w-auto max-h-10"
                                    />
                                ) : (
                                    <div className="mx-auto mb-4 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-primary/10 px-3 text-sm font-semibold text-primary">
                                        {tool.name.slice(0, 2).toUpperCase()}
                                    </div>
                                )}
                                {/* <p className="text-base md:text-lg font-semibold text-gray-800">
                                    {tool.name}
                                </p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
