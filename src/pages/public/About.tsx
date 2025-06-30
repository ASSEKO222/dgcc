import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

const About = () => {
  const missions = [
    {
      icon: Shield,
      title: "Protection des consommateurs",
      description: "Nous veillons au respect des droits des consommateurs et luttons contre les pratiques commerciales déloyales."
    },
    {
      icon: Users,
      title: "Régulation des marchés",
      description: "Nous surveillons les pratiques anticoncurrentielles et garantissons une concurrence loyale."
    },
    {
      icon: Target,
      title: "Contrôle des prix",
      description: "Nous analysons l'évolution des prix et agissons contre les pratiques abusives."
    },
    {
      icon: Award,
      title: "Qualité et sécurité",
      description: "Nous contrôlons la conformité des produits et services mis sur le marché."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À propos de la DGCC
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              La Direction Générale de la Concurrence et de la Consommation protège les consommateurs 
              et garantit le bon fonctionnement des marchés.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos missions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quatre domaines d'action pour protéger les consommateurs et les entreprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missions.map((mission, index) => {
              const IconComponent = mission.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Créée en 1985, la Direction Générale de la Concurrence et de la Consommation (DGCC) 
                  est l'administration centrale du ministère de l'Économie chargée de la politique de 
                  concurrence et de consommation.
                </p>
                <p>
                  Nous travaillons au quotidien pour garantir le bon fonctionnement des marchés, 
                  protéger les consommateurs et assurer une concurrence loyale entre les entreprises.
                </p>
                <p>
                  Nos équipes d'experts interviennent sur tout le territoire français pour contrôler, 
                  enquêter et sanctionner les pratiques anticoncurrentielles et déloyales.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Équipe DGCC"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              La DGCC en chiffres
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500</div>
              <div className="text-gray-600">Agents sur le territoire</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000</div>
              <div className="text-gray-600">Contrôles par an</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000</div>
              <div className="text-gray-600">Plaintes traitées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">€2M</div>
              <div className="text-gray-600">Amendes prononcées</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;