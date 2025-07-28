import { useState } from "react";
import Link from "./Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  const [open, setOpen] = useState(true);

  return (
    <nav className="max-w-10/12 mx-auto mt-10 flex justify-between">
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl cursor-pointer"
      >
        {open === true ? <HiOutlineMenuAlt1 /> : <RxCross2 />}
      </div>
      <ul
        className={`md:flex 
      ${open ? "hidden" : ""}`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      <div className="text-3xl cursor-pointer">
        <CgProfile />
      </div>
    </nav>
  );
};

export default Navbar;
