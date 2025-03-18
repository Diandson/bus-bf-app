'use client'

import React, { useState } from "react";
import BusGrid from "@/components/BusGrid";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeader";
import {BusData} from "@/app/service/data";


// Données des bus (exemple)
const buses = [
    { id: 1, numero: "123", depart: "Gare Centrale", heure: "08:00", image: "/assets/images/1.jpg" },
    { id: 2, numero: "456", depart: "Aéroport", heure: "09:30", image: "/assets/images/2.jpg" },
    // Ajoutez plus de bus ici
];

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");

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
