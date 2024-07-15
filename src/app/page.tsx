import AlkawnNavbar from "@/components/navbar";

const Header: React.FC = () => (
  <header className="w-full bg-[url('/images/univers.jpg')] bg-cover bg-center z-0">
    <AlkawnNavbar />
    <div className="flex flex-wrap justify-center items-center">
      <div className="flex-1 px-20 max-sm:px-5">
        <h1 className="text-[50px] pt-16 font-extrabold text-white leading-tight">
          DESIGN <br /> DEVELOPMENT <br /> MAINTENANCE
        </h1>
        <h2 className="text-white pb-10">
          At Alkawn Tech, we merge cutting-edge software solutions with
          top-tier hardware to drive the digital transformation of your
          business. Discover seamless integration, unparalleled performance,
          and technology that propels you into the future. Let's build and
          elevate your tech ecosystem together.
        </h2>
        <div className="flex gap-3 max-sm:justify-center">
          <a
            href="mailto:support@alkawn.tech?subject=Contact%20Us&body=Your%20message%20here"
            className="text-center p-3 text-white bg-primary rounded-lg border border-primary"
          >
            Contact Us
          </a>
          <a
            href="/blog"
            className="text-center p-3 text-white rounded-lg border border-primary"
          >
            What's New?
          </a>
        </div>
      </div>
      <div className="p-5 bg-black bg-opacity-25 rounded-md m-32 max-sm:m-5 backdrop-blur-lg">
        <img
          className="h-80 w-80"
          src="icons/logo_white.png"
          alt="alkawn logo"
        />
      </div>
    </div>
  </header>
);

const MainContent: React.FC = () => (
  <center className="relative z-20 h-screen w-screen p-10 font-bold">
    <h1>Al-Kawn</h1>
  </center>
);

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <MainContent />
    </main>
  );
};

export default Home;
