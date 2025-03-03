import { useRef, useState } from "react";
import Link from "next/link";

import { imageLoader } from "../utils/imgLoader";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

// props:
// - name of link, must be constant
// - selected or to be selected animation
// - change state in parent of Navbar component -> Home component

// TODO:
// mobile menu comes as an animation with framer motion
// may be reverse link to anchor link if not smooth
// refactor img to Image

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const navbarVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};
const LinkMobileTemplate = ({ urlLink, page, setIsMenuToggled }) => {
    const pathName = usePathname();

    return (
        <Link
            href={urlLink}
            className={`${
                pathName === urlLink ? "text-yellow-500" : ""
            }  hover:scale-125 transition duration-300`}
            onClick={() => {
                setIsMenuToggled(false);
            }}
        >
            {page}
        </Link>
    );
};

const LinkTemplate = ({ urlLink, page }) => {
    const pathName = usePathname();
    return (
        <Link
            href={urlLink}
            className={`${
                pathName == urlLink ? "text-yellow-500" : ""
            }  hover:scale-125 transition duration-300`}
        >
            {page}
        </Link>
    );
};

const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isMobileMenuVisible = isMenuToggled ? "block" : "hidden";
    const pathName = usePathname();

    const modalRef = useRef(null);

    const closeModal = (e) => {
        e.stopPropagation();
        if (e.target == modalRef.current) {
            setIsMenuToggled(!isMenuToggled);
        }
    };

    return (
        // animation works only on Home page:
        // the Navbar is fixed, meaning when we start the page, it is hidden and scroll makes it appear
        // but also if we refresh down the Home page, due to Navbar also being fixed to viewport, it will appear since being fixed makes it also constanlty inView
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={{
                hidden: pathName === "/" ? { opacity: 1 } : {},
                visible: pathName === "/" ? { opacity: 0 } : {},
            }}
        >
            <nav
                className={`bg-ixora-dark z-40 w-full fixed top-0 py-[2%] sm:py-[1%] border-black border-b-2 shadow-xl`}
            >
                <div className="flex items-center justify-between mx-auto w-5/6">
                    <Link
                        className="saturate-200 duration-200 flex justify-center items-center h-[30%] w-[30%] sm:h-[15%] sm:w-[15%]"
                        href={"/"}
                    >
                        <Image
                            loader={imageLoader}
                            src="/ixora.webp"
                            alt="Ixora Logo"
                            width={979}
                            height={350}
                        />
                    </Link>
                    {/* DESKTOP NAV */}
                    <div
                        className={`text-xl 2xl:text-2xl hidden xl:flex justify-between gap-10 2xl:gap-16 text-white font-bold`}
                    >
                        <LinkTemplate urlLink="/" page="Начало" />
                        <LinkTemplate
                            urlLink="/description/"
                            page="За сградата"
                        />
                        <LinkTemplate
                            urlLink="/apartments/"
                            page="Апартаменти"
                        />
                        <LinkTemplate urlLink="/investor/" page="Инвеститор" />
                        <LinkTemplate urlLink="/gallery/" page="Галерия" />
                        <LinkTemplate urlLink="/contacts/" page="Контакти" />
                    </div>
                    <button
                        className="block xl:hidden rounded-full bg-red p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img alt="menu-icon" src="/assets/menu-icon.svg" />
                    </button>

                    {/* MOBILE MENU POPUP */}
                    <div
                        className={`${isMobileMenuVisible} fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-80`}
                        onClick={closeModal}
                        ref={modalRef}
                    >
                        <motion.div
                            className={`fixed right-0 bottom-0 h-full bg-ixora-deep-blue w-[300px]`}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            {/* CLOSE ICON */}
                            <div className="flex justify-end p-12">
                                <button
                                    onClick={() =>
                                        setIsMenuToggled(!isMenuToggled)
                                    }
                                >
                                    <img
                                        alt="close-icon"
                                        src="/assets/close-icon.svg"
                                    />
                                </button>
                            </div>

                            {/* MENU ITEMS */}
                            <motion.div
                                className="flex flex-col gap-10 ml-[33%] text-2xl text-white"
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <motion.div variants={navbarVariant}>
                                    <LinkMobileTemplate
                                        urlLink="/"
                                        page="Начало"
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                                <motion.div variants={navbarVariant}>
                                    <LinkMobileTemplate
                                        urlLink="/description"
                                        page="За сградата"
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                                <motion.div variants={navbarVariant}>
                                    <LinkMobileTemplate
                                        urlLink="/apartments"
                                        page="Апартаменти"
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                                <motion.div variants={navbarVariant}>
                                    <LinkMobileTemplate
                                        urlLink="/investor"
                                        page="Инвеститор"
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                                <motion.div variants={navbarVariant}>
                                    <LinkMobileTemplate
                                        urlLink="/gallery"
                                        page="Галерия"
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                                <motion.div variants={navbarVariant}>
                                    <LinkMobileTemplate
                                        urlLink="/contacts"
                                        page="Контакти"
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </nav>
        </motion.div>
    );
};

export default Navbar;
