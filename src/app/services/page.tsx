"use client";
import Footer from "@/components/footer";
import AlkawnNavbar from "@/components/navbar";
import { useRouter } from "next/navigation";

const services = [
  {
    id: "web_app",
    title: "Web Development",
    description:
      "Our team specializes in creating responsive and high-performing websites that are tailored to meet your business objectives. We ensure a seamless user experience with intuitive navigation, fast loading times, and optimized content for search engines. From e-commerce platforms to corporate websites, we provide end-to-end solutions to establish a strong online presence.",
    image: "/images/web_app.jpg",
    isDark: true,
  },

  {
    id: "custom_software",
    title: "Custom Software Development",
    description:
      "Our custom software development services are designed to address your unique business challenges. We develop software solutions that are tailored to your specific needs, whether it's automating business processes, managing data, or enhancing customer interactions. Our approach ensures that the software integrates seamlessly with your existing systems and delivers measurable results.",
    image: "/images/custom_software.jpg",
    isDark: true,
  },
  {
    id: "applications",

    title: "Mobile App Development",
    description:
      "We craft mobile applications that deliver exceptional user experiences across all devices. Whether you need a native app for iOS or Android, or a cross-platform solution, our developers use the latest technologies to build apps that are both robust and scalable. From initial concept to deployment, we guide you through every step of the development process to bring your vision to life.",
    image: "/images/applications2.jpg",
    isDark: false,
  },
  {
    id: "ui_ux_design",

    title: "UI/UX Design",
    description:
      "Our UI/UX design services focus on creating user interfaces that are both visually appealing and easy to use. We conduct thorough research to understand your users' needs and design interfaces that enhance usability and engagement. By combining aesthetics with functionality, we create designs that not only look great but also improve the overall user experience.",
    image: "/images/ui_ux_design.jpg",
    isDark: false,
  },
  {
    id: "service",
    title: "DevOps & IT Infrastructure",
    description:
      "We help you streamline your development processes and optimize your IT infrastructure with our DevOps and IT services. Our experts implement best practices in continuous integration, continuous delivery, and automated testing to accelerate your development cycles. We also provide infrastructure management services to ensure your systems are secure, scalable, and reliable.",
    image: "/images/service.jpg",
    isDark: true,
  },
  {
    id: "api",
    title: "API Development & Integration",
    description:
      "Our API development and integration services enable seamless communication between your systems and third-party applications. We design and develop APIs that are secure, scalable, and easy to maintain. Whether you're looking to integrate with external services or build custom APIs, our solutions ensure data flows smoothly across your digital ecosystem.",
    image: "/images/api.jpg",
    isDark: true,
  },
  {
    id: "support",
    title: "Maintenance & Support",
    description:
      "We provide ongoing maintenance and support to ensure your software remains up-to-date and performs optimally. Our services include bug fixing, performance monitoring, security updates, and feature enhancements. We work proactively to prevent issues before they arise and are always available to address any concerns you may have, ensuring your software continues to meet your business needs.",
    image: "/images/support.jpg",
    isDark: false,
  },
];

const Services: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <header className="bg-black w-full h-12">
        <AlkawnNavbar />
      </header>
      <div className="w-full min-h-72 flex justify-center bg-[url('/images/service2.jpg')] bg-cover bg-center z-0 overflow-x-hidden"></div>
      <center className=" bg-black py-5  px-5">
        <h1 className="text-primary text-2xl font-extrabold">Our Services</h1>
        <p className="max-w-screen-xl text-white text-lg">
          Explore our comprehensive range of services designed to empower your
          business with the latest technology solutions. Whether you're looking
          to establish a strong online presence, streamline your operations, or
          innovate with cutting-edge applications, our team of experts is here
          to support you at every step. We specialize in transforming ideas into
          reality by leveraging the latest industry trends, ensuring that your
          business remains competitive in an ever-evolving digital landscape.
          From web and mobile development to IT infrastructure and beyond, our
          tailored solutions are crafted to meet your unique needs, helping you
          achieve your goals with confidence and efficiency.
        </p>
      </center>

      <center>
        <main className="flex flex-col items-start ">
          {services.map((service, index) => (
            <div className={` ${service.isDark ? "bg-black" : ""} w-full`}>
              <div
                id={service.id}
                key={index}
                className={`flex max-w-screen-xl flex-col md:flex-row
                ${
                  index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse"
                } items-center`}
              >
                <div className="md:w-1/2  p-4">
                  <h3 className="text-primary font-extrabold text-3xl">
                    {service.title}
                  </h3>
                  <p
                    className={`${
                      service.isDark ? "text-gray-200" : "text-gray-950"
                    } mt-4 text-lg`}
                  >
                    {service.description}
                  </p>
                  <button
                    onClick={() => router.push("/contact_us")}
                    className="mt-6 bg-primary text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Contact Us
                  </button>
                </div>
                <div className="md:w-1/2 p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </main>
      </center>

      <Footer />
    </div>
  );
};

export default Services;
