
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import {SliderData} from "@/app/service/data";

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
                        {SliderData.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="slider-one__single">
                                    <div
                                        className="slider-one__single-bg"
                                        style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                                    />
                                    <div className="shape1"></div>
                                    <div className="shape2"></div>
                                    <div className="shape3"></div>
                                    <div className="shape4"></div>
                                    <div className="container">
                                        <div className="slider-one__single-inner" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                            <div className="slider-one__single-content">
                                                <div className="tagline">
                                                    <div className="round"></div>
                                                    <div className="text">
                                                    <span className={'font-bold lg:text-2xl sm:text-lg md:text-xl'}>
                                                        {slide.tagline}
                                                    </span>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h2>{slide.title} <br/> <span>{slide.titleSpan}</span></h2>
                                                </div>
                                                <div className="text-box">
                                                    <p>{slide.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}
