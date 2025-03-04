import Link from "next/link"

export default function Footer() {
    return (
        <>
        {/*Start Footer Two*/}
        <footer className="footer-one footer-one--two">
            {/*<div className="shape3 float-bob-y">*/}
            {/*    <img src="/assets/images/shapes/footer-v2-shape3.png" alt=""/>*/}
            {/*</div>*/}
            <div className="footer-one__top pb-3" data-aos="zoom-in-up"
                 data-aos-duration={1500} data-aos-offset={50}>
                <div className="container">
                    <div className="footer-one__top-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp">
                                <div className="footer-widget__single footer-one__about">
                                    <div className="footer-one__about-logo">
                                        <Link href="/"><img src="/assets/images/resources/footer-logo.png"
                                                                  alt=""/></Link>
                                    </div>
                                    <div className="footer-one__about-contact-info">
                                        <div className="icon">
                                            <span className="icon-support"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Make a Call</p>
                                            <h4><Link href="tel:+1234567890">+226 25 54 56 55</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-aos="fade-up"
                                 data-aos-duration={1500} data-aos-offset={50}>
                                <div className="footer-widget__single footer-one__quick-links">
                                    <div className="title">
                                        <h2>Liens rapide <span className="icon-plane3"></span></h2>
                                    </div>

                                    <ul className="footer-one__quick-links-list">
                                        <li><Link href="/tarif"><span className="icon-right-arrow1"></span>Tarif</Link></li>
                                        <li><Link href="/lignes"><span className="icon-right-arrow1"></span> Ligne Bus</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-aos-duration={1500} data-aos-offset={50}>
                                <div className="footer-widget__single footer-one__contact">
                                    <div className="title">
                                        <h2>Adresses <span className="icon-plane3"></span></h2>
                                    </div>

                                    <div className="footer-one__contact-box">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-address"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>3060 Commercial Street Road <br/> Fratton, Australia</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-email"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p><Link href="mailto:yourmail@email.com">support@sotrabf.bf</Link></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-aos-duration={1500} data-aos-offset={50}>
                                <div className="footer-widget__single footer-one__subscribe">
                                    <div className="title">
                                        <h2> <span className="icon-plane3"></span></h2>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-one__bottom">
                <div className="container">

                    <div className="footer-one__bottom-inner" data-aos-duration={1500} data-aos-offset={50}>
                        <div className="footer-one__bottom-text">
                            <p>© Copyright 2024 <Link href="/">SOTRABF.</Link> All Rights Reserved</p>
                        </div>

                        <div className="footer-one__social-links">
                            <ul>
                                <li>
                                    <Link href="#"><span className="icon-facebook-f"></span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="icon-twitter1"></span></Link>
                                </li>
                                <li>
                                    <Link href="#"><span className="icon-linkedin"></span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/*End Footer Two*/}
        </>
    )
}
