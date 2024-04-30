import React, { Component } from 'react';
import Image from 'next/image';

import UIElevate from '@/images/UIElevate.svg';

const AboutSection = () => {
  return (
    <>
      <section className="pt-8 container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-2/3 lg:w-2/3 xl:w-1/2 p-4">
          <p className="font-inter text-4xl font-bold leading-tight text-left text-white">
            Elevate your user experience <br />
            with expert UI/UX design
          </p>
        </div>
        <div className="w-full md:w-2/3 lg:w-2/3 xl:w-1/2 p-4">
          <p className="font-inter text-base font-normal leading-5 text-left text-white pt-4 sm:-pt-4 opacity-80">
            Elevating your user experience is crucial for the success of your
            website or application. With expert UI/UX design, we can help you
            create a seamless and intuitive interface that will keep your users
            engaged and coming back for more.
          </p>
        </div>

        <div className="w-full pt-6">
          <Image
            src={UIElevate}
            alt="Elavate image"
            className="relative left-2"
          />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
