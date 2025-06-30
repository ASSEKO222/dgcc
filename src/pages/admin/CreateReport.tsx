import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save, FileText, Upload, X, Download } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ReportFormData {
  // General Information
  date: string;
  location: string;
  agent: string;
  violationType: string;
  
  // Company Information
  companyName: string;
  rccm: string;
  address: string;
  sector: string;
  
  // Findings
  findings: string;
  violatedArticles: string[];
  
  // Sanctions
  proposedSanctions: string;
  comments: string;
}

const CreateReport = () => {
  const { complaintId } = useParams();
  const [currentTab, setCurrentTab] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<ReportFormData>({
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
      agent: 'Agent DGCC - Jean Dupont'
    }
  });

  const tabs = [
    'Informations générales',
    'Entreprise concernée',
    'Détails du constat',
    'Pièces jointes',
    'Sanctions proposées'
  ];

  const violationTypes = [
    'Pratiques commerciales déloyales',
    'Prix abusifs',
    'Publicité mensongère',
    'Défaut de conformité',
    'Clauses abusives',
    'Vente forcée',
    'Autre'
  ];

  const legalArticles = [
    'Article L121-1 du Code de la consommation',
    'Article L121-2 du Code de la consommation',
    'Article L121-3 du Code de la consommation',
    'Article L132-1 du Code de la consommation',
    'Article L441-1 du Code de commerce',
    'Article L442-6 du Code de commerce'
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const generatePDF = async (data: ReportFormData) => {
    setIsGenerating(true);
    
    // Simulate PDF generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Here you would use a library like jsPDF or call an API
    console.log('Generating PDF with data:', data);
    console.log('Files:', files);
    
    setIsGenerating(false);
    alert('Procès-verbal généré avec succès !');
  };

  const onSubmit = (data: ReportFormData) => {
    generatePDF(data);
  };

  const nextTab = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };

  const prevTab = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
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
            <h1 className="text-3xl font-bold text-gray-900">Créer un procès-verbal</h1>
            {complaintId && (
              <p className="text-gray-600 mt-1">Basé sur la plainte {complaintId}</p>
            )}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setCurrentTab(index)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  currentTab === index
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          {/* Tab 0: General Information */}
          {currentTab === 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Informations générales</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date du constat *
                  </label>
                  <input
                    type="date"
                    {...register('date', { required: 'La date est requise' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.date && (
                    <p className="text-red-600 text-sm mt-1">{errors.date.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lieu du constat *
                  </label>
                  <input
                    type="text"
                    {...register('location', { required: 'Le lieu est requis' })}
                    placeholder="Adresse complète du lieu de constat"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.location && (
                    <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Agent responsable *
                  </label>
                  <input
                    type="text"
                    {...register('agent', { required: 'L\'agent est requis' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.agent && (
                    <p className="text-red-600 text-sm mt-1">{errors.agent.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type d'infraction *
                  </label>
                  <select
                    {...register('violationType', { required: 'Le type d\'infraction est requis' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un type</option>
                    {violationTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.violationType && (
                    <p className="text-red-600 text-sm mt-1">{errors.violationType.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab 1: Company Information */}
          {currentTab === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Entreprise concernée</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Raison sociale *
                  </label>
                  <input
                    type="text"
                    {...register('companyName', { required: 'La raison sociale est requise' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.companyName && (
                    <p className="text-red-600 text-sm mt-1">{errors.companyName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro RCCM
                  </label>
                  <input
                    type="text"
                    {...register('rccm')}
                    placeholder="Registre du Commerce et du Crédit Mobilier"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse complète *
                  </label>
                  <textarea
                    rows={3}
                    {...register('address', { required: 'L\'adresse est requise' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.address && (
                    <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Secteur d'activité *
                  </label>
                  <input
                    type="text"
                    {...register('sector', { required: 'Le secteur est requis' })}
                    placeholder="Ex: Commerce de détail, Restauration..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.sector && (
                    <p className="text-red-600 text-sm mt-1">{errors.sector.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Findings */}
          {currentTab === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Détails du constat</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description des faits constatés *
                </label>
                <textarea
                  rows={8}
                  {...register('findings', { required: 'La description est requise' })}
                  placeholder="Décrivez précisément les faits constatés, les preuves collectées, les témoignages recueillis..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.findings && (
                  <p className="text-red-600 text-sm mt-1">{errors.findings.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Articles de loi violés
                </label>
                <div className="space-y-2 max-h-48 overflow-y-auto border border-gray-300 rounded-lg p-3">
                  {legalArticles.map((article) => (
                    <label key={article} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={article}
                        {...register('violatedArticles')}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{article}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Attachments */}
          {currentTab === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Pièces jointes</h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    Ajoutez des photos, documents ou preuves
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Formats acceptés: PDF, JPG, PNG, HEIC (max 10MB par fichier)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.heic"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors"
                  >
                    Sélectionner des fichiers
                  </label>
                </div>
              </div>

              {files.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">Fichiers sélectionnés:</h3>
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <span className="text-sm text-gray-700">{file.name}</span>
                        <span className="text-xs text-gray-500">
                          ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Sanctions */}
          {currentTab === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Sanctions proposées</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sanctions proposées
                </label>
                <textarea
                  rows={6}
                  {...register('proposedSanctions')}
                  placeholder="Décrivez les sanctions proposées (avertissement, amende, fermeture temporaire...)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Commentaires additionnels
                </label>
                <textarea
                  rows={4}
                  {...register('comments')}
                  placeholder="Commentaires, recommandations ou observations particulières..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevTab}
              disabled={currentTab === 0}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Précédent
            </button>

            <div className="flex items-center space-x-3">
              {currentTab < tabs.length - 1 ? (
                <button
                  type="button"
                  onClick={nextTab}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Génération...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Générer le PV</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReport;