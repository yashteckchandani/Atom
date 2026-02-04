import LandingPage from "./sections/LandingPage";
import ChatPage from "./sections/ChatPage";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once:true,
    })
  })

  return (
    <main>
      {/* Gradient bg image */}
      <img className="absolute top-0 right-0 opacity-60 -z-10"
      src="/gradient.png" alt="Gradient-img" />

      {/* bg blurr */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] 
      shadow-[0_0_900px_20px_#b721d9] -rotate-[30deg] -z-10"></div>

      <LandingPage/>
      <ChatPage />

    </main>
    
  )
}