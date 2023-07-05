import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from 'next-intl/link'

import { imageLoader } from '../utils/imgLoader'
import Image from 'next/image'
import { usePathname } from "next/navigation";

import { motion } from "framer-motion"
import { useTranslations } from "next-intl";


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
    const pathName = usePathname()

    return (
        <Link
            href={urlLink}
            className={`${pathName === urlLink ? "text-yellow-500" : ""
                }  hover:scale-125 transition duration-300`}
            onClick={() => {
                    setIsMenuToggled(false);
                }
            }
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
            className={`${pathName == urlLink ? "text-yellow-500" : ""
                }  hover:scale-125 transition duration-300`}
        >
            {page}
        </Link>
    );
};



const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const pathName = usePathname();
    const t = useTranslations('Navbar');

    return (
        // animation works only on Home page:
        // the Navbar is fixed, meaning when we start the page, it is hidden and scroll makes it appear
        // but also if we refresh down the Home page, due to Navbar also being fixed to viewport, it will appear since being fixed makes it also constanlty inView
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.2 }}
            variants = {{
                hidden: pathName === '/bg/' || pathName === '/en/' ? { opacity: 1 } : { },
                visible: pathName === '/bg/' || pathName === '/en/' ? { opacity: 0} : { },
            }}

        >
            <nav className={`bg-ixora-dark z-40 w-full fixed top-0 py-[2%] sm:py-[1%]`} >
                <div className="absolute top-0 right-3 p-1 hidden lg:flex">
                    <Link locale="bg" href="/">
                        <Image
                            className="m-2"
                            src="/bg.svg"
                            alt="Bulgarian"
                            width={20}
                            height={8}
                        />
                    </Link>
                    <Link locale="en" href="/">
                        <Image
                            className="m-2"
                            src="/uk.svg"
                            alt="English"
                            width={20}
                            height={8}
                        />
                    </Link>


                </div>
                <div className="flex items-center justify-between mx-auto w-5/6">
                    {/* LANGUAGES AND LOGO */}

                    <Link className='flex justify-center items-center h-[30%] w-[30%] sm:h-[15%] sm:w-[15%]' href={'/'}>
                        <Image
                            loader={imageLoader}
                            src="/ixora.webp"
                            alt="Ixora Logo"
                            width={979}
                            height={350}
                        />
                    </Link>


                    {/* DESKTOP NAV */}
                    {isDesktop ? (
                        <div className={`text-xl 2xl:text-2xl flex justify-between gap-10 2xl:gap-16 text-white font-bold`}>
                            <LinkTemplate
                                urlLink='/'
                                page={t('welcomeNav')}
                            />
                            <LinkTemplate
                                urlLink='/description/'
                                page={t('descNav')}
                            />
                            <LinkTemplate
                                urlLink='/apartments/'
                                page={t('apartNAv')}
                            />
                            <LinkTemplate
                                urlLink='/investor/'
                                page={t('investNav')}
                            />
                            <LinkTemplate
                                urlLink='/contacts/'
                                page={t('contactNav')}
                            />
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-red p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <img alt="menu-icon" src="/assets/menu-icon.svg" />
                        </button>
                    )}

                    {/* MOBILE MENU POPUP */}
                    {!isDesktop && isMenuToggled && (
                        <motion.div 
                            className="fixed right-0 bottom-0 h-full bg-ixora-deep-blue w-[300px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            {/* LANG BUTTONS */}
                            <div className="absolute top-0 left-0 p-10">
                            <Link locale="bg" href="/">
                                <Image
                                    className="m-2"
                                    src="/bg.svg"
                                    alt="Bulgarian"
                                    width={20}
                                    height={8}
                                />
                            </Link>
                            <Link locale="en" href="/">
                                <Image
                                    className="m-2"
                                    src="/uk.svg"
                                    alt="English"
                                    width={20}
                                    height={8}
                                />
                            </Link>
                            </div>
                            {/* CLOSE ICON */}
                            <div className="flex justify-end p-12">
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <img alt="close-icon" src="/assets/close-icon.svg" />
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
                                <motion.div
                                    variants={navbarVariant}
                                >
                                    <LinkMobileTemplate
                                        urlLink='/'
                                        page={t('welcomeNav')}
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                                <motion.div
                                    variants={navbarVariant}
                                >
                                    <LinkMobileTemplate
                                        urlLink='/description'
                                        page={t('descNav')}
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                                <motion.div
                                    variants={navbarVariant}
                                >
                                    <LinkMobileTemplate
                                        urlLink='/apartments'
                                        page={t('apartNAv')}
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                                <motion.div
                                    variants={navbarVariant}
                                >

                                    <LinkMobileTemplate
                                        urlLink='/investor'
                                        page={t('investNav')}
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                                <motion.div
                                    variants={navbarVariant}
                                >

                                    <LinkMobileTemplate
                                        urlLink='/contacts'
                                        page={t('contactNav')}
                                        setIsMenuToggled={setIsMenuToggled}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </nav>
        </motion.div>
    );
};

export default Navbar;