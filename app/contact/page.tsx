export default function ContactPage() {
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
                <a href="/#accueil" className="text-gray-300 hover:text-blue-400 transition-colors py-2">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/#nos-drones" className="text-gray-300 hover:text-blue-400 transition-colors py-2">
                  Nos Drones
                </a>
              </li>
              <li>
                <a href="/#nos-services" className="text-gray-300 hover:text-blue-400 transition-colors py-2">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors py-2">
                  Contactez-nous
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-800">
          <img
            src="/api/placeholder/1920/1080"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Nous sommes là pour répondre à vos besoins
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-400">Informations de contact</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: "📍",
                      title: "Adresse",
                      content: "123 Rue des Drones, 75000 Paris"
                    },
                    {
                      icon: "📞",
                      title: "Téléphone",
                      content: "+33 1 23 45 67 89"
                    },
                    {
                      icon: "📧",
                      title: "Email",
                      content: "contact@capacity-drone.com"
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-6 border border-blue-500/20 rounded-lg backdrop-blur-sm hover:border-blue-500/40 transition-all">
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-blue-300">{item.title}</h3>
                          <p className="text-gray-400">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20">
              <h2 className="text-3xl font-bold text-blue-400 mb-8">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Nom complet *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white"
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Service souhaité *</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white">
                    <option value="">Sélectionnez un service</option>
                    <option value="inspection">Inspection & Surveillance</option>
                    <option value="cartographie">Cartographie et Modélisation 3D</option>
                    <option value="thermique">Détection Thermique</option>
                    <option value="securite">Sécurité & Intervention d'Urgence</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Message *</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-blue-500/20 focus:border-blue-500 focus:outline-none text-white h-32"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
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