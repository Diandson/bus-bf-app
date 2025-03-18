'use client'


import AgencesList from "@/components/AgencesList";

const ReseauVente = () => {
    return (
        <>
            <div className="w-full p-6">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Points de service",
                                icon: "store",
                                description: "Émission de cartes personnalisées, vente des titres et rechargement"
                            },
                            {
                                title: "Points de vente",
                                icon: "cash-register",
                                description: "Vente des titres occasionnels et rechargement"
                            },
                            {
                                title: "Dépositaires de billets",
                                icon: "ticket",
                                description: "Vente de billets uniquement"
                            }
                        ].map((type, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-green-100 rounded-full">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-800">{type.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AgencesList/>
        </>
    );
};

export default ReseauVente;
