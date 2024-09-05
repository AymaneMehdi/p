import React, { useState } from 'react';
import { loginUser, LoginDto } from '../../services/authApi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './style.css';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginDto>({
    userName: '',
    password: ''
  });
  const { login } = useAuth();
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
      const response = await loginUser(formData);
      login(formData.userName, response.token, response.role);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('Login failed. Please check your credentials.');
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-green-700 via-green-900 to-black">
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="absolute -top-5 -left-5 -right-5 -bottom-5 rounded-lg bg-gradient-to-r from-[#0cb151] via-[#148b46] to-[#0cb151] shadow-lg animate-pulse"></div>
        <div id="form-container" className="bg-white p-16 rounded-lg shadow-2xl relative z-10 transform transition duration-500 ease-in-out">
          <motion.h2 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
            id="form-title" className="text-center text-3xl font-bold mb-10 text-green-700">LOGIN</motion.h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="form-control">
              <motion.input
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                className="input input-alt"
                placeholder="Username"
                name="userName"
                required
                type="text"
                value={formData.userName}
                onChange={handleChange}
              />
              <span className="input-border input-border-alt"></span>
            </div>
            <div className="form-control">
              <motion.input
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                className="input input-alt"
                placeholder="Password"
                name="password"
                required
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span className="input-border input-border-alt"></span>
            </div>
            <div className="flex justify-center items-center pt-5">
              <motion.button 
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                type="submit"
                className="button flex justify-center items-center sm:w-[640px] w-[300px] sm:h-20 h-[100px]">
                  <span className="button_lg sm:w-[590px] w-[200px] sm:h-12 items-center">
                  <span className="button_sl"></span>
                  <span className="button_text flex justify-center items-center">Sign in</span>
                </span>
              </motion.button>
            </div>
            <div className="flex justify-center items-center">
            <Link to="/register">
              <motion.button 
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                type="submit"
                className="button flex justify-center items-center sm:w-[640px] w-[230px] sm:h-20 h-[100px]">
                  <span className="button_lg sm:w-[590px] w-[200px] sm:h-12 h-11 items-center">
                  <span className="button_sl"></span>
                  <span className="button_text flex justify-center items-center">REGISTER</span>
                </span>
              </motion.button>
              </Link>
            </div>
            <motion.a 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
              id="form-title" className="text-center font-bold mb-10 text-green-700 hover:text-green-800 text-lg sm:ml-64 ml-0" href="#">Forgot Password?</motion.a>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
