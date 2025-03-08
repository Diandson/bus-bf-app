
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    loop: true,
    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    return (
        <>

            <section className="slider-one">
                <div className="">
                    <Swiper {...swiperOptions} className="slider-one__carousel owl-carousel owl-theme">
                        <SwiperSlide>
                            <div className="slider-one__single">
                                <div className="slider-one__single-bg"
                                     style={{ backgroundImage: 'url(assets/images/1.jpg)' }} ></div>
                                <div className="shape1"></div>
                                <div className="shape2"></div>
                                <div className="shape3"></div>
                                <div className="shape4"></div>
                                <div className="container">
                                    <div className="slider-one__single-inner" data-aos="fade-up"
                                         data-aos-duration={1500} data-aos-offset={50}>
                                        <div className="slider-one__single-content">
                                            <div className="tagline">
                                                <div className="round"></div>
                                                <div className="text"><span className={'font-bold lg:text-2xl sm:text-lg md:text-xl'}>Bienvenu sur Le Projet de Mobilité Urbaine du Grand Ouaga(PMUGO)</span></div>
                                            </div>

                                            <div className="title-box">
                                                <h2>Nous offrons un <br/> <span>Transport confortable</span></h2>
                                            </div>

                                            <div className="text-box">
                                                <p>Vivez une expérience des plus moderne et agréable de transport en commun offerte dans nos bus.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-one__single">
                                <div className="slider-one__single-bg"
                                     style={{ backgroundImage: 'url(assets/images/2.jpg)' }} ></div>
                                <div className="shape1"></div>
                                <div className="shape2"></div>
                                <div className="shape3"></div>
                                <div className="shape4"></div>
                                <div className="container">
                                    <div className="slider-one__single-inner">
                                        <div className="slider-one__single-content">
                                            <div className="tagline">
                                                <div className="round"></div>
                                                <div className="text"><span className={'font-bold lg:text-2xl sm:text-lg md:text-xl'}>Bienvenu sur Le Projet de Mobilité Urbaine du Grand Ouaga(PMUGO)</span></div>
                                            </div>

                                            <div className="title-box">
                                                <h2>Nous offrons un <br/> <span>Transport confortable</span></h2>
                                            </div>

                                            <div className="text-box">
                                                <p>Vivez une expérience des plus moderne et agréable de transport en commun offerte dans nos bus.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-one__single">
                                <div className="slider-one__single-bg"
                                     style={{ backgroundImage: 'url(assets/images/3.jpg)' }} ></div>
                                <div className="shape1"></div>
                                <div className="shape2"></div>
                                <div className="shape3"></div>
                                <div className="shape4"></div>
                                <div className="container">
                                    <div className="slider-one__single-inner">
                                        <div className="slider-one__single-content">
                                            <div className="tagline">
                                                <div className="round"></div>
                                                <div className="text"><span className={'font-bold lg:text-2xl sm:text-lg md:text-xl'}>Bienvenu sur Le Projet de Mobilité Urbaine du Grand Ouaga(PMUGO)</span></div>
                                            </div>

                                            <div className="title-box">
                                                <h2>Nous offrons un <br/> <span>Transport confortable</span></h2>
                                            </div>

                                            <div className="text-box">
                                                <p>Vivez une expérience des plus moderne et agréable de transport en commun offerte dans nos bus.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
