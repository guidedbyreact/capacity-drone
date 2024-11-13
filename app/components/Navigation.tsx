export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-blue-400">
            CAPACITY DRONE
          </a>
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
            <li className="relative group">
              <a href="/#nos-services" className="text-gray-300 hover:text-blue-400 transition-colors py-2">
                Nos Services
              </a>
              {/* Sous-menu */}
              <div className="absolute left-0 mt-2 w-64 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100">
                <div className="py-2">
                  <a href="/solutions-professionnelles" className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50">
                    Solutions Professionnelles
                  </a>
                  <a href="/inspection-drones" className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50">
                    Inspection et Surveillance
                  </a>
                  <a href="/cartographie" className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50">
                    Cartographie et modélisation 3D
                  </a>
                  <a href="/detection-thermique" className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50">
                    Détection thermique
                  </a>
                  <a href="/securite-intervention" className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50">
                    Sécurité et intervention d'urgence
                  </a>
                </div>
              </div>
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
  );
} 