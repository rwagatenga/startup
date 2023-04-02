import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.png';

export class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <section className="navigation-section">
          <section className="">
            <Image src={Logo} alt="" />
          </section>
          <section className=" text-left">
            <ul className="">
              <li>
                <Link href={'#'}>Home</Link>
              </li>
              <li>
                <Link href={'#'}>Developers</Link>
              </li>
              <li>
                <Link href={'#'}>Services</Link>
              </li>
              <li>
                <Link href={'#'}>Contact Use</Link>
              </li>
            </ul>
          </section>
        </section>
      </nav>
    );
  }
}

export default Navigation;
