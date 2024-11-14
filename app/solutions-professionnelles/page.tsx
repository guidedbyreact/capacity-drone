import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
const SolutionsDronePage = () => {

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Hero Section */}
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-blue-900/20 to-black"></div>
        </div>

        {/* Contenu du hero */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Solutions Professionnelles par Drone
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Une gamme complète de services de drones conçus pour répondre aux défis uniques de votre secteur d'activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                Découvrir nos solutions
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all border border-blue-500/20 hover:border-blue-500/40">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Nos Expertises
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industrie",
                description: "Solutions adaptées aux besoins industriels spécifiques.",
                details: [
                  "Inspections de sites",
                  "Maintenance préventive",
                  "Suivi de chantier",
                  "Cartographie industrielle"
                ]
              },
              {
                title: "Collectivités",
                description: "Services dédiés aux collectivités locales et territoriales.",
                details: [
                  "Urbanisme et aménagement",
                  "Surveillance du territoire",
                  "Gestion du patrimoine",
                  "Communications"
                ]
              },
              {
                title: "Sécurité",
                description: "Solutions pour les organisations de sécurité et d'urgence.",
                details: [
                  "Surveillance événementielle",
                  "Gestion de crise",
                  "Recherche et sauvetage",
                  "Sécurité civile"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/30 transition-all">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'activité */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Secteurs d'Activité
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Industrie & BTP",
                description: "Solutions complètes pour le secteur industriel et la construction.",
                applications: [
                  "Inspections de sites industriels",
                  "Suivi de chantiers",
                  "Maintenance industrielle",
                  "Contrôle qualité"
                ]
              },
              {
                title: "Énergie & Utilities",
                description: "Services spécialisés pour le secteur énergétique.",
                applications: [
                  "Inspection des installations",
                  "Audit énergétique",
                  "Surveillance des réseaux",
                  "Maintenance préventive"
                ]
              },
              {
                title: "Collectivités & Urbanisme",
                description: "Solutions pour la gestion et le développement territorial.",
                applications: [
                  "Cartographie urbaine",
                  "Études d'impact",
                  "Suivi environnemental",
                  "Communication"
                ]
              },
              {
                title: "Sécurité & Secours",
                description: "Services pour la sécurité et les interventions d'urgence.",
                applications: [
                  "Surveillance d'événements",
                  "Gestion de crise",
                  "Missions de secours",
                  "Protection civile"
                ]
              }
            ].map((sector, index) => (
              <div key={index} className="group p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-3 text-blue-300">
                      {sector.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{sector.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {sector.applications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Nos Avantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                value: "10+",
                label: "Années d'expertise",
                detail: "Expérience reconnue"
              },
              {
                value: "100%",
                label: "Satisfaction client",
                detail: "Excellence garantie"
              },
              {
                value: "24/7",
                label: "Disponibilité",
                detail: "Service continu"
              },
              {
                value: "500+",
                label: "Missions réalisées",
                detail: "Confiance confirmée"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-blue-500/10 rounded-xl hover:bg-blue-500/20 transition-all">
                <div className="text-2xl font-bold text-blue-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Découvrez comment nos solutions de drones professionnels peuvent répondre à vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Demander un devis
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all border border-blue-500/20 hover:border-blue-500/40">
              En savoir plus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsDronePage;