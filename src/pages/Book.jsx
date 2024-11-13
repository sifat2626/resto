import calender from "../assets/images/calender.png"
import sort from "../assets/images/sort.svg"

function Book() {
  return (
    <div className="bg-book-bg lg:bg-cover bg-center lg:py-[120px] py-8 text-white">
      <div className="custom-container">
        <div className="flex items-center gap-2">
          <div className="bg-[#BD1F17] size-2.5"></div>
          <h3 className="text-[#BD1F17]">Book Now</h3>
        </div>
        <div className="">
          <h2 className="text-[62px]  font-bold font-bebas">Book Your Table</h2>
          <p className="text-[#F7F8F9] lg:w-1/2 mb-[40px]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>

        <form action="" className="lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full bg-transparent p-3 border border-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent p-3 border border-white"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Reservation Date"
                className="w-full bg-transparent p-3 border border-white"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <img src={calender} alt="" />
              </div>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Total People"
                className="w-full bg-transparent p-3 border border-white"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <img src={sort} alt="" />
              </div>
            </div>
          </div>

          <div className="">
            <textarea
              name="Message"
              id=""
              placeholder="Message"
              className="bg-transparent p-3 border border-white w-full h-32"
            ></textarea>
          </div>

          <div className="">
            <button className="bg-[#FEBF00] text-[#0A1425] lg:text-lg lg:px-6 lg:py-4 px-3 py-2 font-bold">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Book
