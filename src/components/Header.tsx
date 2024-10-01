import Icon from "@/assets/icons";
import React from "react";

const Header = () => {
  return (
    <header className="fixed z-50 top-0 left-0 w-full p-4">
      <div className="w-full max-w-7xl p-6 bg-white/5 backdrop-blur-lg rounded-full border border-white/5 shadow-md mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl uppercase">Gratia</h3>
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li>
                  <a
                    className="text-white/60 transition hover:text-white/75"
                    href="#"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-white/60 transition hover:text-white/75"
                    href="#"
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    className="text-white/60 transition hover:text-white/75"
                    href="#"
                  >
                    History
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {/* <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div> */}

              <div className="block md:hidden">
                <button className="text-white transition hover:text-white/80">
                  <Icon name="FaBars" className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
