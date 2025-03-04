import Link from "next/link"
import SectionHeading from "@/components/SectionHeader";
import React from "react";
export default function Blog() {
    return (
        <>
            <SectionHeading SectionTitle={'Actualités'}
                            variant={"text-start"}/>
            <div className="container m-4" data-aos="fade-up"
                 data-aos-duration={1500} data-aos-offset={50}>
                <div className="row">
                    {/*Start Blog One Single*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <img src="assets/images/blog/blog-v1-img1.jpg" alt=""/>
                            </div>

                            <div className="blog-one__single-content">
                                <div className="date-box">
                                    <h2>05</h2>
                                    <p>FEB</p>
                                </div>
                                <div className="blog-one__single-content-inner">
                                    <ul className="meta-box">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user"></span>
                                            </div>

                                            <div className="text-box">
                                                <p><Link href="#">Robert Fox</Link></p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-chat"></span>
                                            </div>

                                            <div className="text-box">
                                                <p><Link href="#">2 Comment</Link></p>
                                            </div>
                                        </li>
                                    </ul>

                                    <h2><Link href="blog-details">How Will You Know Success <br/> When it Show Up?</Link>
                                    </h2>
                                    <p>Logistic service provider company plays a pivotal role in the global supply chain
                                        ecosystem by efficiently... </p>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="blog-details">Read More
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
                    {/*End Blog One Single*/}

                    {/*Start Blog One Single*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInDown" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <img src="assets/images/blog/blog-v1-img2.jpg" alt=""/>
                            </div>

                            <div className="blog-one__single-content">
                                <div className="date-box">
                                    <h2>05</h2>
                                    <p>FEB</p>
                                </div>
                                <div className="blog-one__single-content-inner">
                                    <ul className="meta-box">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user"></span>
                                            </div>

                                            <div className="text-box">
                                                <p><Link href="#">Robert Fox</Link></p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-chat"></span>
                                            </div>

                                            <div className="text-box">
                                                <p><Link href="#">2 Comment</Link></p>
                                            </div>
                                        </li>
                                    </ul>

                                    <h2><Link href="blog-details">Mastering Last Mile Delivery <br/> Strategies for
                                        Success</Link></h2>
                                    <p>Logistic service provider company plays a pivotal role in the global supply chain
                                        ecosystem by efficiently... </p>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="blog-details">Read More
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
                    {/*End Blog One Single*/}

                    {/*Start Blog One Single*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <img src="/assets/images/blog/blog-v1-img3.jpg" alt=""/>
                            </div>

                            <div className="blog-one__single-content">
                                <div className="date-box">
                                    <h2>05</h2>
                                    <p>FEB</p>
                                </div>
                                <div className="blog-one__single-content-inner">
                                    <ul className="meta-box">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user"></span>
                                            </div>

                                            <div className="text-box">
                                                <p><Link href="#">Robert Fox</Link></p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-chat"></span>
                                            </div>

                                            <div className="text-box">
                                                <p><Link href="#">2 Comment</Link></p>
                                            </div>
                                        </li>
                                    </ul>

                                    <h2><Link href="blog-details">Logistics Announces Launch <br/> of Greenhouse
                                        Gas</Link></h2>
                                    <p>Logistic service provider company plays a pivotal role in the global supply chain
                                        ecosystem by efficiently... </p>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="blog-details">Read More
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
                    {/*End Blog One Single*/}
                </div>
            </div>
       
        </>
    )
}
