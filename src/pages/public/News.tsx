import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Nouvelle réglementation sur les pratiques commerciales déloyales",
      excerpt: "Les nouvelles mesures renforcent la protection des consommateurs face aux pratiques commerciales abusives. Cette réglementation entre en vigueur le 1er février 2025.",
      date: "15 janvier 2025",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Réglementation",
      content: "Le ministère de l'Économie annonce l'entrée en vigueur de nouvelles mesures..."
    },
    {
      id: 2,
      title: "Baisse des prix de l'énergie : analyse de la DGCC",
      excerpt: "Notre observatoire des prix publie son rapport trimestriel sur l'évolution des tarifs énergétiques et leur impact sur les consommateurs.",
      date: "12 janvier 2025",
      image: "https://images.pexels.com/photos/4792484/pexels-photo-4792484.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Analyse",
      content: "L'observatoire des prix de la DGCC révèle une tendance à la baisse..."
    },
    {
      id: 3,
      title: "Rappel de produits alimentaires : mesures d'urgence",
      excerpt: "Suite à des contrôles sanitaires, plusieurs produits sont rappelés par précaution. Les consommateurs sont invités à vérifier leurs achats.",
      date: "10 janvier 2025",
      image: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Sécurité",
      content: "La DGCC annonce le rappel immédiat de plusieurs références..."
    },
    {
      id: 4,
      title: "Lutte contre les arnaques en ligne : bilan 2024",
      excerpt: "Découvrez les actions menées par la DGCC pour protéger les consommateurs des fraudes numériques et les résultats obtenus.",
      date: "8 janvier 2025",
      image: "https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Protection",
      content: "Le bilan 2024 de la lutte contre les arnaques en ligne..."
    },
    {
      id: 5,
      title: "Contrôles renforcés dans la grande distribution",
      excerpt: "La DGCC intensifie ses contrôles dans les grandes surfaces pour vérifier le respect des prix affichés et des promotions.",
      date: "5 janvier 2025",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Contrôle",
      content: "Dans le cadre de sa mission de protection des consommateurs..."
    },
    {
      id: 6,
      title: "Formation des agents : nouvelles compétences",
      excerpt: "Les agents de la DGCC bénéficient de formations spécialisées pour mieux appréhender les enjeux du commerce électronique.",
      date: "3 janvier 2025",
      image: "https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Formation",
      content: "Un programme de formation ambitieux a été lancé..."
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Réglementation': 'bg-blue-100 text-blue-800',
      'Analyse': 'bg-green-100 text-green-800',
      'Sécurité': 'bg-red-100 text-red-800',
      'Protection': 'bg-purple-100 text-purple-800',
      'Contrôle': 'bg-orange-100 text-orange-800',
      'Formation': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Actualités DGCC
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Suivez nos dernières actions, décisions et analyses pour rester informé 
            de l'évolution de la protection des consommateurs
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;