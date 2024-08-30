import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { getProfile, updateProfile } from '../../services/profileApi';

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    city: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
        setFormData({
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          city: data.city,
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      setEditMode(false);
      const updatedProfile = await getProfile();
      setProfile(updatedProfile);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="user-profile bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white p-4 md:pl-20 md:pr-20">
      <motion.h1
        className="text-5xl font-extrabold text-center text-[#62929E] mt-10 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        User Profile
      </motion.h1>
      {profile ? (
        editMode ? (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-full mx-auto pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {['firstName', 'lastName', 'phoneNumber', 'city'].map((field, index) => (
              <div key={field}>
                <motion.label
                  htmlFor={field}
                  className="block mb-3 text-xl font-medium text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </motion.label>
                <motion.input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white rounded-lg focus:border-[#62929E] focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                />
              </div>
            ))}
            <motion.button
              type="submit"
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Save
            </motion.button>
          </motion.form>
        ) : (
          <div>
            {['firstName', 'lastName', 'phoneNumber', 'city'].map((field, index) => (
              <motion.p
                key={field}
                className="mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {profile[field]}
              </motion.p>
            ))}
            <motion.button
              onClick={() => setEditMode(true)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Edit
            </motion.button>
          </div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserProfile;
