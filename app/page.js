import Layout from "@/components/layout/Layout"
import Banner from "@/components/home/Banner";
import BusShedule from "@/components/BusShedule";
import Tarification from "@/components/Tarification";
import React from "react";
import Blog from "@/components/home/Blog";
import BusTime from "@/components/slider/BusTime";


export default function Home() {

    return (
        <>
            <Layout >
                <Banner/>
                <BusShedule/>
                <BusTime />
                <Tarification />
                <Blog/>
            </Layout>
        </>
    )
}
