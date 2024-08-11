import Footer from "@/components/footer";
import AlkawnNavbar from "@/components/navbar";
import { Card } from "@nextui-org/react";
import React from "react";

const AboutUs: React.FC = () => (
  <div className="min-h-screen bg-black text-white">
    <AlkawnNavbar />
    <main className="flex flex-col items-center justify-start w-full px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="max-w-3xl text-lg text-center mb-12">
        At Alkawn Tech, we are dedicated to digitalizing the future by building
        cutting-edge technologies and AI solutions. Our mission is to innovate,
        transform, and lead the way in the tech industry. We believe in the
        power of technology to make the world a better place, and we strive to
        push the boundaries of what's possible.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
        <Card className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 id="mission" className="text-xl font-semibold mb-2 text-primary">
            Our Mission
          </h3>
          <p className="text-gray-300">
            To innovate and lead the digital transformation by building
            technology that makes a difference.
          </p>
        </Card>
        <Card className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 id="vision" className="text-xl font-semibold mb-2 text-primary">
            Our Vision
          </h3>
          <p className="text-gray-300">
            To be at the forefront of technological innovation and create a
            smarter, more connected world.
          </p>
        </Card>
        <Card className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 id="values" className="text-xl font-semibold mb-2 text-primary">
            Our Values
          </h3>
          <p className="text-gray-300">
            Innovation, Integrity, and Impact - these are the core values that
            drive our work every day.
          </p>
        </Card>
      </div>
      <section className="w-full max-w-4xl mb-12">
        <h2 id="team" className="text-3xl font-bold mb-4">
          Our Team
        </h2>
        <p className="text-lg text-center mb-8">
          Our team consists of dedicated professionals who are passionate about
          technology and innovation. We have experts in various fields including
          software development, AI, data science, and design. Together, we work
          towards creating impactful solutions that drive progress and enhance
          lives.
        </p>
        <div className="grid grid-cols-1  gap-8">
          <Card className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              S. Ali sina Hussaini
            </h3>
            <p className="text-lg text-gray-500">President, CEO & Founder</p>
            <p className="text-gray-300">
              Mr. Hussaini has over 15 years of experience in the tech industry
              and is passionate about leveraging technology to solve complex
              problems.
            </p>
          </Card>
          {/* <Card className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Jane Smith
            </h3>
            <p className="text-lg">CTO</p>
            <p className="text-gray-300">
              Jane is an expert in AI and machine learning, driving the
              technological vision and ensuring our solutions are at the cutting
              edge.
            </p>
          </Card> */}
        </div>
      </section>
      <section className="w-full max-w-4xl mb-12">
        <h2 id="history" className="text-3xl font-bold mb-4">
          Our History
        </h2>
        <p className="text-lg text-center mb-8">
          Founded in 2024, Alkawn started with a vision to revolutionize the
          tech landscape in Afghanistan. Our journey began with a small team and
          a big dream. Over the years, we have grown significantly and achieved
          numerous milestones. We are committed to continuous improvement and
          innovation.
        </p>
      </section>
      <section className="w-full max-w-4xl mb-12">
        <h2 id="achievements" className="text-3xl font-bold mb-4">
          Our Achievements
        </h2>
        <ul className="list-disc list-inside text-lg mb-8 text-gray-300">
          <li>Launched our flagship AI product in 2021</li>
          <li>Received the Tech Innovator Award in 2022</li>
          <li>Expanded our team to over 50 professionals</li>
          <li>Opened a new office in Kabul</li>
        </ul>
      </section>
    </main>

    <Footer />
  </div>
);

export default AboutUs;
