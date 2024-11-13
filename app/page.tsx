import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="text-xl font-bold text-blue-400">
              CAPACITY DRONE
            </div>
            {/* Menu Items */}
            <ul className="flex space-x-8">
              <li>
                <a href="#accueil" className="text-gray-300 hover:text-blue-400 transition-colors py-2">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#nos-drones" className="text-gray-300 hover:text-blue-400 transition-colors py-2">
                  Nos Drones
                </a>
              </li>
              <li>
                <a href="#nos-services" className="text-gray-300 hover:text-blue-400 transition-colors py-2">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors py-2">
                  Contactez-nous
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-800">
          <img
            src="/api/placeholder/1920/1080"
            alt="Drone in action"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            CAPACITY DRONE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            L'excellence des services de drones professionnels
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-400">
            Votre partenaire expert en solutions de drones professionnelles pour des missions variées : 
            inspections industrielles, cartographie, surveillance, détection thermique et bien plus.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105">
            Découvrir nos services
          </button>
        </div>
      </section>

      {/* Nos Drones Section */}
      <section id="nos-drones" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-400">
            Nos Drones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Matrice 350 RTK */}
            <div className="bg-gray-800 rounded-lg p-6 transform transition-all hover:scale-105">
              <img
                src="/api/placeholder/400/300"
                alt="Matrice 350 RTK"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-3 text-blue-300">Matrice 350 RTK</h3>
              <p className="text-gray-400">
                Drone professionnel haute précision pour les missions complexes. 
                Idéal pour les inspections industrielles et la cartographie de précision.
              </p>
            </div>

            {/* Mavic 3 Enterprise */}
            <div className="bg-gray-800 rounded-lg p-6 transform transition-all hover:scale-105">
              <img
                src="/api/placeholder/400/300"
                alt="Mavic 3 Enterprise"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-3 text-blue-300">Mavic 3 Enterprise</h3>
              <p className="text-gray-400">
                Drone polyvalent et compact pour les missions de surveillance 
                et d'inspection avec une qualité d'image exceptionnelle.
              </p>
            </div>

            {/* Mavic 3 Thermal */}
            <div className="bg-gray-800 rounded-lg p-6 transform transition-all hover:scale-105">
              <img
                src="/api/placeholder/400/300"
                alt="Mavic 3 Thermal"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-3 text-blue-300">Mavic 3 Thermal</h3>
              <p className="text-gray-400">
                Équipé de capteurs thermiques avancés pour la détection de température 
                et les missions de surveillance thermique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="nos-services" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-400">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-lg backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Inspection & Surveillance</h3>
              <p className="text-gray-400">
                Inspections détaillées de vos infrastructures avec des caméras haute résolution 
                et des capteurs thermiques.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-lg backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Cartographie et Modélisation 3D</h3>
              <p className="text-gray-400">
                Création de cartes précises et modèles 3D pour vos projets d'aménagement 
                et études géographiques.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-lg backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Détection Thermique</h3>
              <p className="text-gray-400">
                Analyse thermique avancée pour la détection des anomalies et la maintenance préventive.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-lg backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Sécurité & Intervention d'Urgence</h3>
              <p className="text-gray-400">
                Surveillance en temps réel et intervention rapide pour la gestion des situations d'urgence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">Contactez-nous</h2>
          <p className="text-xl text-gray-400 mb-12">
            Prêt à découvrir ce que nos drones peuvent faire pour vous ?
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105">
            Obtenir un devis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 CAPACITY DRONE. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
