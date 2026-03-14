import Link from "next/link";
import Links from "./links";
import { NavDrawer } from "./navDrawer";

export default function NavBar() {
  return (
    <>
      <div className="fixed layout z-50">
        <div className="navbar screen font-black text-2xl bg-primary text-white p-2.5 rounded-lg max-w-7xl xl:mx-auto ">
          <div className="links flex flex-row  justify-between items-center">
            <div className="navLinks">
              <Links LinksName={["Home", "About", "Service"]} />
            </div>
            <Link href={"/"} className="text-3xl">
              Abo <span className="text-second">Rabie</span>
            </Link>
            <div className="navLinks">
              <Links LinksName={["Resume", "Project", "Contact"]} />
            </div>
            <NavDrawer />
          </div>
        </div>
      </div>
    </>
  );
}
