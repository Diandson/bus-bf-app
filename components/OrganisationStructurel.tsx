'use client'

const OrganisationStructurel = () => {
    return (
        <div className="w-full p-6 space-y-12">
            {/* Organization Chart Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-xl sm:text-xl lg:text-3xl md:text-2xl xl:text-4xl font-bold text-gray-800 mb-8" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>Structure organisationnelle</h1>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                        {
                            title: "Conseil d'administration",
                            icon: "users",
                            color: "blue"
                        },
                        {
                            title: "Haute direction",
                            icon: "briefcase",
                            color: "purple"
                        },
                        {
                            title: "Postes de gestion",
                            icon: "chart-bar",
                            color: "green"
                        }
                    ].map((level, index) => (
                        <div key={index} className={`bg-${level.color}-50 rounded-xl p-6 text-center`} data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                            <div className={`w-16 h-16 mx-auto mb-4 bg-${level.color}-100 rounded-full flex items-center justify-center`}>
                                <svg className={`w-8 h-8 text-${level.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                            <h3 className={`text-${level.color}-700 font-semibold`}>{level.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Performance Indicators */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl sm:text-xl lg:text-3xl md:text-2xl xl:text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>Indicateurs de performance</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Satisfaction clientèle",
                            icon: "star",
                            color: "yellow"
                        },
                        {
                            title: "Mobilisation employés",
                            icon: "users",
                            color: "blue"
                        },
                        {
                            title: "Efficience",
                            icon: "chart-line",
                            color: "green"
                        },
                        {
                            title: "Développement durable",
                            icon: "leaf",
                            color: "emerald"
                        }
                    ].map((indicator, index) => (
                        <div key={index} className="bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-gray-200 transition-colors" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                            <div className={`w-12 h-12 mb-4 bg-${indicator.color}-100 rounded-full flex items-center justify-center`}>
                                <svg className={`w-6 h-6 text-${indicator.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-800">{indicator.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Satisfaction Surveys */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl sm:text-xl lg:text-3xl md:text-2xl xl:text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>Enquêtes de satisfaction</h2>

                <p className="text-gray-600 mb-6" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>
                    Depuis 2008, une enquête annuelle est menée par une firme externe auprès d'un échantillon représentatif de la clientèle.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['2019', '2018', '2017', '2016'].map((year) => (
                        <a key={year} href={`#enquete-${year}`}
                            className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 text-center transition-colors"
                           data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                            <span className="text-lg font-semibold text-gray-700">Enquête {year}</span>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OrganisationStructurel;
