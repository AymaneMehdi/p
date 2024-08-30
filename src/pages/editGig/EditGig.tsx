import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getGig, updateGig } from '../../services/gigApi';
import { getCategories } from '../../services/categoryApi';
import { motion } from 'framer-motion';

const EditGig: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [gigData, setGigData] = useState<any>({});
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [singleFile, setSingleFile] = useState<File | undefined>(undefined);
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchGig = async () => {
      const data = await getGig(id!);
      setGigData(data);
    };
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchGig();
    fetchCategories();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setGigData({ ...gigData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'coverImage') {
      setSingleFile(e.target.files ? e.target.files[0] : undefined);
    } else if (e.target.name === 'uploadImages') {
      setFiles(Array.from(e.target.files || []));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUploading(true);
    const data = new FormData();
    data.append('title', gigData.title || '');
    data.append('description', gigData.description || '');
    data.append('shortTitle', gigData.shortTitle || '');
    data.append('shortDesc', gigData.shortDesc || '');
    data.append('category', gigData.category || '');
    if (singleFile) {
      data.append('coverImage', singleFile);
    }
    files.forEach((file) => {
      data.append('images', file);
    });

    try {
      await updateGig(id!, data);
      navigate('/my-gigs');
    } catch (error) {
      console.error('Error updating gig:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="edit-gig bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white p-4 pl-20 pr-20"
    >
      <motion.h1
        className="text-5xl font-extrabold text-center text-[#62929E] mt-10 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Edit Gig
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-full mx-auto pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <motion.label
            htmlFor="title"
            className="block mb-3 text-xl font-medium text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Title
          </motion.label>
          <motion.input
            type="text"
            name="title"
            value={gigData.title || ''}
            onChange={handleChange}
            className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
            required
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
        </div>
        <div>
          <motion.label
            htmlFor="description"
            className="block mb-3 text-xl font-medium text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Description
          </motion.label>
          <motion.textarea
            name="description"
            value={gigData.description || ''}
            onChange={handleChange}
            className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
            rows={4}
            required
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.textarea>
        </div>
        <div>
          <motion.label
            htmlFor="shortTitle"
            className="block mb-3 text-xl font-medium text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Service Title
          </motion.label>
          <motion.input
            type="text"
            name="shortTitle"
            value={gigData.shortTitle || ''}
            onChange={handleChange}
            className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
            required
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        <div>
          <motion.label
            htmlFor="shortDesc"
            className="block mb-3 text-xl font-medium text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Short Description
          </motion.label>
          <motion.textarea
            name="shortDesc"
            value={gigData.shortDesc || ''}
            onChange={handleChange}
            className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
            rows={2}
            required
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          ></motion.textarea>
        </div>
        <div>
          <motion.label
            htmlFor="category"
            className="block mb-3 text-xl font-medium text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Category
          </motion.label>
          <motion.select
            name="category"
            value={gigData.category || ''}
            onChange={handleChange}
            className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
            required
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </motion.select>
        </div>
        <div>
          <motion.label
            htmlFor="coverImage"
            className="block mb-3 text-xl font-medium text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cover Image
          </motion.label>
          <motion.input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </div>
        <div>
          <motion.label
            htmlFor="uploadImages"
            className="block mb-3 text-xl font-medium text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Upload Images
          </motion.label>
          <motion.input
            type="file"
            name="uploadImages"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
        </div>
        <motion.button
          type="submit"
          className="w-full px-4 py-3 tracking-wide text-white text-2xl transition-colors rounded-lg duration-200 transform bg-[#62929E] font-semibold mt-20"
          disabled={uploading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {uploading ? 'Updating...' : 'Update Gig'}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default EditGig;
