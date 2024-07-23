import React from "react";
import { FaThreads } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiH3 } from "react-icons/ri";
import AnimatedTextMain from "./animted_text_main";

interface ITextButton {
  title: string;
  href: string;
}

interface IIconButton {
  icon: any;
  href: string;
}

const Footer: React.FC = () => {
  const legals: ITextButton[] = [
    {
      title: "Privacy Policy",
      href: "/privacy_policy",
    },
    {
      title: "Terms of Service",
      href: "/terms_of_service",
    },
    {
      title: "Sales and Refunds",
      href: "/sales_and_refounds",
    },
    {
      title: "Legal",
      href: "/legal",
    },
  ];
  const socialMedias: IIconButton[] = [
    { icon: <FaThreads />, href: "" },
    { icon: <MdFacebook />, href: "" },
    { icon: <FaInstagram />, href: "" },
    { icon: <FaGithub />, href: "" },
  ];

  const products: ITextButton[] = [
    {
      title: "Privacy Policy",
      href: "/privacy_policy",
    },
    {
      title: "Terms of Service",
      href: "/terms_of_service",
    },
    {
      title: "Sales and Refunds",
      href: "/sales_and_refounds",
    },
    {
      title: "Legal",
      href: "/legal",
    },
  ];

  const services: ITextButton[] = [
    {
      title: "Privacy Policy",
      href: "/privacy_policy",
    },
    {
      title: "Terms of Service",
      href: "/terms_of_service",
    },
    {
      title: "Sales and Refunds",
      href: "/sales_and_refounds",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },
  ];

  const contracts: ITextButton[] = [
    {
      title: "Privacy Policy",
      href: "/privacy_policy",
    },
    {
      title: "Terms of Service",
      href: "/terms_of_service",
    },
    {
      title: "Sales and Refunds",
      href: "/sales_and_refounds",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },

  ];


  const supports: ITextButton[] = [
    {
      title: "Privacy Policy",
      href: "/privacy_policy",
    },
    {
      title: "Terms of Service",
      href: "/terms_of_service",
    },
    {
      title: "Sales and Refunds",
      href: "/sales_and_refounds",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },

  ];

  const store: ITextButton[] = [
    {
      title: "Privacy Policy",
      href: "/privacy_policy",
    },
    {
      title: "Terms of Service",
      href: "/terms_of_service",
    },
    {
      title: "Sales and Refunds",
      href: "/sales_and_refounds",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },
    {
      title: "Legal",
      href: "/legal",
    },

  ];

  

  const socialMediaItems = (
    <center>
      <div className="flex flex-wrap justify-between items-center text-sm text-start max-w-screen-lg">
        Get connected with us on social networks
        <div className="flex gap-4">
          {socialMedias.map((item, index) => (
            <a
              key={index}
              target="_blank"
              className=" hover:text-primary text-2xl"
              href={item.href}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </center>
  );

  const centerItems = (
    <center className="my-5">
      <div className="flex flex-wrap justify-center gap-x-10 border-y border-gray-400 text-sm max-w-screen-lg">
        {/* Products Section */}
        <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Product</h3>
          {products.map((item, index) => (
            <a className="hover:text-primary text-gray-600" key={index} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>

        {/* Services Section */}
        <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Services</h3>
          {services.map((item, index) => (
            <a className="hover:text-primary  text-gray-600" key={index} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>

        {/* Contracts Section */}
        <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Contracts</h3>
          {contracts.map((item, index) => (
            <a className="hover:text-primary  text-gray-600" key={index} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>

         {/* Store Section */}
         <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Store</h3>
          {store.map((item, index) => (
            <a className="hover:text-primary  text-gray-600" key={index} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
        

         {/* Legals Section */}
         <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Legals</h3>
          {legals.map((item, index) => (
            <a className="hover:text-primary  text-gray-600" key={index} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>

         {/* Support Section */}
         <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Supports</h3>
          {supports.map((item, index) => (
            <a className="hover:text-primary  text-gray-600" key={index} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </center>
  );

  const bottomItems = (
    <center>
      <div className="flex justify-between max-md:flex-col text-[12px] max-w-screen-lg">
        <div className="mb-2 sm:mb-0 text-start  text-gray-500">
          Copyright © 2024 Alkawn Ltd. All rights reserved.
        </div>
        <div className="text-start">
          {legals.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="border-l mx-2 border-gray-400 h-2"></span>
              )}
              <a href={item.href} className="hover:text-primary">
                {item.title}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </center>
  );

  return (
    <footer className="min-h-screen flex flex-col px-4 py-4 justify-end justify-items-center">
  
      <div className="my-10  text-black">
      <AnimatedTextMain baseVelocity={-1}>Digitalizing the Country, Building New Technologies</AnimatedTextMain>
      <AnimatedTextMain baseVelocity={1}>Innovating with AI, Pioneering Software Solutions</AnimatedTextMain>
      </div>
      {socialMediaItems}
      {centerItems}
      {bottomItems}
    </footer>
  );
};

export default Footer;
