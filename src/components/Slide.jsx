function Slide({ name, image, details }) {
  // const { name, image, details } = item
  return (
    <div className=" bg-white flex flex-col items-center justify-center xl:p-8 p-6">
      <div className="">
        <img src={image} alt="" className="h-48 lg:h-32" />
      </div>
      <div className="w-16 h-1 bg-[#BD1F17] my-6"></div>
      <p className="font-bebas font-bold text-2xl text-[#0A1425]">{name}</p>
      <p className="text-[#0A1425] xl:text-base text-[14px] mt-1">{details}</p>
    </div>
  )
}

export default Slide
