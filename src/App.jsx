import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRoutes from "./AppRoutes";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <Router>
              {/* Gradient bg image */}
        <img
          className="absolute top-0 right-0 opacity-60 -z-10"
          src="/gradient.png"
          alt="Gradient-img"
        />

        {/* bg blur */}
        <div
          className="h-0 w-[40rem] absolute top-[20%] right-[-5%]
          shadow-[0_0_900px_20px_#b721d9] -rotate-[30deg] -z-10"
        ></div>
      <AppRoutes />
    </Router>
  );
}
