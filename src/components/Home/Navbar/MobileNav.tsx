import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
    showNav: boolean;
    closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div>
            {/* Background Overlay */}
            <div
                className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen lg:hidden`}
            ></div>

            <div
                className={`text-white fixed ${navOpen} flex flex-col justify-start items-start h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 z-[1050]`}
            >
                {/* Close Button */}
                <CgClose
                    onClick={closeNav}
                    className="absolute top-[0.7rem] right-[1.4em] sm:w-8 sm:h-8 w-6 h-6 text-white"
                />

                {/* Mapping Links */}
                {navLinks.map((link) => (
                    <Link href={link.url} key={link.id}>

                        <p className="text-white w-fit text-[20px] sm:text-[30px] ml-12 border-b-[1.5px] pb-1 border-white sm:my-6 my-4">
                            {link.label}
                        </p>

                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MobileNav;
