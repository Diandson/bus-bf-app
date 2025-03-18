import React from "react";


export default function FormAbonnement() {
  return (
      <div className="w-full px-4 py-8">
          <form className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                  <div className="form-group" data-aos="fade-right">
                      <label className="block text-gray-700 font-medium mb-2">Nom *</label>
                      <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  </div>

                  <div className="form-group" data-aos="fade-left" data-aos-duration={1000} data-aos-offset={50}>
                      <label className="block text-gray-700 font-medium mb-2">Prénoms *</label>
                      <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  </div>

                  <div className="form-group" data-aos="fade-right" data-aos-duration={1000} data-aos-offset={50}>
                      <label className="block text-gray-700 font-medium mb-2">Date de naissance *</label>
                      <div className="grid grid-cols-3 gap-2">
                          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                              <option>-- Jour --</option>
                              {[...Array(31)].map((_, i) => (
                                  <option key={i + 1} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>
                              ))}
                          </select>
                          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                              <option>-- Mois --</option>
                              {['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'].map((month) => (
                                  <option key={month} value={month}>{month}</option>
                              ))}
                          </select>
                          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                              <option>-- Année --</option>
                              {[...Array(91)].map((_, i) => (
                                  <option key={i} value={2010 - i}>{2010 - i}</option>
                              ))}
                          </select>
                      </div>
                  </div>

                  <div className="form-group" data-aos="fade-left" data-aos-duration={1000} data-aos-offset={50}>
                      <label className="block text-gray-700 font-medium mb-2">Lieu de naissance *</label>
                      <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                          <option>-- Sélectionnez --</option>
                          {['ABOBO', 'ADJAME', 'COCODY', 'PLATEAU', 'KOUMASSI', 'MARCORY'].map((lieu) => (
                              <option key={lieu} value={lieu}>{lieu}</option>
                          ))}
                      </select>
                  </div>

                  <div className="form-group" data-aos="fade-right" data-aos-duration={1000} data-aos-offset={50}>
                      <label className="block text-gray-700 font-medium mb-2">Sexe *</label>
                      <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                          <option>-- Sélectionnez --</option>
                          <option value="homme">Homme</option>
                          <option value="femme">Femme</option>
                      </select>
                  </div>

                  <div className="form-group" data-aos="fade-left" data-aos-duration={1000} data-aos-offset={50}>
                      <label className="block text-gray-700 font-medium mb-2">Nationalité *</label>
                      <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  </div>

                  <div className="form-group" data-aos="fade-right">
                      <label className="block text-gray-700 font-medium mb-2">{"Pièce d'identité *"}</label>
                      <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                          <option>-- Sélectionnez --</option>
                          <option value="cni">CNI</option>
                          <option value="passport">PASSPORT</option>
                      </select>
                  </div>

                  <div className="form-group" data-aos="fade-left" data-aos-duration={1000} data-aos-offset={50}>
                      <label className="block text-gray-700 font-medium mb-2">Numéro de pièce *</label>
                      <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                  </div>

                  <div className="form-group" data-aos="fade-right" data-aos-duration={1000} data-aos-offset={50}>
                      <label className="block text-gray-700 font-medium mb-2">{"Lieu d'enrôlement/Retrait *"}</label>
                      <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required>
                          <option>-- Sélectionnez --</option>
                          {['OUAGA 2000', 'KARPALA', 'PISSY', 'KILWIN', 'TAMPOUY', '1200 LOGEMENT'].map((lieu) => (
                              <option key={lieu} value={lieu}>{lieu}</option>
                          ))}
                      </select>
                  </div>

                  <div className="form-group" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>
                      <label className="block text-gray-700 font-medium mb-2">Profession *</label>
                      <div className="space-y-2">
                          <label className="flex items-center space-x-2">
                              <input type="radio" name="profession" value="student" className="form-radio" />
                              <span>Elèves et étudiants</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="radio" name="profession" value="fonctionnaire" className="form-radio" />
                              <span>Fonctionnaires</span>
                          </label>
                          <label className="flex items-center space-x-2">
                              <input type="radio" name="profession" value="autres" className="form-radio" />
                              <span>Autres</span>
                          </label>
                      </div>
                  </div>

                  <div className="form-group" data-aos="fade-right" data-aos-duration={1000} data-aos-offset={50}>
                      <label className="block text-gray-700 font-medium mb-2">Photo</label>
                      <input type="file" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" accept="image/*" />
                      <p className="text-sm text-gray-500 mt-1">(Max: 4Mo)</p>
                  </div>
              </div>

              <div className="mt-8 text-center" data-aos="fade-up" data-aos-duration={1000} data-aos-offset={50}>
                  <button type="submit" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                      Valider
                  </button>
              </div>
          </form>
      </div>
  );
}
