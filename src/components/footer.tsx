import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";

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
  const services: ITextButton[] = [
    {
      title: "Web Development",
      href: "/web_development",
    },
    {
      title: "Mobile App Development",
      href: "/mobile_app_development",
    },
    {
      title: "Custom Software Development",
      href: "/custom_software_development",
    },
    {
      title: "UI/UX Design",
      href: "/ui_ux_design",
    },
    {
      title: "DevOps & IT Infrastructure",
      href: "/devops_it_infrastructure",
    },

    {
      title: "API Development & Integration",
      href: "/api_development_integration",
    },
    {
      title: "Maintenance & Support",
      href: "/maintenance_support",
    },
  ];

  const aboutUs: ITextButton[] = [
    {
      title: "Our Mission",
      href: "/about_us/#mission",
    },
    {
      title: "Our Vision",
      href: "/about_us/#vision",
    },
    {
      title: "Our Values",
      href: "/about_us/#values",
    },
    {
      title: "Our Team",
      href: "/about_us/#team",
    },
    {
      title: "Our History",
      href: "/about_us/#history",
    },
    {
      title: "Achievements",
      href: "/about_us/#achievements",
    },
  ];

  const contracts: ITextButton[] = [
    {
      title: "Comming Soon...",
      href: "#",
    },
  ];

  const supports: ITextButton[] = [
    {
      title: "Customer Support",
      href: "/support",
    },
    {
      title: "Technical Support",
      href: "/support",
    },
    {
      title: "Billing Support",
      href: "/support",
    },
    {
      title: "Product Support",
      href: "/support",
    },
    {
      title: "Account Support",
      href: "/support",
    },
    {
      title: "Feedback",
      href: "/support",
    },
    {
      title: "Help Center",
      href: "/support",
    },
  ];

  const store: ITextButton[] = [
    {
      title: "Comming Soon...",
      href: "#",
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
        {/* About Us Section */}
        <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">About Us</h3>
          {aboutUs.map((item, index) => (
            <a
              className="hover:text-primary  text-gray-600"
              key={index}
              href={item.href}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Services Section */}
        <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Services</h3>
          {services.map((item, index) => (
            <a
              className="hover:text-primary  text-gray-600"
              key={index}
              href={item.href}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Contracts Section */}
        <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Contracts</h3>
          {contracts.map((item, index) => (
            <a
              className="hover:text-primary  text-gray-600"
              key={index}
              href={item.href}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Store Section */}
        <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Store</h3>
          {store.map((item, index) => (
            <a
              className="hover:text-primary  text-gray-600"
              key={index}
              href={item.href}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Legals Section */}
        <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Legals</h3>
          {legals.map((item, index) => (
            <a
              className="hover:text-primary  text-gray-600"
              key={index}
              href={item.href}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Support Section */}
        <div className="flex flex-col py-4 items-start">
          <h3 className="font-semibold">Supports</h3>
          {supports.map((item, index) => (
            <a
              className="hover:text-primary  text-gray-600"
              key={index}
              href={item.href}
            >
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
    <footer className="flex flex-col px-4 py-4 justify-end justify-items-center">
      {socialMediaItems}
      {centerItems}
      {bottomItems}
    </footer>
  );
};

export default Footer;
