'use client'

import Layout from "@/components/layout/Layout"
import React, { useState } from 'react'
import BusTicketForm from "@/components/BusTicketForm";
import SectionHeading from "@/components/SectionHeader";


export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout >
                <SectionHeading SectionTitle={'Achat de ticket'}
                                variant={"text-start"}/>
                <BusTicketForm/>
            </Layout>
        </>
    )
}
