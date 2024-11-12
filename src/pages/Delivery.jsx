import burger from "../assets/images/burger.jpeg"
import grayCircle from "../assets/images/grayCircle.svg"
import yellowLine from "../assets/images/yellowLine.svg"
import yellowCircle from "../assets/images/yellowCircle.svg"

function Delivery() {
  return (
    <div className="flex flex-col lg:flex-row bg-white text-[#333] py-32 custom-container">
      <div className="w-full relative">
        <img src={burger} alt="" />
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
      <div className="w-full"></div>
    </div>
  )
}

export default Delivery
