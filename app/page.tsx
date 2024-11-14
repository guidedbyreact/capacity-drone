import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      
      {/* Hero Section avec Vidéo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/videos/linkedin.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black"></div>
          {/* Effet de particules/grille */}
          <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-30"></div>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="space-y-8 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              CAPACITY DRONE
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              L'accés à l'inaccessible
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-400">
              Votre partenaire expert en solutions de drones professionnelles pour des missions variées : 
              inspections industrielles, cartographie, surveillance, détection thermique et bien plus.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Découvrir nos services
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce bg-white/10 backdrop-blur-sm p-2 rounded-full">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Rest of the page content... */}
    </div>
  );
}
