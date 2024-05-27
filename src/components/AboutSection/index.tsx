import React from 'react';
import Image from 'next/image';

import UIElevate from '@/images/Elevate.png';
import PointerImage from '@/images/Group 88.png';
import Folders from '@/images/Group 90.svg';
import Screen from '@/images/screen.svg';

const AboutSection = () => {
  return (
    <>
      <section className="pt-8 container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-4">
          <p className="font-inter text-4xl font-bold leading-tight text-left text-white">
            Elevate your user experience <br />
            with expert UI/UX design
          </p>
        </div>
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-4">
          <p className="font-inter text-base font-normal leading-5 text-left text-white pt-4 opacity-80">
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

      <section className="pt-8 container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-4">
          <p className="relative top-[19.53%] bottom-[55.62%] left-[1.86%] right-[54.63%] text-transparent bg-gradient-to-b from-[#0FF542] to-[#00D1FF] bg-clip-text font-semibold text-[44px] leading-[53px] font-inter">
            Unlock the full potential of your software with our scalable
            solutions
          </p>
          <div className="relative top-[22.89%] bottom-[26.86%] left-[1.86%] right-[60.98%] text-white font-normal text-[20px] leading-6 font-inter opacity-80">
            <p>Scaling your software is crucial for the growth</p>
            <p>and success of your business. As your user</p>
            <p>base and business needs grow, your software</p>
            <p>must be able to keep up. Our scalable solutions</p>
            <p>can help you achieve this by allowing your</p>
            <p>software to handle increased loads, adapt to</p>
            <p>new features, and support more users.</p>
          </div>
        </div>
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-4">
          <Image
            src={PointerImage}
            alt="Pointer image"
            className="relative left-2"
          />
        </div>
      </section>

      <section className="pt-8 container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-4">
          <Image
            src={Folders}
            alt="Folders image"
            className="relative left-2"
          />
        </div>
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-4">
          <p className="relative top-[19.53%] bottom-[55.62%] left-[8.86%] right-[54.63%] text-transparent bg-gradient-to-b from-[#0FF542] to-[#00D1FF] bg-clip-text font-semibold text-[44px] leading-[53px] font-inter">
            Achieve project success with our proven project management structure
          </p>
          <p className="relative top-[25.61%] bottom-[29.39%] left-[9.24%] right-[11.06%] text-white font-normal text-[20px] leading-[24px] font-inter">
            Project management is critical to the success of any project. With
            our proven project management structure, we can help you achieve
            your project objectives on-time, on-budget, and with high quality.
          </p>
        </div>
      </section>

      <section className="pt-8 container mx-auto flex flex-wrap justify-between mt-10">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-4">
          <div className="relative w-[100%] h-555.12 left-130.25 top-0 mb-10">
            <div className="relative left-0 right-0 top-0 bottom-0 bg-gradient-to-br from-transparent via-D9D9D9 to-transparent rounded-lg flex justify-center items-center">
              <Image
                src={Screen}
                alt="Folders image"
                className="relative left-2"
              />
              <div className="absolute -bottom-16 flex justify-between gap-10 items-center w-[80%] ml-2 p-10 rounded-lg backdrop-blur-md">
                <div className="font-inter font-bold text-white text-5xl leading-14">
                  1,200K
                </div>
                <div className="font-inter font-normal text-base leading-5 text-customGray text-opacity-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-4">
          <div className="relative w-[100%] h-555.12 left-130.25 top-0 mb-10">
            <div className="relative left-0 right-0 top-0 bottom-0 bg-gradient-to-br from-transparent via-D9D9D9 to-transparent rounded-lg flex justify-center items-center">
              <Image
                src={Screen}
                alt="Folders image"
                className="relative left-2"
              />
              <div className="absolute -bottom-16 flex justify-between gap-10 items-center w-[80%] ml-2 p-10 rounded-lg backdrop-blur-md">
                <div className="font-inter font-bold text-white text-5xl leading-14">
                  1,200K
                </div>
                <div className="font-inter font-normal text-base leading-5 text-customGray text-opacity-0 items-end justify-end">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 container mx-auto flex flex-wrap justify-between">
        <div className="w-full">
          {/* Main Container */}
          <div className="relative w-[100%] h-42 -left-24 top-20">
            {/* Line 1 */}
            <div className="absolute border-t border-custom-gray w-[35%] h-0 left-134 top-21"></div>

            {/* Text */}
            <div className="absolute w-[18%] h-42 left-641 top-0 flex items-center justify-center font-inter font-normal text-35 leading-42 text-white">
              More services
            </div>

            {/* Line 2 */}
            <div className="absolute border-t border-custom-gray w-[35%] h-0 left-924 top-21"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
