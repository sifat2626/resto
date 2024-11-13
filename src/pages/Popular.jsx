import React, { useRef } from "react"
import PopularSlider from "../components/PopularSlider"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

function Popular() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="lg:py-[120px] py-8 md:py-16 custom-container bg-[#FBF7f2]">
      <div className="">
        <div className="flex items-center gap-1">
          <div className="size-2.5 bg-[#BD1F17]"></div>
          <div className="font-bold text-xl text-[#BD1F17]">
            Crispy, Every Bite Taste
          </div>
        </div>

        <h3 className="text-[#181818] font-bebas md:text-[62px] text-[40px] font-bold">
          POPULAR FOOD ITEMS
        </h3>

        {/* Desktop navigation buttons */}
        {/* <div className="custom-container hidden lg:flex absolute bg-red-500 right-0 -mt-16 gap-4 justify-end">
          <button
            ref={prevRef}
            className="bg-white p-3 rounded-full hover:text-[#BD1F17]"
          >
            <FaAngleLeft />
          </button>
          <button
            ref={nextRef}
            className="bg-white p-3 rounded-full hover:text-[#BD1F17]"
          >
            <FaAngleRight />
          </button>
        </div> */}

        <div className="relative xl:mt-16 md:mt-12 mt-4">
          <PopularSlider prevRef={prevRef} nextRef={nextRef} />

          {/* Mobile navigation buttons */}
          <div className="flex lg:absolute lg:right-0 lg:-top-32 gap-4 justify-center mt-4">
            <button
              ref={prevRef}
              className="bg-white p-3 rounded-full hover:text-[#BD1F17]"
            >
              <FaAngleLeft />
            </button>
            <button
              ref={nextRef}
              className="bg-white p-3 rounded-full hover:text-[#BD1F17]"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular
