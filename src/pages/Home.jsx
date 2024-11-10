import Navbar from "../components/Navbar"
import Hero from "./Hero"

function Home() {
  return (
    <div className="bg-hero-bg bg-small ">
      {/* <div className="absolute inset-0 bg-[#BD1F17] opacity-[88%]">
      </div> */}
      <div className="text-white font-bold text-2xl bg-red-500 opacity-[88%] custom-container">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default Home
