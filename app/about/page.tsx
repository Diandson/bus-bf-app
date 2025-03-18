'use client'

import React from 'react'
import SectionHeading from "@/components/SectionHeader";
import Layout from "@/components/layout/Layout";
import MissionVisionValeur from "@/components/MissionVisionValeur";
import OrganisationStructurel from "@/components/OrganisationStructurel";

export default function Home() {
    return (
        <>
        <Layout >
            <SectionHeading SectionTitle={'Nos missions, visions et valeurs'}
                            variant={"text-start"}/>
            <MissionVisionValeur/>
            <SectionHeading SectionTitle={'Structure de l\'entreprise'}
                            variant={"text-start"}/>
            <OrganisationStructurel/>
        </Layout>
        </>
    )
}


