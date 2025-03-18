'use client'

import React from "react";
import BusGrid from "@/components/BusGrid";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeader";
import {BusData} from "@/app/service/data";

export default function Home() {

    return (
        <Layout >
            <div className="min-h-screen bg-gray-100">
                <SectionHeading SectionTitle={'Nos ligne de bus'}
                                variant={"text-start"}/>
                <BusGrid buses={BusData} />
            </div>
        </Layout>
    );
}
