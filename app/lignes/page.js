'use client'

import React, { useState } from "react";
import BusGrid from "@/components/BusGrid";
import SearchBar from "@/components/SearchBar";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeader";


// Données des bus (exemple)
const buses = [
    { id: 1, numero: "123", depart: "Gare Centrale", heure: "08:00", image: "/assets/images/1.jpg" },
    { id: 2, numero: "456", depart: "Aéroport", heure: "09:30", image: "/assets/images/2.jpg" },
    // Ajoutez plus de bus ici
];

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    // Filtrer les bus en fonction de la recherche
    const filteredBuses = buses.filter((bus) =>
        bus.numero.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout >
            <div className="min-h-screen bg-gray-100">
                <SectionHeading SectionTitle={'Nos ligne de bus'}
                                variant={"text-start"}/>
                <BusGrid buses={filteredBuses} />
            </div>
        </Layout>
    );
}
