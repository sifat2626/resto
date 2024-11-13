import quotation from "../assets/images/quotation.png"
import video from "../assets/images/video.png"
import tomato from "../assets/images/tomato.png"
import stem from "../assets/images/stem.png"
import person from "../assets/images/person.svg"
import design from "../assets/images/design.svg"

function Customer() {
  return (
    <div className="relative bg-white py-8 md:py-16 lg:py-24 xl:py-32">
      <div className="hidden lg:block absolute -left-6 top-1/4 scale-75">
        <img src={tomato} alt="" />
      </div>
      <div className="hidden lg:block absolute bottom-0 -right-32 scale-50 ">
        <img src={stem} alt="" />
      </div>
      <div className="custom-container">
        <div className=" flex items-center gap-1">
          <div className="size-2.5 bg-[#BD1F17]"></div>
          <h4 className="text-[#BD1F17] text-xl font-bold">
            Crispy, Every Bite Taste
          </h4>
        </div>
        <h2 className="font-bebas text-[#181818] lg:text-[62px] text-[40px] mt-4 lg:mb-[60px] mb-6">
          What Some of my Customers Say
        </h2>

        <div className="grid lg:grid-cols-12">
          <div className="col-span-5 bg-[#FEBF00] text-[#0A1425] overflow-hidden">
            <div className="relative p-12">
              <div className="absolute top-8 left-8">
                <img src={quotation} alt="" />
              </div>
              <div className="absolute left-0 -bottom-4 lg:bottom-16">
                <img src={design} alt="" />
              </div>
              <div className="">
                <p>
                  You can't go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would defiantly recommend it.
                </p>
              </div>
              <div className="lg:mt-40 -ml-4 lg:ml-0 mt-10 flex justify-between">
                <div className="">
                  <h6 className="font-bebas text-lg font-bold">
                    Khalid Al Dawsry
                  </h6>
                  <p className="text-[14px]">Jeddah, Saudi</p>
                </div>
                <div className="">
                  <img src={person} alt="" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-1 mt-[18px] bg-[#0A1425] h-0.5"></div>
                <div className="mt-4 w-12 bg-red-600 h-1"></div>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <img src={video} alt="" className="h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer
