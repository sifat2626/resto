import burger from "../assets/images/burger.jpeg"
import grayCircle from "../assets/images/grayCircle.svg"
import yellowLine from "../assets/images/yellowLine.svg"
import yellowCircle from "../assets/images/yellowCircle.svg"
import call from "../assets/images/call-alt.svg"
import pack from "../assets/images/package.png"
import medal from "../assets/images/medal.png"
import bag from "../assets/images/bag.png"
import delivery from "../assets/images/delivery.png"

function Delivery() {
  return (
    <div className="relative bg-white py-8 md:py-16 lg:py-24 xl:py-32">
      <div className="absolute right-0 top-2/3 -translate-y-1/2 hidden lg:block">
        <img src={delivery} alt="" />
      </div>
      <div className="custom-container">
        <div className="flex flex-col gap-12 lg:flex-row text-[#333]  ">
          <div className="w-full relative">
            <img
              src={burger}
              alt=""
              className="lg:h-[420px] xl:h-[500px] object-cover"
            />
            <div className="bg-white absolute md:top-8 top-4 left-3 md:left-6 rounded-[20px] xl:p-6  p-4">
              <div className="flex justify-center items-center gap-2">
                <div className="xl:size-24 size-12 md:size-20 relative '">
                  <img src={grayCircle} alt="" />
                  <div className="absolute top-0">
                    <img src={yellowLine} alt="" />
                  </div>
                  <div className="absolute xl:top-2 md:top-1 top-0 md:left-2">
                    <img src={yellowCircle} alt="" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p className="text-[#181818] font-bold xl:text-2xl lg:text-xl">
                      50+
                    </p>
                  </div>
                </div>
                <div className="text-[#181818] font-semibold">
                  <p>Market</p>
                  <p>Experiences</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-8 border-0 border-b-2 border-b-[#B52B1D] items-center font-semibold text-[#333]">
              <p className="bg-[#B52B1D] py-1.5 px-4 text-white">About</p>
              <p>Experience</p>
              <p>Contact</p>
            </div>

            <div className="mt-8 text-[#181818] font-bebas xl:text-[62px] lg:text-5xl text-[40px] lg:leading-[62px] leading-[48px] mr-8">
              <p>
                Exceptional culinary <br /> experience and delicious food
              </p>
            </div>

            <div className="text-[#333] mt-[18px] mr-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
            </div>

            <div className="mt-8 flex gap-4 lg:gap-8 items-center">
              <button className="text-[#0A1425] bg-[#FEBF00] lg:px-6 px-4 py-2 lg:py-4 text-base font-bold md:text-[18px]">
                About More
              </button>
              <div className="flex items-center gap-2">
                <img src={call} alt="" />
                <p className="text-[#0A1425] text-[14px] font-bold">
                  +88 3426 739 485
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="-ml-4 mt-12 flex flex-col lg:flex-row lg:justify-between items-start text-[#0A1425]">
          <div className="flex items-center gap-4">
            <div className="">
              <img src={pack} alt="" className="" />
            </div>
            <div className="">
              <p className="uppercase font-bebas text-3xl font-bold">
                fast delivery
              </p>
              <p className="text-xl">Within 30 minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className=" ">
              <img src={medal} alt="" className="" />
            </div>
            <div className="">
              <p className="uppercase font-bebas text-3xl font-bold">
                absolute dining
              </p>
              <p className="text-xl">Best buffet restaurant</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className=" ">
              <img src={bag} alt="" className="" />
            </div>
            <div className="">
              <p className="uppercase font-bebas text-3xl font-bold">
                pickup delivery
              </p>
              <p className="text-xl">Grab your food order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
