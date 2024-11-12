import React, { useRef } from "react"
import PopularSlider from "../components/PopularSlider"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

function Popular() {
  // Create refs for custom navigation buttons
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="pt-[120px] custom-container bg-[#FBF7f2]">
      <div className="">
        <div className="flex items-center gap-1 ">
          <div className="size-4 bg-[#BD1F17]"></div>
          <div className="font-bold text-xl text-[#BD1F17]">
            Crispy, Every Bite Taste
          </div>
        </div>

        <div>
          <h3 className="text-[#181818] font-bebas text-[62px] font-bold">
            POPULAR FOOD ITEMS
          </h3>
        </div>

        <div className="relative">
          {/* Pass the button refs to PopularSlider */}
          <PopularSlider prevRef={prevRef} nextRef={nextRef} />

          {/* Custom navigation buttons */}
          <button
            ref={prevRef}
            className="absolute right-16 -top-1/4 -translate-y-1/2 bg-white text-[#0A1425] hover:text-[#BD1F17] p-3 rounded-full z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            ref={nextRef}
            className="absolute right-4 -top-1/4 -translate-y-1/2 bg-white text-[#0A1425] hover:text-[#BD1F17] p-3 rounded-full z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popular
