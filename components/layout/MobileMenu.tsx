'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";


interface HeaderProps {
    scroll?: boolean;
    handlePopup?: () => void;
    handleMobileMenu?: () => void;
}

const MobileMenu = ({ handleMobileMenu }: HeaderProps) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 0,
        subMenuKey: "",
    });

    const handleToggle = (key: number, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: 0,
                subMenuKey: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey,
            });
        }
    };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content bg-green-900">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image"><Image src="/assets/images/logo.png" className={'w32 h-20'} alt="" /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                            <li className={isActive.key === 1 ? "dropdown current" : "dropdown"}><Link href="#">Services</Link>
                                <ul className={'bg-green-800 ps-2'} style={{ display: `${isActive.key === 1 ? "block" : "none"}` }}>
                                    <li ><Link href="/lignes">Ligne de bus</Link></li>
                                    <li ><Link href="/tarif">Tarif</Link></li>
                                </ul>
                                <button className={isActive.key === 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button>
                            </li>
                            <li className={isActive.key === 2 ? "dropdown current" : "dropdown"}><Link href="#">Abonnement</Link>
                                <ul className={'bg-green-800 ps-2'} style={{ display: `${isActive.key === 2 ? "block" : "none"}` }}>
                                    <li ><Link href="/information">Informations</Link></li>
                                    <li ><Link href="/abonnement">Abonnement</Link></li>
                                </ul>
                                <button className={isActive.key === 2 ? "expanded open" : ""} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></button>
                            </li>
                            <li><Link href="/about">A propos</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
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

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:needhelp@elitecons.com">mairie.ouaga@mairie-ouaga.bf</Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <Link href="tel:666-888-0000">25 54 55 44</Link>
                        </li>
                    </ul>

                </div>
            </div>



        </>
    )
}
export default MobileMenu;
