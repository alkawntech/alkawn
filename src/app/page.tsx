"use client";

import AnimatedTextMain from "@/components/animted_text_main";
import Footer from "@/components/footer";
import AlkawnNavbar from "@/components/navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

interface CardItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, description, imageSrc }) => (
  <Card className="col-span-12 sm:col-span-4 h-[300px] relative overflow-hidden">
    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
      <h4 className="text-white font-medium text-large">{description}</h4>
    </CardHeader>
    <Image
      removeWrapper
      alt="Card background"
      className="z-0 w-full h-full object-cover"
      src={imageSrc}
    />
  </Card>
);

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <header className="w-full min-h-screen flex justify-center  bg-[url('/images/univers.jpg')] bg-cover bg-center z-0 overflow-x-hidden">
      <AlkawnNavbar />
      <div className="flex flex-wrap justify-center items-center relative overflow-hidden">
        <motion.div
          className="flex-1 px-4 sm:px-8 lg:px-20 py-16"
          style={{ y }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            DESIGN <br /> DEVELOPMENT <br /> MAINTENANCE
          </h1>
          <h2 className="text-white mt-4 mb-8">
            At Alkawn Tech, we merge cutting-edge software solutions with top-tier hardware to drive the digital transformation of your business. Discover seamless integration, unparalleled performance, and technology that propels you into the future. Let's build and elevate your tech ecosystem together.
          </h2>
          <div className="flex gap-3 max-md:justify-center justify-start">
            <a
              href="mailto:support@alkawn.tech?subject=Contact%20Us&body=Your%20message%20here"
              className="text-center p-3 hover:bg-black text-white bg-primary rounded-lg border border-primary"
            >
              Contact Us
            </a>
            <a
              href="/blog"
              className="text-center p-3 hover:bg-black text-white rounded-lg border border-primary"
            >
              What's New?
            </a>
          </div>
        </motion.div>
        <motion.div
          className="p-5 bg-black bg-opacity-25 rounded-md m-4 lg:m-16 backdrop-blur-lg"
          style={{ y: useTransform(scrollY, [0, 500], [0, -300]) }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          <img
            className="h-80 w-80"
            src="icons/logo_white.png"
            alt="alkawn logo"
          />
        </motion.div>
      </div>
    </header>
  );
};

const MainContent: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col items-center overflow-x-hidden">
      <div className="py-10 text-center">
        <AnimatedTextMain baseVelocity={-1}>
          Digitalizing the Country, Building New Technologies
        </AnimatedTextMain>
        <AnimatedTextMain baseVelocity={1}>
          Innovating with AI, Pioneering Software Solutions
        </AnimatedTextMain>
      </div>

      <div className="py-10 w-full px-4 lg:px-8">
        <div className="max-w-[1000px] mx-auto gap-5 grid grid-cols-12 ">
          <CardItem
            title="Innovative Software"
            description="Custom solutions to transform your business"
            imageSrc="https://nextui.org/images/card-example-4.jpeg"
          />
          <CardItem
            title="Comprehensive Services"
            description="From development to deployment and support"
            imageSrc="https://nextui.org/images/card-example-3.jpeg"
          />
          <CardItem
            title="High-Quality Hardware"
            description="Durable and efficient tech products"
            imageSrc="https://nextui.org/images/card-example-2.jpeg"
          />
        </div>
      </div>
      

      <section className="py-20 w-full">
        <div className="text-center max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-white/80">
            At Alkawn Tech, we are a team of dedicated professionals with a passion for innovation. Our mission is to drive technological advancement and provide top-notch solutions that meet the evolving needs of our clients. With expertise in both software development and hardware solutions, we deliver integrated systems that enhance efficiency, performance, and growth.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white w-full">
        <div className="text-center max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-black">
            We offer a comprehensive range of solutions designed to address the diverse needs of businesses today. From cutting-edge software applications that streamline operations to high-quality hardware that ensures reliable performance, our solutions are tailored to help you succeed. Explore how we can support your goals with our innovative products and expert services.
          </p>
        </div>
      </section>
    </main>
  );
};

const Home: React.FC = () => (
  <main className="overflow-x-hidden">
    <Header />
    <MainContent />
    <Footer />
  </main>
);

export default Home;
