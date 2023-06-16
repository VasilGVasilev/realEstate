import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { roboto } from './fonts'
import Link from 'next/link'

import { imageLoader } from './imgLoader'
import Image from 'next/image'


// props: 
// - name of link, must be constant
// - selected or to be selected animation
// - change state in parent of Navbar component -> Home component

// TODO: 
// mobile menu comes as an animation with framer motion
// may be reverse link to anchor link if not smooth
// refactor img to Image
const LinkTemplate = ({ urlLink, page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
    return (
        <Link
            className={`${selectedPage === urlLink ? "text-yellow-500" : ""
                }  hover:scale-125 transition duration-300`}
            href={urlLink}
            onClick={() => {
                setSelectedPage(urlLink)
                setIsMenuToggled(false)
            }
            }
        >
            {page}
        </Link>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 1120px)");
    const navbarBackground = isTopOfPage ? "" : "bg-ixora-dark";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
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
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <LinkTemplate
                            urlLink='/description'
                            page="Описание"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <LinkTemplate
                            urlLink='/apartments'
                            page="Апартаменти"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <LinkTemplate
                            urlLink='/investor'
                            page="Инвеститор"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <LinkTemplate
                            urlLink='/contacts'
                            page="Контакти"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
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
                            <LinkTemplate
                                urlLink='/'
                                page="Начало"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <LinkTemplate
                                urlLink='/description'
                                page="За сградата"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <LinkTemplate
                                urlLink='/apartments'
                                page="Апартаменти"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <LinkTemplate
                                urlLink='/investor'
                                page="Инвеститор"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                setIsMenuToggled={setIsMenuToggled}
                            />
                            <LinkTemplate
                                urlLink='/contacts'
                                page="Контакти"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
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