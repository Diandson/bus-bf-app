'use client'

import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout >
            <section className="py-16 bg-gray-50">
                {/* Top Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center gap-3 text-green-600 mb-4" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>
                                    <div className="h-px w-8 bg-green-600"></div>
                                    <h4 className="text-xl font-bold">Contact us</h4>
                                    <span className="animate-bounce">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </span>
                                </div>
                                <h1 className="text-4xl font-bold text-gray-900 leading-tight" data-aos="fade-up" data-aos-duration={1100} data-aos-offset={50}>
                                    En un clique, nous sommes là pour vous
                                </h1>
                            </div>

                            <p className="text-gray-600" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                {'Notre équipe d\'experts dévoués est là pour vous guider à chaque étape de votre parcours d\'assurance, garantissant que vous fassiez des choix éclairés adaptés à vos besoins spécifiques.'}
                            </p>

                            <div className="flex gap-4">
                                {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center text-green-600 transition-colors" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                        <i className={`fab fa-${social}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <form className="space-y-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <input type="text" className="w-full px-5 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent pl-12" placeholder="Nom complet" />
                                        <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    </div>
                                    <div className="relative">
                                        <input type="email" className="w-full px-5 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent pl-12" placeholder="Email" />
                                        <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    </div>
                                    <div className="relative">
                                        <input type="tel" className="w-full ps-6 px-5 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent pl-12" placeholder="Contact" />
                                        <i className="fas fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    </div>
                                    <div className="relative">
                                        <input type="tel" className="w-full ps-6 px-5 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent pl-12" placeholder="Objet" />
                                        <i className="fas fa-book absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                    </div>
                                </div>

                                <div className="relative">
                                    <textarea className="w-full px-5 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent pl-12 h-32" placeholder="Message"></textarea>
                                    <i className="fas fa-pen absolute left-4 top-6 text-gray-400"></i>
                                </div>

                                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                                    Envoyer
                                    <i className="fas fa-arrow-right transition-transform group-hover:translate-x-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Contact Info Cards */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "map-marker-alt",
                                title: "Location",
                                content: ["Rue de l'hotel de ville 01 BP 85 Ouaga 01d", "Ouaga, Burkina Faso"]
                            },
                            // {
                            //     icon: "clock",
                            //     title: "Jour de travail",
                            //     content: ["Lundi - Vendredi", "7h - 17h"]
                            // },
                            {
                                icon: "envelope",
                                title: "Email",
                                content: ["mairie.ouaga@mairie-ouaga.bf"],
                                isLink: true
                            },
                            {
                                icon: "phone",
                                title: "Phones",
                                content: ["+226 25 54 56 55"],
                                isLink: true
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <i className={`fas fa-${item.icon} text-green-600 text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                                <div className="space-y-2">
                                    {item.content.map((line, i) => (
                                        item.isLink ?
                                            <a key={i} href="#" className="block text-gray-600 hover:text-green-600">{line}</a>
                                            : <p key={i} className="text-gray-600">{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] w-full" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6209.242755903148!2d-77.04363602434464!3d38.90977276948481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1394992895496"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </section>
            </Layout>
        </>
    )
}
