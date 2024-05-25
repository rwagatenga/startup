import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/logo.png'
import twitter from '../../../public/images/twitter.svg'
import facebook from '../../../public/images/facebook.svg'
import youtube from '../../../public/images/youtube.svg'
import linkedin from '../../../public/images/linkedin.svg'
import mail from '../../../public/images/mail.svg'
interface SocialLinks{
    Image:string,
}
const socialLinks:SocialLinks[]=[
    {
        Image:linkedin,
    },
    {
        Image:twitter,
    },
    {
        Image:facebook,
    },
    {
        Image:youtube,
    },
    {
        Image:mail,
    },

]
const Footer = ()=>{
    return(
        <>
          <footer className="mt-8 bg-blue-600 w-full lg:h-[356.32px] 
                             lg:items-center flex justify-around
                              pl-[130px] pr-[110px] font-inter gap-2 flex-wrap">
            <article className="basis-[295px] flex flex-col gap-2">
               <Image src={logo} alt=""/>
               <p>Lorem ipsum dolor sit amet consectetur. Ac quis et dictum vestibulum. 
                  Ullamcorper porta praesent mattis aliquam a duis.
                  Porta venenatis adipiscing erat et lectus tincidunt diam.
                </p>
            </article>
            <article className="basis-[195.70px] flex flex-col gap-2">
                <h2 className="font-bold font-inter text-[21px] text-blue-100">Address</h2>
                <p>Lorem ipsum dolor sit amet consectetur. 
                    Ac quis et dictum vestibulum. Ullamcorper 
                    porta praesent mattis aliquam a duis.
                </p>
            </article>
            <article className="flex flex-col gap-2">
                <h2 className="text-[21px] font-bold font-inter text-blue-100">Links</h2>
                <ul className="flex flex-col gap-1">
                    <li>
                        <Link href={'#'} className="border-b-[1px] border-white">Home</Link>
                    </li>
                    <li>
                        <Link href={'#'} className="border-b-[1px] border-white">About</Link>
                    </li>
                    <li>
                        <Link href={'#'} className="border-b-[1px] border-white">Contacts</Link>
                    </li>
                    <li>
                        <Link href={'#'} className="border-b-[1px] border-white">Services</Link>
                    </li>
                    <li>
                        <Link href={'#'} className="border-b-[1px] border-white">Get Started</Link>
                    </li>
                </ul>
            </article>
            <section className="flex flex-col gap-10">
                <div
                    className="border-[1px] border-blue-200
                              bg-blue-400 flex items-center 
                              w-96 h-16 gap-4 py-9 px-2 rounded-xl font-inter">
                    <div className="flex flex-col border-[0.73px]
                             border-100 bg-blue-400 rounded-xl pl-3 
                             py-2 relative">
                        <input type="email"
                          className="border-none outline-none bg-blue-400 appearance-none py-[7px] peer" />
                        <label className="text-lg absolute top-3 transition-all duration-300 peer-focus:top-[-5px] peer-focus:text-[8.81px] peer-focus:text-blue-100 peer-invalid:top-[-5px] peer-invalid:text-[8.81px] pointer-events-none">Your email</label>
                    </div>
                    <button type="submit" className="font-bold text-blue-100">Subscribe</button>
                </div>
                <div>
                    <ul className="flex gap-x-[3.2rem] items-center">
                        {socialLinks.map(image=>(
                             <li>
                             <Link href={'#'}>
                                 <Image src={image.Image} alt="twitter"></Image>
                             </Link>
                         </li>
                        ))}
                        {/* <li>
                            <Link href={'#'}>
                                <Image src={twitter} alt="twitter"></Image>
                            </Link>
                        </li>
                        <li>
                            <Link href={'#'} >

                            </Link>
                        </li>
                        <li>
                            <Link href={'#'}>

                            </Link>
                        </li>
                        <li>
                            <Link href={'#'}>

                            </Link>
                        </li>
                        <li>
                            <Link href={'#'}>

                            </Link>
                        </li> */}
                    </ul>
                </div>
            </section>
          </footer>
        </>
    )
}

export default Footer;