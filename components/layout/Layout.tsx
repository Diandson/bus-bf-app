
'use client'
import {useEffect, useState} from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import SearchPopup from "./SearchPopup"

import Header from "./header/Header"
import Footer from './footer/Footer'
import Sidebar from "@/components/layout/Sidebar";
import {roveloUtility} from "@/utility";

interface LayoutProps {
    children?: React.ReactNode
    wrapperCls?: string
}

export default function Layout({ children, wrapperCls }: LayoutProps) {
    const [scroll, setScroll] = useState(false)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        if (isMobileMenu) {
            document.body.classList.remove("mobile-menu-visible")
        }else {
            document.body.classList.add("mobile-menu-visible")
        }
    }

    useEffect(() => {

        roveloUtility.animation();
        roveloUtility.fixedHeader();

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 200;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
        document.addEventListener("scroll", handleScroll);

    }, [scroll])
    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {children}

                <Footer />
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
