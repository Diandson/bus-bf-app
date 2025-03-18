'use client'


import Layout from "@/components/layout/Layout";
import {useParams} from "next/navigation";
import BusRoute from "@/components/BusRoute";
import {BusData, BusProps} from "@/app/service/data";

export default function Home() {
    const params = useParams();
    const id = parseInt(params.slug as string);

    const dataBus = BusData.find(bus => bus.id === id) as BusProps;

    return (
        <Layout >
            <div className="min-h-screen bg-gray-100 p-4">
                <div data-aos="fade-up"
                     data-aos-duration={1500} data-aos-offset={50}>
                    <div className="blog-one__single shadow">
                        <div className="blog-one__single-img">
                            <img src="/assets/images/3.jpg" alt="" className={'w-full h-50'}/>
                        </div>
                        <div className="blog-one__single-content">
                            <div className="date-box">
                                <h2>{dataBus!.number}</h2>
                            </div>
                            <div className="blog-one__single-content-inner">
                                <ul className="meta-box">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location1"></span>
                                        </div>
                                        <div className="text-box">
                                            <p className={'font-bold'}>{dataBus!.ligne}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-clock"></span>
                                        </div>
                                        <div className="text-box">
                                            <p className={'font-bold'}>{dataBus!.departureTime}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location"></span>
                                        </div>
                                        <div className="text-box">
                                            <p className={'font-bold'}>{dataBus!.outboundRoute}</p>
                                        </div>
                                    </li>
                                </ul>
                                <h2>{dataBus!.name}</h2>
                                <p>Description du bus et autres informations </p>
                            </div>
                        </div>
                    </div>
                    <BusRoute bus={dataBus} />
                </div>
            </div>
        </Layout>
    );
}
