import heroFood from "../assets/images/hero-food.jpeg"
import vector from "../assets/images/Vector.svg"

function Hero() {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex pb-4 relative flex-col md:flex-row ">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="font-bebas font-bold xl:text-[120px] lg:text-[60px] text-5xl lg:tracking-wider xl:tracking-[0.04em] xl:-mr-[15rem] leading-none text-white bg-gradient-to-r from-[#BD1F1700] to-[#BD1F1770] relative  z-10 py-3 pr-2">
            Taste the authentic <br /> Saudi cuisine
          </h2>
          <p className="font-robo xl:text-2xl text-xl xl:mt-4 font-normal xl:mr-32">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="xl:mt-12 mt-8 mb-12 bg-[#FEBF00] text-black xl:py-4 xl:px-6 py-2 px-3 font-robo font-bold">
            Explore Menu
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative">
          <img
            src={heroFood}
            alt=""
            className="object-cover w-full xl:h-[650px]  max-h-[650px] scale-x-[-1]"
          />
          <div className="absolute p-2 flex bg-[#FEBF00] text-[#0A1425] flex-col justify-center items-center rounded-full lg:right-0 lg:bottom-0 right-4 bottom-4 lg:translate-x-1/2 lg:translate-y-1/2">
            <div className="flex flex-col lg:text-4xl md:text-xl text-base leading-5 border border-dashed border-[#BD1F17] rounded-full lg:size-32 size-16 items-center justify-center p-2">
              <p className="">Today</p>
              <p className="">offer</p>
            </div>
          </div>
          <div className="absolute hidden lg:block right-0 top-0 translate-x-1/2 -translate-y-1/2 ">
            <img src={vector} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
