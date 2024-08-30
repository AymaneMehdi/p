import React, { useEffect, useState } from 'react';
import { getGigs, deleteGig } from '../../services/gigApi';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MyGigs: React.FC = () => {
  const { isLoggedIn, userRole } = useAuth();
  const [gigs, setGigs] = useState<any[]>([]);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await getGigs();
        setGigs(response);
      } catch (error) {
        console.error('Error fetching gigs:', error);
      }
    };

    if (isLoggedIn && userRole === 'ADMIN') {
      fetchGigs();
    }
  }, [isLoggedIn, userRole]);

  const handleDelete = async (id: string) => {
    try {
      await deleteGig(id);
      setGigs(gigs.filter(gig => gig.id !== id));
    } catch (error) {
      console.error('Error deleting gig:', error);
    }
  };

  return (
    <motion.div
      className="my-gigs bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white p-4 pl-20 pr-20 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-center text-[#62929E] mt-10 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Gigs
      </motion.h1>
      {gigs.length === 0 ? (
        <motion.p
          className="text-center text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No gigs found.
        </motion.p>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.3 } }
          }}
        >
          {gigs.map((gig) => (
            <motion.div
              key={gig.id}
              className="border border-[#62929E] p-6 rounded-lg shadow-lg bg-gray-800"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[#D4A5A5]">{gig.title}</h2>
              <Link to={`/gig/${gig.id}`} className="text-blue-400 hover:underline text-lg">View Details</Link>
              <div className="mt-4 flex space-x-4">
                <Link to={`/edit-gig/${gig.id}`} className="text-yellow-400 hover:underline text-lg">Edit</Link>
                <button
                  onClick={() => handleDelete(gig.id)}
                  className="text-red-400 hover:underline text-lg"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default MyGigs;
