
'use client'
import {useEffect, useRef, useState} from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import SearchPopup from "./SearchPopup"

import Header from "./header/Header"
import Footer from './footer/Footer'
import {roveloUtility} from "@/utility";
import Sidebar from "@/components/layout/Sidebar";

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    useEffect(() => {

        roveloUtility.animation();
        roveloUtility.fixedHeader();

        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 200;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);

        // Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // L'élément est visible, déclencher l'animation WOW
                    wow.sync();
                }
            });
        }, {
            threshold: 0.1 // Ajustez le seuil selon vos besoins
        });

    }, [scroll])
    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {children}

                <Footer footerStyle={footerStyle} />
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
