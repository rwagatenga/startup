import React, { Component } from 'react';
import Image from 'next/image';

import Laptop from '@/images/Laptop.svg';
import Icons from '@/images/Icons.svg';
import Statistics from '@/images/Statistics.svg';
import UiCard from '@/images/UiCard.svg';
import Check from '@/images/Check.svg';

export class index extends Component {
  render() {
    return (
      <header className="hero-section overflow-hidden text-center bg-gradient-to-t from-sky-900 bg-opacity-20">
        <section className="pt-8 container mx-auto">
          <h1 className="text-4xl font-bold">
            Enhance your{' '}
            <span className="inline-block p-1 bg-yellow-400 text-black">
              business
            </span>{' '}
            with{' '}
            <span className="inline-block p-1 border px-2 border-yellow-400">
              us
            </span>{' '}
          </h1>
          <p className="text-gray-300 my-2">
            Achieve your business goals with our innovative and <br />
             dependable solutions.
          </p>
          <section className="flex gap-3 mt-4 justify-center">
            <button className="p-2 px-3 rounded bg-white text-black">
              Get Started
            </button>
            <button className="p-2 px-3 rounded text-white border">
              For developers
            </button>
          </section>
        </section>

        <section className="relative pt-10">
          <section className="grid grid-cols-2 max-w-xs mx-auto justify-center  gap-20 text-xs absolute right-0 left-0 -z-10 top-44 text-transparent ">
            <section className="w-0 h-0 gradient-shadow-two">2</section>
            <section className="w-0 h-0 gradient-shadow-one">1</section>
            <section className="w-0 h-0 gradient-shadow-three">3</section>
          </section>
          <Image
            src={Laptop}
            alt="Laptop image"
            className="mx-auto w-1/2 pt-8 relative "
          />

          <div className="grid grid-cols-3 absolute  bg-opacity-20 px-20 top-0 right-0 left-0 container mx-auto">
            <Image
              src={Icons}
              alt="Laptop image"
              className="mx-auto mt-8 w-64 top-0 left-9 "
            />

            <div className=""></div>

            <section className="mx-auto w-72 backdrop-blur-sm mt-8 ">
              <Image
                src={Statistics}
                alt="Laptop image  block"
                className="w-full"
              />
            </section>

            <Image
              src={Check}
              alt="Laptop image"
              className="mx-auto w-60 -mt-8 backdrop-blur-sm"
            />

            <div className=""></div>

            <Image
              src={UiCard}
              alt="Laptop image"
              className="mx-auto w-72 pt-6 backdrop-blur-sm"
            />
          </div>

          {/* <h2 className="text-8xl text-slate-600 mt-4">Vectors here</h2> */}
        </section>
        <section className="-mt-12">&nbsp;</section>
      </header>
    );
  }
}

export default index;
