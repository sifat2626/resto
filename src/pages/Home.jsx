import Navbar from "../components/Navbar"
import Hero from "./Hero"

function Home() {
  return (
    <div className="relative h-screen">
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-hero-bg bg-small bg-center -z-10"></div>

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-[#BD1F17] opacity-[88%] "></div>

      {/* Content Layer */}
      <div className="relative z-10 text-white font-bold text-2xl custom-container flex flex-col h-full">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default Home
