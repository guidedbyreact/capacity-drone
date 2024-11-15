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
            <source src="https://capacity-drone.s3.eu-west-3.amazonaws.com/linkedin.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA6JKEXUS2VYXVWR4V%2F20241115%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241115T103651Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCWV1LXdlc3QtMyJHMEUCIQDb3lKopoCvnmi0ifF7roxHzBRHHmtb0O42qSe%2By9icAgIgSOG2%2B07Mw0lhabjCHU6h8hab%2FYkRukCzegNY%2Fk3d19cq6AIIFBAAGgw5ODIwODEwNTM4NzciDB7fCesWMukDmLCXWirFAkeOMZfP3vWTDnKzDWhQW3%2B63MUuLZqqvpKJu3qjXXEtvPsdSREAi0uQPfaNVqCVoltnEa3xudDB70PHykzWpL6nr2y9327ZyP%2B6u4FvzBIRpigNgLu5hWhrC23fq8dntHpZsA5f8v2e0o7vHsrPE%2B8eUNADS5npPPpHUBQnWzTGpK%2BOXqUwGDcSd02Vl6LhNo7onVulU0l6MTct%2BA4nRPiKNmbyZi4X0e%2BhA78Bmj3eUKcoanuCRdacTnwf1KUb8l2k1%2BMZjEDFIX7d1ic9ss2jgXAbN8HZG2%2FEh4I30yMZs7CTy0kanq9HrIEGjnEjIB1Lon5g4fHHqcqsmL97T8WgrQNZWbmANOjX%2FwuJJEfe3B4D6rwRmU%2FZib9FETKSHjb9Zn1VZrygDGqKcTaP2PZBts0mVAtR%2FRsKac4Jn49bnlUR2OUw6e%2FbuQY6swJtZv2TlHFhA32uxKJi8J9AEp%2BsXUL0PzUcz6W3Zq7dtbVQiKKu4MmAng9SUY8Io2Ott6%2Bgi26wiIzdIPF06yhiDLtPMI9tU5rSBqLt2AUrWUFSajgNzw31ForaBwiKn%2BxPDdxcIi0i2k%2FIuJSxGKBnPCHHjlq561dfe7bHEKvc2L5MlMaQaFimfgI2tn1qNvt5TUCxKPXKE%2Bpb5VO6rJJhrVJ9Da6IF%2FsUd0BIG5WiQ%2F996l1x5lZMoUl8N8nrPe%2Ba2xlSJzqG5fH6wIBGd6y2eWTGZMp5aac6ekAcQ2lT4WY1O9CUi6Ld7SU1%2FgemjNKzS9LXcn1K4Z%2BHnurAkUg1wZBijL37fU0smveqMblhA6vCv06juBFPT%2FyGrPJ5X%2FuhG%2Frgklpc1h7mxLNZBfN5cXKG&X-Amz-Signature=8bd839e3350a2949a88fac1064cd2fca27f06c4dccb70e168d908e2e1fe366da&X-Amz-SignedHeaders=host&response-content-disposition=inline" type="video/mp4" />
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
              L&apos;accés à l&apos;inaccessible...
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
