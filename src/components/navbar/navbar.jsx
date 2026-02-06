import NavbarLogoSection from "./navLogoSection";
import NavbarLinksSection from "./navLinksSection";
import NavbarLinksSection2 from "./navLinksSection2";

const Navbar = () => {

  return (
    // navbar parent
    <nav className="max-w-11/12 md:max-w-10/12 mx-auto border flex justify-between items-center">
        {/* logo section */}
        <section>
            <NavbarLogoSection/>
        </section>

        {/* nav links section */}
        <section className="hidden 2xl:block">
            <NavbarLinksSection/>
        </section>

        {/* nav menu ECT section */}
        <section>
            <NavbarLinksSection2/>
        </section>
    </nav>
  );
};

export default Navbar;