import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Building, Calendar, FileText, Download, PlusCircle } from 'lucide-react';

const ComplaintDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on ID
  const complaint = {
    id: 'DGCC-2025-001234',
    firstName: 'Marie',
    lastName: 'Dupont',
    email: 'marie.dupont@email.com',
    phone: '06 12 34 56 78',
    city: 'Paris',
    company: 'SuperMarché Plus',
    type: 'Prix abusifs',
    description: 'Augmentation injustifiée des prix sur les produits de première nécessité. Les prix ont augmenté de 30% en une semaine sans justification apparente. Les produits concernés sont principalement les fruits et légumes, ainsi que les produits laitiers. Cette situation met en difficulté de nombreuses familles du quartier.',
    date: '15 Jan 2025',
    status: 'Nouvelle',
    priority: 'Haute',
    attachments: [
      { name: 'facture_supermarche.pdf', size: '245 KB', type: 'PDF' },
      { name: 'photo_etiquettes.jpg', size: '1.2 MB', type: 'Image' },
      { name: 'comparaison_prix.xlsx', size: '89 KB', type: 'Excel' }
    ]
  };

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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/admin/complaints"
            className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Détail de la plainte</h1>
            <p className="text-gray-600 mt-1">{complaint.id}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(complaint.status)}`}>
            {complaint.status}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(complaint.priority)}`}>
            Priorité {complaint.priority}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Complaint Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Détails de la plainte</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Type de plainte</h3>
                <p className="text-gray-900">{complaint.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Date de dépôt</h3>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400"  />
                  <span className="text-gray-900">{complaint.date}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Description</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-900 leading-relaxed">{complaint.description}</p>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Entreprise concernée</h2>
            <div className="flex items-center space-x-3">
              <Building className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">{complaint.company}</p>
                <p className="text-sm text-gray-600">Informations complémentaires à collecter</p>
              </div>
            </div>
          </div>

          {/* Attachments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pièces jointes ({complaint.attachments.length})</h2>
            <div className="space-y-3">
              {complaint.attachments.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{file.type} • {file.size}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Complainant Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations du plaignant</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">
                    {complaint.firstName} {complaint.lastName}
                  </p>
                  <p className="text-sm text-gray-600">Particulier</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <p className="text-gray-600">{complaint.email}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Téléphone:</span>
                  <p className="text-gray-600">{complaint.phone}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Ville:</span>
                  <p className="text-gray-600">{complaint.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Actions</h2>
            <div className="space-y-3">
              <Link
                to={`/admin/create-report/${complaint.id}`}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Créer un constat</span>
              </Link>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                Marquer comme traitée
              </button>
              
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                Demander des informations
              </button>
              
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                Clôturer la plainte
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Historique</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Plainte reçue</p>
                  <p className="text-xs text-gray-500">{complaint.date}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-600">En attente de traitement</p>
                  <p className="text-xs text-gray-500">Assigné automatiquement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetail;