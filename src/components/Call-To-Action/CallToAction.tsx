import React, { Component } from "react";

const CallToAction = ()=>{
    return(
        <>
          <section className=" w-[90%] lg:h-[340px] max-w-[1450px] border-2 
                                rounded-[30px] mx-auto mt-5 border-white 
                                flex flex-col justify-center items-center gap-4
                                 bg-gradient-to-r from-blue-100 60% via-blue-200 to-green-600 font-inter  p-4">
               <h1 className="text-4xl lg:text-5xl font-bold text-center">Improve your saas product with us</h1>
               <p className="text-center text-[20px] lg:w-[40.6rem] w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem netus lacinia convallis nisl, metus. Cras dui, amet urna feugiat.
                </p>
                <button type="button" className="border-2 rounded-xl px-16 py-4 text-2xl lg:text-3xl  text-black font-bold bg-[#DBDBDB] mt-4">Get in touch</button>
          </section>
        </>
    )
}
export default CallToAction;