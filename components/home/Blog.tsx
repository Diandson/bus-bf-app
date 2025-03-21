import Link from "next/link"
import SectionHeading from "@/components/SectionHeader";
import React from "react";
import Image from "next/image";
export default function Blog() {

    const blogData = [
        {
            id: 1,
            image: "/assets/images/bus/12.png",
            date: { day: "15", month: "MARS" },
            author: "Marie Koné",
            title: "Nouveaux bus climatisés pour votre confort",
            description: "Découvrez notre nouvelle flotte de bus équipés des dernières technologies pour des voyages plus confortables...",
            alt: "Nouveau bus confortable"
        },
        {
            id: 2,
            image: "/assets/images/bus/12.png",
            date: { day: "10", month: "MARS" },
            author: "Paul Ouédraogo",
            title: "Nouvelle ligne express Ouaga-Bobo",
            description: "Une nouvelle ligne express reliant Ouagadougou à Bobo-Dioulasso en seulement 5 heures...",
            alt: "Nouvel itinéraire"
        },
        {
            id: 3,
            image: "/assets/images/bus/12.png",
            date: { day: "05", month: "MARS" },
            author: "Sophie Traoré",
            title: "Nouveau système de réservation en ligne",
            description: "Réservez vos billets en quelques clics grâce à notre nouvelle plateforme de réservation...",
            alt: "Réservation en ligne"
        }
    ];

    return (
        <>
            <SectionHeading SectionTitle={'Actualités'}
                            variant={"text-start"}/>
            <div className="container m-4" data-aos="fade-up"
                 data-aos-duration={1500} data-aos-offset={50}>
                <div className="row">
                    {blogData.map((article) => (
                        <div key={article.id} className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <Image src={article.image} alt={article.alt} />
                                </div>

                                <div className="blog-one__single-content">
                                    <div className="date-box">
                                        <h2>{article.date.day}</h2>
                                        <p>{article.date.month}</p>
                                    </div>
                                    <div className="blog-one__single-content-inner">
                                        <ul className="meta-box">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>{article.author}</p>
                                                </div>
                                            </li>
                                        </ul>

                                        <h2>{article.title}</h2>
                                        <p>{article.description}</p>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href={`/blog/${article.id}`}>
                                                Lire plus
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
                    ))}
                </div>
            </div>
       
        </>
    )
}
