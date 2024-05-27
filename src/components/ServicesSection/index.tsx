import React, { Component } from 'react';
import Image from 'next/image';

import Archieve from '@/images/archive.svg';
import Group1 from '@/images/Group 92 (1).svg';
import Group2 from '@/images/Group 92 (2).svg';
import Group92 from '@/images/Group 92.svg';
const ServicesSection = () => {

    return (
        <>
            <section className="pt-8 container mx-auto flex flex-wrap justify-between mt-44">
                <div className="w-full flex flex-wrap">
                    <div className="w-1/4">
                        <Image
                            src={Group1}
                            alt=''
                            className="w-32 h-32 rounded-2xl"
                        />
                        <h1 className="text-2xl font-bold mt-2">Simplify complex data with<br />our expert database design<br />
                            services</h1>
                        <p className="mt-2 text-xl">
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br />Lorem netus lacinia convallis.
                        </p>
                    </div>
                    <div className="w-1/4">
                        <Image
                            src={Group92}
                            alt=''
                            className="w-32 h-32 rounded-2xl"
                        />
                        <h2 className="text-2xl font-bold mt-5">
                            Complex<br /> Database Design
                        </h2>
                        <p className="mt-3 text-xl">
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Lorem netus lacinia convallis.
                        </p>
                    </div>
                    <div className="w-1/4">
                        <Image
                            src={Archieve}
                            alt=''
                            className="w-32 h-32 rounded-2xl"
                        />
                        <h3 className="text-2xl font-bold mt-5">
                            Complex<br /> Database Design
                        </h3>
                        <p className="mt-3 text-xl">
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Lorem netus lacinia convallis.
                        </p>
                    </div>
                    <div className="w-1/4">
                        <Image
                            src={Archieve}
                            alt=''
                            className="w-32 h-32 rounded-2xl"
                        />
                        <h3 className="text-2xl font-bold mt-5">
                            Complex<br /> Database Design
                        </h3>
                        <p className="mt-3 text-xl">
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Lorem netus lacinia convallis.
                        </p>
                    </div>
                </div>
                <div className="w-full mt-10 flex flex-wrap">
                    <div className="w-1/4">
                        <Image
                            src={Archieve}
                            alt=''
                            className="w-32 h-32 rounded-2xl"
                        />
                        <h4 className="text-2xl font-bold mt-5">
                            Complex<br /> Database Design
                        </h4>
                        <p className="mt-3 text-xl">
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Lorem netus lacinia convallis.
                        </p>
                    </div>
                    <div className="w-1/4">
                        <Image
                            src={Archieve}
                            alt=''
                            className="w-32 h-32 rounded-2xl"
                        />
                        <h5 className="text-2xl font-bold mt-5">
                            Complex<br /> Database Design
                        </h5>
                        <p className="mt-3 text-xl">
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Lorem netus lacinia convallis.
                        </p>
                    </div>
                    <div className="w-1/4">
                        <Image
                            src={Group1}
                            alt=''
                            className="w-32 h-32 rounded-2xl"
                        />
                        <h6 className="text-2xl font-bold mt-5">
                            Complex<br /> Database Design
                        </h6>
                        <p className="mt-3 text-xl">
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Lorem netus lacinia convallis.
                        </p>
                    </div>
                    <div className="w-1/4">
                        <Image
                            src={Archieve}
                            alt=''
                            className="w-32 h-32 rounded-2xl"
                        />
                        <h6 className="text-2xl font-bold mt-5">
                            Complex<br /> Database Design
                        </h6>
                        <p className="mt-3 text-xl">
                            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Lorem netus lacinia convallis.
                        </p>
                    </div>
                </div>

            </section>

            <section className="pt-8 container mx-auto flex flex-wrap justify-center">
                <div className="w-full">
                    <div className="relative w-[100%] h-42 -left-20 top-20">
                        <div className="absolute border-t border-custom-gray w-[37%] h-0 left-134 top-21 -ml-12"></div>
                        <div className="absolute w-[19%] h-42 left-641 top-0 flex items-center justify-center font-inter font-normal text-35 leading-42 text-white">
                            Testmonials
                        </div>
                        <div className="absolute border-t border-custom-gray w-[37%] h-0 left-924 top-21"></div>

                    </div>
                </div>
            </section>
        </>
    )
};
export default ServicesSection;
