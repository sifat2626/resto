import Navbar from "../components/Navbar"
import Hero from "./Hero"

function Home() {
  return (
    <div className="relative bg-hero-bg bg-small">
      <div className="absolute inset-0 bg-[#BD1F17] opacity-[88%]">
        {/* overlay */}
      </div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
