'use client'

import Layout from "@/components/layout/Layout"
import React, { useState } from 'react'
import SectionHeading from "@/components/SectionHeader";
import MissionVisionValeur from "@/components/MissionVisionValeur";
import OrganisationStructurel from "@/components/OrganisationStructurel";

export default function Home() {
    const [isOpen, setOpen] = useState(false)
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


