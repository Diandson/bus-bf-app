'use client';

import SectionHeading from "@/components/SectionHeader";
import Layout from "@/components/layout/Layout";
import React from "react";
import ModePaiement from "@/components/ModePaiement";
import ReseauVente from "@/components/ReseauVente";


export default function Home() {
    return (
        <Layout>
            <SectionHeading SectionTitle={'Modes d\'abonnement'}
                            variant={"text-start"}/>
            <ModePaiement/>

            <SectionHeading SectionTitle={'Nos points de vente'}
                            variant={"text-start"}/>
            <ReseauVente/>
        </Layout>
    )
}
