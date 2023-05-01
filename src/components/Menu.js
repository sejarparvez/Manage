import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav>
        <section>
          <div
            id="menu-btn"
            className={
              isNavOpen ? "open hamburger md:hidden" : "hamburger md:hidden"
            }
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div onClick={() => setIsNavOpen(false)}></div>
            <a href="#a" className=" hover:text-orange-500">
              Pricing
            </a>
            <a href="#a" className=" hover:text-orange-500">
              Product
            </a>
            <a href="#a" className=" hover:text-orange-500">
              About Us
            </a>
            <a href="#a" className=" hover:text-orange-500">
              Careers
            </a>
            <a href="#a" className=" hover:text-orange-500">
              Community
            </a>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
     
    `}</style>
    </div>
  );
}
