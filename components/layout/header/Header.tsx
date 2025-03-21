import Menu from "../Menu"
import Link from "next/link"
import MobileMenu from "@/components/layout/MobileMenu";
import Image from "next/image";

interface HeaderProp {
    scroll?: boolean;
    handlePopup?: () => void;
    isMobileMenu?: boolean;
    isSidebar?: boolean;
    handleMobileMenu: () => void;
    handleSidebar?: () => void;
}

export default function Header({ scroll, handlePopup, handleMobileMenu}: HeaderProp) {
    return (
        <>
        
        {/*Start Main Header Three*/}
        <header className="main-header main-header-three">
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-header-three__top">
                            <div className="container">
                                <div className="main-header-three__top-inner">

                                    <div className="header-contact-style1">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-phone"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><span>Talk to Us</span> <Link href="tel:1234567890">[+226 25 45 54 54]</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-email"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><span>Mail Us</span> <Link
                                                            href="mailto:yourmail@email.com">[mairie.ouaga@mairie-ouaga.bf]</Link>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="main-header-three__right">

                                        {/*<div className="header-social-links">*/}
                                        {/*    <Link href="#"><span className="icon-facebook-f"></span></Link>*/}
                                        {/*    <Link href="#"><span className="icon-twitter1"></span></Link>*/}
                                        {/*    <Link href="#"><span className="icon-instagram"></span></Link>*/}
                                        {/*    <Link href="#"><span className="icon-linkedin"></span></Link>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-header-three__bottom">
                            <div className="container">
                                <div className="main-header-three__bottom-inner">
                                    <div className="main-header-three__bottom-left">
                                        <div className="logo-box">
                                            <Link href="/">
                                                <Image src="/assets/images/logo.png" className={'w32 h-20'}
                                                     alt=""/>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="main-header-three__bottom-middle">
                                        <div className="main-header-three__menu">
                                            <div className="main-menu__main-menu-box">
                                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                                <Menu />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="main-header-three__bottom-right">
                                        <div className="header-search-box-two">
                                            <Link href="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                        </div>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href="/ticket">
                                                Achat de ticket
                                                <i className="icon-right-arrow21"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        {/*End Main Header Three*/}

        <div className={`stricky-header stricky-header--style3 stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-header-three__top">
                            <div className="container">
                                <div className="main-header-three__top-inner">

                                    <div className="header-contact-style1">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-phone"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><span>Talk to Us</span> <Link href="tel:1234567890">[+123 456
                                                            789]</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-email"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><span>Mail Us</span> <Link
                                                            href="mailto:yourmail@email.com">[mairie.ouaga@mairie-ouaga.bf]</Link>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-header-three__bottom">
                            <div className="container">
                                <div className="main-header-three__bottom-inner">
                                    <div className="main-header-three__bottom-left">
                                        <div className="logo-box">
                                            <Link href="/">
                                                <Image src="/assets/images/logo.png" className={'w32 h-20'}
                                                     alt=""/></Link>
                                        </div>
                                    </div>

                                    <div className="main-header-three__bottom-middle">
                                        <div className="main-header-three__menu">
                                            <div className="main-menu__main-menu-box">
                                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                                <Menu />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="main-header-three__bottom-right">
                                        <div className="header-search-box-two">
                                            <Link href="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                        </div>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href="/ticket">
                                                Achat de ticket
                                                <i className="icon-right-arrow21"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* /.sticky-header__content */}
        </div>{/* /.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
