import React from 'react';
import { BarChart3, Scale, FileText, AlertTriangle } from 'lucide-react';

const QuickInfo = () => {
  const infoCards = [
    {
      icon: BarChart3,
      title: "Observatoire des prix",
      description: "Suivez l'évolution des prix et consultez nos analyses de marché",
      color: "bg-blue-50 text-blue-600",
      hoverColor: "hover:bg-blue-100"
    },
    {
      icon: Scale,
      title: "Droit de la consommation",
      description: "Découvrez vos droits et les recours possibles en tant que consommateur",
      color: "bg-green-50 text-green-600",
      hoverColor: "hover:bg-green-100"
    },
    {
      icon: FileText,
      title: "Déposer une plainte",
      description: "Signalez un problème ou déposez une réclamation en ligne",
      color: "bg-orange-50 text-orange-600",
      hoverColor: "hover:bg-orange-100"
    },
    {
      icon: AlertTriangle,
      title: "Alertes & rappels",
      description: "Consultez les derniers rappels de produits et alertes sécurité",
      color: "bg-red-50 text-red-600",
      hoverColor: "hover:bg-red-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services aux citoyens
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accédez rapidement à nos services et informations essentiels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group ${card.hoverColor}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;