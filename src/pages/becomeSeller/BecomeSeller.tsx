import React, { useEffect, useState } from 'react';
import { makeAdmin } from '../../services/authApi';
import { getCategories } from '../../services/categoryApi';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const BecomeSeller: React.FC = () => {
  const { isLoggedIn, username } = useAuth();
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [idImage, setIdImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const { value } = e.target;
    setSelectedCategories((prev) => {
      const newCategories = [...prev];
      newCategories[index] = value;
      return newCategories;
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIdImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!isLoggedIn || !username) {
      alert('No user is logged in');
      return;
    }

    if (selectedCategories.length < 1 || selectedCategories.length > 3) {
      alert('Please select between 1 and 3 categories');
      return;
    }

    if (!idImage) {
      alert('Please upload an ID image');
      return;
    }

    const formData = new FormData();
    formData.append('UserName', username);
    selectedCategories.forEach((category, index) => {
      formData.append(`CategoryIds[${index}]`, category);
    });
    formData.append('IdImage', idImage);

    try {
      await makeAdmin(formData);
      alert('You are now a service provider!');
    } catch (error) {
      console.error('Error making admin:', error);
      alert('There was an error processing your request.');
    }
  };

  return (
    <motion.div
      className="overflow-hidden pt-20 pb-20 pl-20 pr-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="px-8 py-10">
        <motion.h1
          className="text-5xl font-extrabold text-center text-[#62929E]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        >
          Become a Service Provider
        </motion.h1>
        <p className="text-center text-2xl mt-5 text-white">
          Choose up to three categories and upload your ID image.
        </p>
        <div className="mt-10 space-y-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <label className="block mb-3 text-xl font-medium text-white">
                Select Category {index + 1}:
              </label>
              <select
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                onChange={(e) => handleCategoryChange(e, index)}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <label className="block mb-3 text-xl font-medium text-white">Upload ID Image:</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </motion.div>
        <motion.button
          onClick={handleSubmit}
          className="w-full px-4 py-3 tracking-wide text-white transition-colors rounded-lg duration-200 transform bg-[#62929E] text-2xl font-semibold mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Become a Service Provider
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BecomeSeller;
