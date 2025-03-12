'use client'

import Link from "next/link";
import React from "react";
import {BusData} from "@/app/service/data";

export default function BusGrid({buses}) {

    return (
        <section className="blog-page p-3">
            <div className="flex justify-end mb-10">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Rechercher ..."
                        className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300">
                        <span className="icon-search text-xl"></span>
                    </button>
                </div>
            </div>
            <div className="row">
                {BusData.map(bus => {
                    return <div className="col-xl-4 col-lg-6" data-aos="fade-up"
                         data-aos-duration={1500} data-aos-offset={50} key={bus.id}>
                        <div className="blog-one__single shadow">
                            <div className="blog-one__single-img">
                                <img src={bus.image} alt="" className={'w-2/4 h-48'}/>
                            </div>
                            <div className="blog-one__single-content">
                                <div className="date-box">
                                    <h2>{bus.number}</h2>
                                </div>
                                <div className="blog-one__single-content-inner">
                                    <ul className="meta-box">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location1"></span>
                                            </div>
                                            <div className="text-box">
                                                <p><Link href="#">{bus.ligne}</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-clock"></span>
                                            </div>
                                            <div className="text-box">
                                                <p><Link href="#">{bus.departureTime}</Link></p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg  transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            <span className="font-semibold text-gray-800">
                                                {bus.outboundRoute}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg  transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                            <span className="font-semibold text-gray-800">
                                                {bus.returnRoute}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href={'/lignes/' + bus.id}>Plus...
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
                })}
            </div>
            <ul className="styled-pagination text-center clearfix">
                <li className="arrow prev active"><Link href="#"><span className="icon-right-arrow3"></span></Link>
                </li>
                <li><Link href="#">1</Link></li>
                <li><Link href="#">2</Link></li>
                <li><Link href="#">3</Link></li>
                <li className="arrow next"><Link href="#"><span className="icon-right-arrow31"></span></Link>
                </li>
            </ul>
        </section>
    );
}
