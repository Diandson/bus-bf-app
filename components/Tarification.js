'use client'

import React, { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";
import Spacing from "@/components/Spacing";
import SectionHeading from "@/components/SectionHeader";

const Tarification = () => {
  const [activeTab, setActiveTab] = useState("1");

    const medicalTabsData = {
        subtitle: 'Service Offerings',
        title: 'Explore Our Service<br> Offerings',
        tabsTitle: [
            {
                href: '1',
                iconUrl: 'assets/img/icons/tab_link_icon_1.png',
                label: 'Tarifs réguliers',
            },
            {
                href: '2',
                iconUrl: 'assets/img/icons/tab_link_icon_2.png',
                label: 'Tarifs étudiants',
            },
            {
                href: '3',
                iconUrl: 'assets/img/icons/tab_link_icon_2.png',
                label: 'Tarifs adultes',
            },
        ],
        tabsData: [
            {
                id: '2',
                imageSrc: '/assets/images/1.jpg',
                title: 'La carte Multi Tarif Régulier',
                subtitle:
                    'Forfait de  2 500 fcfa par mois',
                points: [
                    {
                        icon: 'assets/img/icons/check_icon_1.png',
                        text: 'Déplacements illimités, du premier au dernier jour du mois. \n' +
                            '\n' +
                            'Conçu pour les déplacements fréquents pendant un mois;'
                    },
                ],
                linkHref: '/contact',
                buttonText: 'Read More',
            },
            {
                id: '1',
                imageSrc: '/assets/images/3.jpg',
                title: 'Déplacements fréquents',
                subtitle:
                    'Forfait de 2 000 fcfa par mois',
                points: [
                    {
                        icon: 'assets/img/icons/check_icon_1.png',
                        text: 'Déplacements illimités, du premier au dernier jour du mois.\n' +
                            '\n' +
                            'Conçu pour les déplacements fréquents pendant un mois;',
                    },
                ],
                linkHref: '/contact',
                buttonText: 'Read More',
            },
            {
                id: '3',
                imageSrc: '/assets/images/1.jpg',
                title: 'Tarifs adultes réduits',
                subtitle:
                    'Forfait de 4 000 fcfa par mois',
                points: [
                    {
                        icon: 'assets/img/icons/check_icon_1.png',
                        text: 'Déplacements illimités, du premier au dernier jour du mois.\n' +
                            '\n' +
                            'Conçu pour les déplacements fréquents pendant un mois;',
                    },
                ],
                linkHref: '/contact',
                buttonText: 'Read More',
            },
            // Add other tab data here
        ],
    };


    return (
    <>
        <SectionHeading SectionTitle={'Tarifis populaires'}
                        variant={"text-start"}/>
      <div className={'m-2 p-2'}>

        {/*<div className="cs_height_50 cs_height_lg_50" />*/}
        <div className="cs_tabs" data-aos="zoom-in-up"
             data-aos-duration={1500} data-aos-offset={50}>
          <ul className="cs_tab_links cs_style_1 cs_bold">
            {medicalTabsData.tabsTitle.map((tab, index) => (
              <li key={index}
                className={activeTab === tab.href ? "active" : ""}>
                <a
                  onClick={() => setActiveTab(tab.href)}>
                  <span className="cs_tab_link_icon cs_center">
                    <img src="/assets/images/busicon.png" alt="Icon" />
                  </span>
                  <span>{tab.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="cs_height_50 cs_height_lg_50" />
          <div className="tab-content mx-4">
            {medicalTabsData.tabsData.map((tab, index) => (
              <div key={index} id={tab.id} className={`transition-all duration-500 transform${activeTab === tab.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 absolute top-0 left-0'}`}
                >
                {activeTab === tab.id && (
                  <div className="cs_card cs_style_2">
                    <div className="row cs_gap_y_30 align-items-xl-center">
                      <div className="col-lg-6">
                        <div className="cs_card_thumb cs_radius_5">
                          <img src={tab.imageSrc} alt="Department Image" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="cs_card_text">
                          <h2 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg font-bold">{tab.title}</h2>
                          <p className="cs_card_subtitle">{tab.subtitle}</p>
                          <ul className="cs_list cs_style_1 cs_mp0">
                            {tab.points.map((point, idx) => (
                              <li key={idx}>
                                <i>
                                  {/*<img src={point.icon} alt="Icon" />*/}
                                    <i className={'fas fa-chevron-right'} />
                                </i>
                                {point.text}
                              </li>
                            ))}
                          </ul>

                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarification;
