import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import image1 from './image.png';

const Navbar: React.FC = () => {
  const { isLoggedIn, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-[#b39d7f94] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left - Logo */}
          <div className="flex space-x-4">
            <div>
              <Link to="/" className="flex items-center py-5 px-2 text-white">
                <img className="h-12 w-full mr-2" src={image1} alt="Logo" />
              </Link>
            </div>
          </div>

          {/* Center - About Us */}
          <div className="flex justify-center flex-grow">
            <Link to="/aboutus" className="py-5 px-3 text-white hover:text-gray-200">
              About Us
            </Link>
          </div>

          {/* Right - Links for Login, Register, or User Menu */}
          <div className="flex items-center space-x-1">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="py-5 px-3 text-white hover:text-gray-200">
                  Login
                </Link>
                <Link to="/register" className="py-2 px-3 bg-white text-[#546A7B] rounded hover:bg-gray-200">
                  Register
                </Link>
              </>
            ) : (
              <>
                {userRole === 'USER' && (
                  <>
                    <Link to="/discover-gigs" className="py-5 px-3 text-white hover:text-gray-200">
                      Discover Gigs
                    </Link>
                    <Link to="/rapid-intervention" className="py-5 px-3 text-white hover:text-gray-200">
                      Find a Worker
                    </Link>
                  </>
                )}
                {userRole === 'ADMIN' && (
                  <>
                    <Link to="/dashboard" className="py-5 px-3 text-white hover:text-gray-200">
                      Dashboard
                    </Link>
                    <Link to="/my-gigs" className="py-5 px-3 text-white hover:text-gray-200">
                      My Gigs
                    </Link>
                    <Link to="/add" className="py-5 px-3 text-white hover:text-gray-200">
                      Add Gig
                    </Link>
                  </>
                )}

                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="py-2 px-4 bg-gray-200 rounded-full focus:outline-none"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://www.gravatar.com/avatar?d=mp"
                      alt="Profile"
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      {userRole === 'USER' && (
                        <>
                          <Link to="/messages" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Messages
                          </Link>
                          <Link to="/my-orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            My Orders
                          </Link>
                          <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Profile
                          </Link>
                          <Link to="/become-seller" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Become a Service Provider
                          </Link>
                        </>
                      )}
                      {userRole === 'ADMIN' && (
                        <>
                          <Link to="/messages" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Messages
                          </Link>
                          <Link to="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Orders
                          </Link>
                          <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Profile
                          </Link>
                        </>
                      )}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
