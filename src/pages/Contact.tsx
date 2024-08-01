import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaEdit, FaTrashAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../components/ui/Input";
import React, { useState, ChangeEvent, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient'; // Assurez-vous que le chemin est correct
import Alert from '../components/ui/Alert';

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+261342758301" },
  { icon: <FaEnvelope />, title: "Email", description: "andryfotsiny1410@gmail.com" },
  { icon: <FaMapMarkedAlt />, title: "Address", description: "Lot 503a1/3710 Ampitakely Fianarantsoa Madagascar" },
];

const options = ["Fullstack", "Front-End", "Back-end", "React", "VueJs", "Python", "PHP", "Java", "C++", "C#", "R"];

const Contact: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [companies, setCompanies] = useState<any[]>([]);
  const [companyName, setCompanyName] = useState<string>('');
  const [companyEmail, setCompanyEmail] = useState<string>('');
  const [companyLanguage, setCompanyLanguage] = useState<string>('');
  const [companyDescription, setCompanyDescription] = useState<string>('');
  const [editingCompanyId, setEditingCompanyId] = useState<number | null>(null);
  const [alert, setAlert] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOptions(prev =>
      prev.includes(value) ? prev.filter(option => option !== value) : [...prev, value]
    );
  };

  const fetchCompanies = async () => {
    const { data, error } = await supabase
      .from('companie')
      .select('*');

    if (error) {
      console.error('Error fetching companies:', error);
    } else {
      setCompanies(data || []);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleAddCompany = async () => {
    const { data, error } = await supabase
      .from('companie')
      .insert([
        { name: companyName, email: companyEmail, language: selectedOptions.join(', '), description: companyDescription }
      ]);

    if (error) {
      console.error('Error adding company:', error);
      setAlert({ message: 'Erreur lors de l\'ajout de l\'entreprise!', type: 'error' });
    } else {
      setAlert({ message: 'Entreprise ajoutée avec succès!', type: 'success' });
      fetchCompanies();
      setCompanyName('');
      setCompanyEmail('');
      setCompanyLanguage('');
      setCompanyDescription('');
      setSelectedOptions([]);
    }
  };

  const handleEditCompany = async (id: number) => {
    const { data, error } = await supabase
      .from('companie')
      .update({ name: companyName, email: companyEmail, language: selectedOptions.join(', '), description: companyDescription })
      .eq('id', id);

    if (error) {
      console.error('Error updating company:', error);
      setAlert({ message: 'Erreur lors de la modification de l\'entreprise!', type: 'error' });
    } else {
      setAlert({ message: 'Entreprise modifiée avec succès!', type: 'success' });
      fetchCompanies();
      setCompanyName('');
      setCompanyEmail('');
      setCompanyLanguage('');
      setCompanyDescription('');
      setSelectedOptions([]);
      setEditingCompanyId(null);
    }
  };

  const handleDeleteCompany = async (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette entreprise?')) {
      const { data, error } = await supabase
        .from('companie')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting company:', error);
        setAlert({ message: 'Erreur lors de la suppression de l\'entreprise!', type: 'error' });
      } else {
        setAlert({ message: 'Entreprise supprimée avec succès!', type: 'success' });
        fetchCompanies();
      }
    }
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="p-5">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h[54%] order-2 xl:order-none">
            <form className="flex xl:w-[500px] flex-col gap-6 p-10 dark:text-gray-200 dark:bg-gray-800 bg-white rounded-xl">
              <h3 className="text-4xl text-accent">Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Entreprise"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="w-full dark:text-gray-200 dark:bg-gray-800 bg-white border-2 border-gray-400 rounded p-1">
                  {options.map((option, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="checkbox"
                          value={option}
                          checked={selectedOptions.includes(option)}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <textarea
                  className="w-full h-[100px] dark:text-gray-200 dark:bg-gray-800 bg-white border-2 border-gray-400 rounded"
                  placeholder="Type text"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="border border-blue-500 max-w-40 text-blue-500 rounded p-2 hover:bg-blue-500 hover:text-white transition"
                onClick={() => editingCompanyId ? handleEditCompany(editingCompanyId) : handleAddCompany()}
              >
                {editingCompanyId ? 'Modifier' : 'Ajouter'}
              </button>
            </form>
          </div>
          <div className="flex-1 flex order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] dark:text-gray-200 dark:bg-gray-800 bg-white rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full overflow-x-auto">
            <p className="text-xl font-semibold mb-2">Tableau</p>
            <p className="mb-4">Liste des entreprises qui me contactent </p>
            <table className=" bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className=" dark:bg-gray-900">
                  <th className="py-2 px-4">Nom</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Langues</th>
                  <th className="py-2 px-4">Description</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr key={company.id} className="border-b dark:border-gray-700">
                    <td className="py-2 px-4">{company.name}</td>
                    <td className="py-2 px-4">{company.email}</td>
                    <td className="py-2 px-4">{company.language}</td>
                    <td className="py-2 px-4">{company.description}</td>
                    <td className="py-2 px-4 flex items-center">
                      <button
                        className="mr-2 text-blue-500 hover:text-blue-700"
                        onClick={() => {
                          setEditingCompanyId(company.id);
                          setCompanyName(company.name);
                          setCompanyEmail(company.email);
                          setSelectedOptions(company.language.split(', '));
                          setCompanyDescription(company.description);
                        }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteCompany(company.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {alert && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact;
