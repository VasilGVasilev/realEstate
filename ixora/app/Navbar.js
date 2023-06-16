import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { roboto } from './fonts'
import Link from 'next/link'

import { imageLoader } from './imgLoader'
import Image from 'next/image'
import { usePathname } from "next/navigation";


// props: 
// - name of link, must be constant
// - selected or to be selected animation
// - change state in parent of Navbar component -> Home component

// TODO: 
// mobile menu comes as an animation with framer motion
// may be reverse link to anchor link if not smooth
// refactor img to Image
const LinkMobileTemplate = ({ urlLink, page, setIsMenuToggled }) => {
    const pathName = usePathname()

    return (
        <Link
            className={`${pathName === urlLink ? "text-yellow-500" : ""
                }  hover:scale-125 transition duration-300`}
            href={urlLink}
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
    const pathName = usePathname()

    return (
        <Link
            className={`${pathName == urlLink ? "text-yellow-400" : ""
                }  hover:scale-125 transition duration-300`}
            href={urlLink}
        >
            {page}
        </Link>
    );
};
const Navbar = ({ isTopOfPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 1120px)");
    const navbarBackground = isTopOfPage ? "" : "bg-ixora-dark";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-[1%]`}>
            <div className="flex items-center justify-between mx-auto w-5/6">

                <Link className='saturate-200 duration-200 flex justify-center items-center h-[15%] w-[15%] xl:h-[10%] xl:w-[10%]' href={`/`}>
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
                    <div className={`${roboto.className} text-xl 2xl:text-2xl flex justify-between gap-10 2xl:gap-16 text-white font-semibold`}>
                        <LinkTemplate
                            urlLink='/'
                            page="Начало"
                        />
                        <LinkTemplate
                            urlLink='/description/'
                            page="Описание"
                        />
                        <LinkTemplate
                            urlLink='/apartments/'
                            page="Апартаменти"
                        />
                        <LinkTemplate
                            urlLink='/investor/'
                            page="Инвеститор"
                        />
                        <LinkTemplate
                            urlLink='/contacts/'
                            page="Контакти"
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
                    <div className="fixed right-0 bottom-0 h-full bg-gray-800 w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src="/assets/close-icon.svg" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
                            <LinkMobileTemplate
                                urlLink='/'
                                page="Начало"
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <LinkMobileTemplate
                                urlLink='/description'
                                page="За сградата"
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <LinkMobileTemplate
                                urlLink='/apartments'
                                page="Апартаменти"
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <LinkMobileTemplate
                                urlLink='/investor'
                                page="Инвеститор"
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <LinkMobileTemplate
                                urlLink='/contacts'
                                page="Контакти"
                                setIsMenuToggled={setIsMenuToggled}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;