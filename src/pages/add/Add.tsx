import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { createGig } from '../../services/gigApi';
import { getCategories } from '../../services/categoryApi';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import Framer Motion

const Add: React.FC = () => {
  const [singleFile, setSingleFile] = useState<File | undefined>(undefined);
  const [files, setFiles] = useState<File[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    shortTitle: '',
    shortDesc: '',
    category: '',
  });

  const navigate = useNavigate();

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUploading(true);
    const data = new FormData();
    data.append('Title', formData.title);
    data.append('Desc', formData.description);
    data.append('ShortTitle', formData.shortTitle);
    data.append('ShortDesc', formData.shortDesc);
    data.append('CategoryId', formData.category);
    if (singleFile) {
      data.append('CoverImage', singleFile);
    }
    files.forEach((file) => {
      data.append('Images', file);
    });

    try {
      await createGig(data);
      navigate('/my-gigs');
    } catch (error) {
      console.error('Error creating gig:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="overflow-hidden pt-20 pb-20 pl-20 pr-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="px-8 py-10">
        <motion.h2
          className="text-5xl font-extrabold text-center text-[#62929E]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        >
          Add New Gig
        </motion.h2>
        <p className="text-center text-2xl mt-5 text-white">
          Provide the details of your new gig below.
        </p>
        <div className="mt-10 space-y-6">
          {['title', 'description', 'shortTitle', 'shortDesc'].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <label className="block mb-3 text-xl font-medium text-white" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              {field.includes('Desc') ? (
                <textarea
                  name={field}
                  placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                  rows={field.includes('shortDesc') ? 2 : 4}
                  required
                ></textarea>
              ) : (
                <input
                  type="text"
                  name={field}
                  placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                  required
                />
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <label className="block mb-3 text-xl font-medium text-white" htmlFor="category">
              Category
            </label>
            <select
              name="category"
              onChange={handleChange}
              className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <label className="block mb-3 text-xl font-medium text-white" htmlFor="coverImage">
              Cover Image
            </label>
            <input
              type="file"
              onChange={(e) => setSingleFile(e.target.files ? e.target.files[0] : undefined)}
              className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <label className="block mb-3 text-xl font-medium text-white" htmlFor="uploadImages">
              Upload Images
            </label>
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(Array.from(e.target.files || []))}
              className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <button
              type="submit"
              className="w-full px-4 py-3 tracking-wide text-white transition-colors rounded-lg duration-200 transform bg-[#62929E] text-2xl font-semibold mt-10"
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Create'}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.form>
  );
};

export default Add;
