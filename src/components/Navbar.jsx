import logo from "../assets/images/logo.svg"
import menu from "../assets/images/menu.png"

const navLinks = [
  {
    label: "Home",
    path: "#",
  },
  {
    label: "About",
    path: "#",
  },
  {
    label: "Portfolio",
    path: "#",
  },
  {
    label: "Clients",
    path: "#",
  },
  {
    label: "Blog",
    path: "#",
  },
  {
    label: "Contact",
    path: "#",
  },
]

function Navbar() {
  return (
    <div className="py-8">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" />
          <h3 className="font-pop">Restaurant</h3>
        </div>
        <div className="">
          <ul className="hidden lg:flex font-rale font-medium text-[15px] gap-[40px]">
            {navLinks.map((link) => (
              <li className="" key={link.label}>
                {link.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <button className="hidden lg:block bg-[#FEBF00] text-[#0A1425] text-base font-bold px-3 py-2 xl:px-6 xl:py-4">
            Book a table
          </button>
          <div className="lg:hidden">
            <img src={menu} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
