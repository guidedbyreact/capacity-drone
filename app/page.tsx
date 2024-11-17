import Navigation from './components/Navigation'

function Home() {
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
            <source src="https://capacity-drone.s3.eu-west-3.amazonaws.com/linkedin.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA6JKEXUS2Y6OYUM2S%2F20241117%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241117T035932Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMyJGMEQCIH2eNwznyWrr%2FQn%2BbVEU3vwXKE4%2BjFlFW2frEWxKM7ISAiBBxSIeUa4KEf1Z5tcGoMdVDPq6R2IvvThMV8%2BSrM6rsiroAgg9EAAaDDk4MjA4MTA1Mzg3NyIMoEGrTDBpkhJfo1SjKsUCVCytQo45HGKtqte2rTujAp5D6Ou%2FhZ8bxeqd1oNeotO52eO4PcRPAh1pInMbLsPZoIWqXsen6qs%2F8E8NRQhidCpgb3a%2BBdFoE1JGLVNOrMsGUOAg7c5IFflzRZ3xTPJ8zRm3abWOh9NGtH0vuHS4ADFA9epk%2FActYYs9l08e40r18GSGyF93aCz%2B1MvCiTvpqjKlr44s7tE4KzKZlawRsccM6Sl99d%2FCbizHck35A6m5r5qjERMWToPUd4YSSJsDqzzW21LUZwtTsPg9K%2BevvrpY1WoOKMkSo%2BW4sc6tJnLiyrM22V5mrrDd3UZ8LXV6myIfyh9rUOnunm7knZVbf2XYsmF1cRIrq8zMkJ3BPIy64udvExzg1F4ncKRXs6hSEHObjTEcoscobYKuLDMHnfq7UlEU6Yqhlvxv9xQtWoEzEjCPSjDE0%2BW5Bjq0AjAPhYMhnXLw92Q521koYsRaQA82Qypyyp4mmG8P8KC%2Bs6FBBH9QKD6eqhDH8Jq8ieNl9pErvN%2FetbJUe7ggIeC%2BdvxeJKjhyeeQEnI1uuvp85RzdJm4yeRcK1eaED4sP6WPAx%2BBRnrYsZzikg%2FD2baDitCCllb7BApyqFA7wSBlcN0lZSarxwJsCwK%2FJQVfG2JClknpviQiPq0r5L7jh68GkRZZ%2FVxTm61td%2BnWfQpYsj4MC42onu%2FZD2EfL9YV5JPO%2Fnqrze%2BoFHUvPpV6tXTxV%2FY3P%2F4yEH20W6PEFSuDnbT5%2BSlG0x0s9ZF7qnJOGSwYLWl%2F25656ygFBi5vtj%2BdiHPC45UHauJhBaZFK203jhlXRkfuCW7U8jGTpIcsEZPD0nwiLzlXN0V%2BldwUOy9mjBol&X-Amz-Signature=5e65622e7ebd33135e1657601b82346277a45b5d38b60df90f9943762455e358&X-Amz-SignedHeaders=host&response-content-disposition=inline" type="video/mp4" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black"></div>
          {/* Effet de particules/grille */}
          <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-30"></div>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="space-y-8 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            CAPACITY DRONE
          </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              L'excellence des services de drones professionnels
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

export default Home;