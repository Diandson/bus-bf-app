'use client';

import SectionHeading from "@/components/SectionHeader";
import Layout from "@/components/layout/Layout";
import React from "react";
import FormAbonnement from "@/components/FormAbonnement";


export default function Home() {
    return (
        <Layout>
            <SectionHeading SectionTitle={'Effectuer un abonnement ou reabonnement'}
                            variant={"text-start"}/>
            <FormAbonnement/>
        </Layout>
    )
}
