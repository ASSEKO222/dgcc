import React from 'react';
import { FileText, BookOpen, Shield, Phone } from 'lucide-react';

const QuickAccess = () => {
  const accessButtons = [
    {
      icon: FileText,
      title: "Déposer une plainte",
      description: "Signalez un problème de consommation",
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white"
    },
    {
      icon: BookOpen,
      title: "Consulter les textes",
      description: "Accédez à la réglementation",
      color: "bg-green-600 hover:bg-green-700",
      textColor: "text-white"
    },
    {
      icon: Shield,
      title: "Vérifier un produit",
      description: "Contrôlez la conformité",
      color: "bg-orange-600 hover:bg-orange-700",
      textColor: "text-white"
    },
    {
      icon: Phone,
      title: "Contacter la DGCC",
      description: "Nos conseillers vous répondent",
      color: "bg-purple-600 hover:bg-purple-700",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Accès rapide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Effectuez vos démarches en quelques clics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessButtons.map((button, index) => {
            const IconComponent = button.icon;
            return (
              <div
                key={index}
                className={`${button.color} rounded-xl p-8 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <IconComponent className={`w-8 h-8 ${button.textColor}`} />
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${button.textColor}`}>
                  {button.title}
                </h3>
                
                <p className={`${button.textColor} opacity-90 text-sm leading-relaxed`}>
                  {button.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Besoin d'aide ?
              </h3>
              <p className="text-gray-600 mb-4">
                Nos équipes sont à votre disposition pour vous accompagner dans vos démarches.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Horaires :</strong> Lundi au vendredi, 9h-17h</p>
                <p><strong>Téléphone :</strong> 0 800 00 00 00 (gratuit)</p>
                <p><strong>Email :</strong> contact@dgcc.gouv.fr</p>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                En urgence
              </h3>
              <p className="text-gray-600 mb-4">
                Pour les signalements urgents ou les situations dangereuses.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Signalement d'urgence
              </button>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                FAQ
              </h3>
              <p className="text-gray-600 mb-4">
                Consultez les réponses aux questions les plus fréquentes.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Consulter la FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;