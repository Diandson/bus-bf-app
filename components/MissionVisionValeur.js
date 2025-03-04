'use client'

const MissionVisionValeur = () => {
    return (
        <div className="w-full p-6 space-y-16">
            {/* Mission Section */}
            <section className="bg-white rounded-2xl shadow-lg p-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-full">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <h2 className="text-xl sm:text-xl lg:text-3xl md:text-2xl xl:text-4xl font-bold text-gray-800">Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Notre mission est d'assurer la mobilité des personnes sur le territoire de la ville de Gatineau en leur offrant des solutions performantes de transport collectif durable qui leur permettent de se déplacer là où elles vivent, travaillent, étudient et se divertissent.
                </p>
            </section>

            {/* Vision Section */}
            <section className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                    <div className="p-3 bg-purple-100 rounded-full">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                    </div>
                    <h2 className="text-xl sm:text-xl lg:text-3xl md:text-2xl xl:text-4xl font-bold text-gray-800">Vision</h2>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-purple-700" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>Aujourd'hui, l'avenir.</h3>

                    <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-700">Solutions de déplacement</h4>
                            <ul className="space-y-2">
                                {["Simplicité", "Efficacité", "Approche novatrice", "Valorisation des modes complémentaires"].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                                        </svg>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                            <h4 className="font-semibold text-gray-700">Impact positif</h4>
                            <ul className="space-y-2">
                                {["Économiques", "Sociales", "Environnementales"].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                                        </svg>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>
                    <div className="p-3 bg-green-100 rounded-full">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                    </div>
                    <h2 className="text-xl sm:text-xl lg:text-3xl md:text-2xl xl:text-4xl font-bold text-gray-800">Nos valeurs</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Approche client",
                            description: "Maintenir un haut niveau de satisfaction en offrant des services de qualité"
                        },
                        {
                            title: "Professionnalisme",
                            description: "Agir de façon responsable en respectant nos engagements"
                        },
                        {
                            title: "Intégrité",
                            description: "Relations guidées par l'honnêteté, la transparence et l'équité"
                        },
                        {
                            title: "Bien-être de l'équipe",
                            description: "Maintenir un climat de travail harmonieux et positif"
                        },
                        {
                            title: "Respect",
                            description: "Considération envers les personnes, ressources et l'environnement"
                        }
                    ].map((value, index) => (
                        <div key={index} className="bg-green-50 rounded-xl p-6 hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                            <h3 className="text-lg font-semibold text-green-700 mb-2">{value.title}</h3>
                            <p className="text-gray-600 text-sm">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MissionVisionValeur;
