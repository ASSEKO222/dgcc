import React from 'react';
import { FileText, AlertTriangle, CheckCircle, Clock, TrendingUp, Users, Eye } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Plaintes reçues',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      title: 'Constats enregistrés',
      value: '89',
      change: '+8%',
      changeType: 'increase',
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      title: 'PV générés ce mois',
      value: '34',
      change: '+15%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      title: 'Alertes en attente',
      value: '7',
      change: '-3%',
      changeType: 'decrease',
      icon: AlertTriangle,
      color: 'bg-orange-500'
    }
  ];

  const recentComplaints = [
    {
      id: 'DGCC-2025-001234',
      company: 'SuperMarché Plus',
      type: 'Prix abusifs',
      date: '15 Jan 2025',
      status: 'Nouvelle',
      priority: 'Haute'
    },
    {
      id: 'DGCC-2025-001233',
      company: 'TechStore SARL',
      type: 'Publicité mensongère',
      date: '14 Jan 2025',
      status: 'En traitement',
      priority: 'Moyenne'
    },
    {
      id: 'DGCC-2025-001232',
      company: 'RestauFast',
      type: 'Pratiques déloyales',
      date: '13 Jan 2025',
      status: 'Clôturée',
      priority: 'Basse'
    },
    {
      id: 'DGCC-2025-001231',
      company: 'ModeStyle',
      type: 'Défaut de conformité',
      date: '12 Jan 2025',
      status: 'En traitement',
      priority: 'Haute'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Nouvelle':
        return 'bg-blue-100 text-blue-800';
      case 'En traitement':
        return 'bg-yellow-100 text-yellow-800';
      case 'Clôturée':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Haute':
        return 'bg-red-100 text-red-800';
      case 'Moyenne':
        return 'bg-orange-100 text-orange-800';
      case 'Basse':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600 mt-2">Vue d'ensemble de l'activité DGCC</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">vs mois dernier</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Complaints */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Plaintes récentes</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Voir tout
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentComplaints.map((complaint) => (
                <div key={complaint.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-gray-900">{complaint.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                        {complaint.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(complaint.priority)}`}>
                        {complaint.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{complaint.company} - {complaint.type}</p>
                    <p className="text-xs text-gray-500 mt-1">{complaint.date}</p>
                  </div>
                  <Eye className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Actions rapides</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Créer un nouveau PV</span>
              </button>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Traiter les plaintes en attente</span>
              </button>
              
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Gérer les agents</span>
              </button>
              
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Voir les alertes</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Évolution mensuelle</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Graphique d'activité</p>
            <p className="text-sm text-gray-400">Les données seront affichées ici</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;