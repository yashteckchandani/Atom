import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main
      className="flex lg:mt-20 flex-col lg:flex-row
      item-center justify-between min-h-[calc(90vh-6rem)]"
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%]
        md:mt-[60%] lg:mt-0"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-semibold tracking-wider my-8"
        >
          FNZ Atom
          <br />
          A One stop Solution for
          <br />
          All your needs
        </h1>

        <p
          className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem]
          lg:max-w-[30rem]"
        >
          An all-in-one utility for all
          your work... Your best buddy
          just a click away.
        </p>

        <div className="mt-12">
          <button
            onClick={() => navigate("/chat")}
            className="border border-[#2a2a2a]
            py-2 sm:py-3 px-8 sm:px-10 rounded-full
            sm:text-lg text-sm font-semibold
            tracking-wider transition-all duration-300
            hover:bg-[#1a1a1a] bg-gray-300 text-black
            hover:text-white"
          >
            Start Chatting
          </button>
        </div>
      </div>

      {/* 3D model */}
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="absolute lg:top-0 top-[-20%] bottom-0
        lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/hqize7zktjSpq9Xf/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
