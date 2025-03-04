"use client";

import Link from "next/link";
import Slider from "react-slick";
import SectionHeading from "@/components/SectionHeader";
import React from "react";

const BusTime = () => {
    const sliderProps = {
        infinite: true,
        speed: 400,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const busSchedules = [
        {
            id: 1,
            busNumber: "32",
            image: "/assets/images/1.jpg",
            departure: "Karpala, ST",
            time: "6:00"
        },
        {
            id: 2,
            busNumber: "345",
            image: "/assets/images/destinations/hot-deal1.jpg",
            departure: "Karpala, ST",
            time: "6:00"
        },
        {
            id: 3,
            busNumber: "245",
            image: "/assets/images/destinations/hot-deal1.jpg",
            departure: "Karpala, ST",
            time: "6:00"
        },
        {
            id: 4,
            busNumber: "800",
            image: "/assets/images/destinations/hot-deal1.jpg",
            departure: "Karpala, ST",
            time: "6:00"
        }
    ];


    return (
        <div className={'shadow-lg'}>
            <SectionHeading SectionTitle={'Informations horaire de Bus'}
                            variant={"text-start"}/>
            <Slider {...sliderProps} className="m-4">
                {busSchedules.map((bus) => (
                    <div key={bus.id} className="border w-64 shadow p-2"
                         data-aos="flip-left" data-aos-duration={1500} data-aos-offset={50}>
                        <div className="d-flex justify-center p-2">
                            <div
                                className="border md:w-36 md:h-36 lg:w-40 lg:h-40 sm:w-28 sm:h-28 border-black p-1 rounded-full flex items-center justify-center">
                                <span
                                    className="text-xl sm:text-xl lg:text-4xl md:text-3xl xl:text-5xl font-bold text-green-600">{bus.busNumber}</span>
                            </div>
                            {/*<img className={'img-fluid h-60'} src="/assets/images/1.jpg" alt="Hot Deal"/>*/}
                        </div>
                        <div className="w-full space-y-1 mb-4 p-2">
                            <div className="flex justify-between">
                                <span className="text-sm font-semibold text-gray-900 mt-2">Point départ </span>
                                <span className="font-semibold text-green-600">{bus.departure}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-semibold text-gray-900 mt-2">Heure départ </span>
                                <span className="font-semibold text-green-600">{bus.time}</span>
                            </div>
                        </div>
                        <Link href="destination-details" className="theme-btn style-three">
                            <span data-hover="Détails">Détails</span>
                            <i className="icon-right-arrow21"></i>
                        </Link>
                    </div>
                ))}


            </Slider>
        </div>
    );
}
export default BusTime;
