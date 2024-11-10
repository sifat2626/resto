import heroFood from "../assets/images/hero-food.jpeg"

function Hero() {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex py-4 relative ">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="font-bebas font-bold text-[120px] tracking-[0.04em] leading-none text-white bg-gradient-to-r from-[#BD1F1700] to-[#BD1F1770] relative -mr-[15rem] z-10 py-3">
            Taste the authentic <br /> Saudi cuisine
          </h2>
          <p className="font-robo text-2xl mt-4 font-normal mr-32">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="mt-12 bg-[#FEBF00] text-black py-4 px-6 font-robo font-bold">
            Explore Menu
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 overflow-hidden relative">
          <img
            src={heroFood}
            alt=""
            className="object-cover w-full h-[650px] scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
