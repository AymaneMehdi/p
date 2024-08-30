import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../../services/gigApi';
import { useAuth } from '../../context/AuthContext';

type Gig = {
  title: string;
  desc: string;
  coverImage: string;
  images: string[];
  userId: string;
};

const GigDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [gig, setGig] = useState<Gig | null>(null);
  const navigate = useNavigate();
  const { userRole, isLoggedIn } = useAuth();

  useEffect(() => {
    const fetchGig = async () => {
      try {
        const response = await api.get(`/gigs/${id}`);
        setGig(response.data);
      } catch (error) {
        console.error('Error fetching gig:', error);
      }
    };
    fetchGig();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit-gig/${id}`);
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/gigs/${id}`);
      navigate('/my-gigs');
    } catch (error) {
      console.error('Error deleting gig:', error);
    }
  };

  if (!gig) {
    return <div>Loading...</div>;
  }

  const imageUrl = (path: string) => (path ? `${process.env.REACT_APP_API_URL}/${path}` : '');

  return (
    <div className="container mx-auto p-6">
      <motion.h1
        className="text-3xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {gig.title}
      </motion.h1>

      {gig.coverImage && (
        <motion.img
          src={imageUrl(gig.coverImage)}
          alt="Cover"
          className="w-full h-auto rounded-lg shadow-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      )}

      <motion.p
        className="text-lg leading-relaxed text-gray-700 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {gig.desc}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gig.images.map((image: string, index: number) => (
          <motion.img
            key={index}
            src={imageUrl(image)}
            alt={`Gig ${index}`}
            className="w-full h-auto rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          />
        ))}
      </div>

      {isLoggedIn && userRole === 'ADMIN' && gig.userId === localStorage.getItem('userId') && (
        <motion.div
          className="flex justify-center mt-8 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.button
            onClick={handleEdit}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Edit
          </motion.button>
          <motion.button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Delete
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default GigDetails;
