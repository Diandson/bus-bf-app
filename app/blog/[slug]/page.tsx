'use client';

import {UserIcon, CalendarIcon, ShareIcon} from '@heroicons/react/24/outline';
import Layout from "@/components/layout/Layout";

const Home = () => {

    const articleData = {
        title: "Nouveaux bus climatisés pour votre confort",
        author: "Marie Koné",
        date: "15 Mars 2024",
        mainImage: "/assets/images/blog/nouveau-bus.jpg",
        content: `
      <p>Notre compagnie s'engage à vous offrir le meilleur confort possible lors de vos voyages. C'est pourquoi nous sommes fiers de vous présenter notre nouvelle flotte de bus climatisés...</p>
      
      <h2>Un confort optimal</h2>
      <p>Nos nouveaux bus sont équipés des dernières technologies en matière de confort...</p>
      
      <h2>Caractéristiques principales</h2>
      <ul>
        <li>Sièges inclinables premium</li>
        <li>Système de climatisation dernière génération</li>
        <li>Prises USB à chaque siège</li>
        <li>Wifi gratuit</li>
      </ul>
    `,
        gallery: [
            "/assets/images/blog/bus-interior-1.jpg",
            "/assets/images/blog/bus-interior-2.jpg",
            "/assets/images/blog/bus-interior-3.jpg"
        ]
    };

    return (

        <Layout >
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div
                    className="relative h-[60vh] bg-cover bg-center"
                    style={{backgroundImage: `url(${articleData.mainImage})`}}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50">
                        <div className="container mx-auto px-4 h-full flex items-end pb-16">
                            <div className="text-white" data-aos="fade-up">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                    {articleData.title}
                                </h1>
                                <div className="flex items-center space-x-4 text-sm md:text-base">
                <span className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2"/>
                    {articleData.author}
                </span>
                                    <span className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2"/>
                                        {articleData.date}
                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container px-4 py-12">
                    <div className="w-full p-6">

                        {/* Article Content */}
                        <div
                            className="prose prose-lg max-w-none text-justify"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            dangerouslySetInnerHTML={{__html: articleData.content}}
                        />

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                            {articleData.gallery.map((image, index) => (
                                <div key={index}
                                    className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
                                    data-aos="zoom-in"
                                    data-aos-delay={100 * index}
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Share Section */}
                        <div
                            className="flex items-center justify-center space-x-4 mt-12 py-8 border-t"
                            data-aos="fade-up">
                            <span className="flex items-center text-gray-600">
                              <ShareIcon className="h-5 w-5 mr-2"/>
                              Partager cet article
                            </span>
                            <div className="flex space-x-4">
                                <button
                                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                                    Facebook
                                </button>
                                <button
                                    className="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors">
                                    Twitter
                                </button>
                                <button
                                    className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                                    WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
