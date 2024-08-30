import React, { useState } from 'react';
import { registerUser, RegisterDto } from '../../services/authApi';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import './style.css';
import { Link } from 'react-router-dom';

export const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterDto>({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    phoneNumber: '',
    city: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="relative w-full max-w-3xl mx-auto mt-20 mb-20">
        {/* Background Styling Matches Login */}
        <div className="absolute -top-5 -left-5 -right-5 -bottom-5 rounded-lg bg-gradient-to-r from-[#62929E] via-[#546A7B] to-[#62929E] shadow-lg animate-pulse"></div>
        
        {/* Form Container Styling Matches Login */}
        <div id="form-container" className="bg-white p-16 rounded-lg shadow-2xl relative z-10 transform transition duration-500 ease-in-out">
          <motion.h2 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
            id="form-title" className="text-center text-3xl font-bold mb-10 text-gray-800">REGISTER</motion.h2>
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Input Fields */}
            {['firstName', 'lastName', 'email', 'userName', 'password', 'phoneNumber', 'city'].map((field, index) => (
              <div key={field} className="form-control">
                <motion.input
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                  className="input input-alt"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  name={field}
                  required
                  type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'}
                  value={formData[field as keyof RegisterDto]}
                  onChange={handleChange}
                />
                <span className="input-border input-border-alt"></span>
              </div>
            ))}
            
            {/* Submit Button */}
            <div className="flex justify-center items-center pt-5">
              <motion.button 
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                type="submit"
                className="button flex justify-center items-center sm:w-[640px] w-[300px] sm:h-20 h-[100px]">
                  <span className="button_lg sm:w-[590px] w-[250px] sm:h-12 h-[50px] items-center">
                  <span className="button_sl"></span>
                  <span className="button_text flex justify-center items-center">Sign up</span>
                </span>
              </motion.button>
            </div>

            {/* Link to Login Page */}
            <div className="flex justify-center items-center mt-6">
              <Link to="/login">
                <motion.button 
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                  className="button flex justify-center items-center sm:w-[640px] w-[300px] sm:h-20 h-[100px]">
                  <span className="button_lg sm:w-[590px] w-[250px] sm:h-12 items-center">
                    <span className="button_sl"></span>
                    <span className="button_text flex justify-center items-center">Already have an account? Sign in</span>
                  </span>
                </motion.button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
