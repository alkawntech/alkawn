'use client'
import React, { useEffect, useState } from "react";
import { AlkawnLogo } from "./logo";
import { MenuItem } from "@nextui-org/react";
import {  Slant } from 'hamburger-react'

interface MenuItem{
    id:string
    title: string
    description: string,
    href: string,
}

export default function AlkawnNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const products : MenuItem={
    id:"nav_product",
    title: "Products",
    description:"Hardware products",
    href:"/products"
  }

  const services : MenuItem={
    id:"nav_services",
    title: "Services",
    description:"Information about software services offered",
    href:"/services"
  }

  const solutions : MenuItem={
    id:"nav_solutions",
    title: "Solutions",
    description:"Specific solutions tailored for different industries or problems",
    href:"/solutions"
  }

  const support : MenuItem={
    id:"nav_support",
    title: "Support",
    description:"Customer support and resources",
    href:"/support"
  }

  const blog : MenuItem={
    id:"nav_blog",
    title: "Blog",
    description:"Articles and updates about the company, industry news, and tech trends",
    href:"/blog"
  }

  const aboutUs : MenuItem={
    id:"nav_about_us",
    title: "About Us",
    description:"Information about the company, mission, vision, and team",
    href:"/about_us"
  }

  const contact : MenuItem={
    id:"nav_contact",
    title: "Contact",
    description:"Contact details and forms for inquiries",
    href:"/contact"
  }


  const items :MenuItem[]= [
    products,
    services,
    solutions,
    support,
    blog,
    aboutUs,
    contact
  ]

  return (
    <div className={`${isTop && !isMenuOpen?'bg-transparent':'bg-black'} ${!isMenuOpen?'bg-opacity-60':'bg-opacity-100'} fixed text-white w-screen  top-0 z-50 backdrop-blur-sm`}>
        <nav className="flex justify-center max-sm:justify-between items-center gap-5 p-2 bg-transparent">
        <AlkawnLogo/>
        {items.map((item,index)=>(            
            <a key={index} className="text-sm hover:text-primary max-sm:hidden" href={item.href}>{item.title}</a>
        ))}
        <div className="sm:hidden">
        <Slant size={20} toggled={isMenuOpen} toggle={setIsMenuOpen}/>
        </div>
    </nav>
    <div
        className={`${
          isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } transition-all  duration-500 ease-in-out backdrop-blur-md bg-black absolute text-white p-8  w-full h-screen`}
      >
    {items.map((item,index)=>(            
           <div key={index}>
             <a  className="font-bold text-[20px] hover:text-primary" href={item.href}>{item.title}</a>
           </div>
        ))}
    </div>
    </div>
  )
}
