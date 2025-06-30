import React from 'react';
import { Scale, Shield, Eye, Gavel } from 'lucide-react';

const Missions = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nos Missions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl">
            <Scale className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Concurrence</h2>
            <p className="text-gray-600">
              Nous veillons au respect des règles de concurrence et luttons contre les pratiques anticoncurrentielles.
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-xl">
            <Shield className="w-12 h-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Protection des consommateurs</h2>
            <p className="text-gray-600">
              Nous protégeons les droits des consommateurs et luttons contre les pratiques commerciales déloyales.
            </p>
          </div>
          
          <div className="bg-orange-50 p-8 rounded-xl">
            <Eye className="w-12 h-12 text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Surveillance des marchés</h2>
            <p className="text-gray-600">
              Nous surveillons les prix et analysons le fonctionnement des marchés.
            </p>
          </div>
          
          <div className="bg-purple-50 p-8 rounded-xl">
            <Gavel className="w-12 h-12 text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sanctions</h2>
            <p className="text-gray-600">
              Nous sanctionnons les entreprises qui ne respectent pas la réglementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;