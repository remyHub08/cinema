import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to the terms';
    }
    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form submission logic here (API call, etc.)
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      });
      setFormErrors({});
      alert('Thank you for signing up to CineBetty VIP!');
      setShowSignUpForm(false);
    } else {
      setFormErrors(errors);
    }
  };

  // Types for form data and errors
  interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
  }
  interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    agreeTerms?: string;
  }

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Now Showing</h2>
            <Link to="/movies" className="flex items-center text-primary hover:underline">
              View All <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map(movie => (
              <MovieCard 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                genre={movie.genre}
                image={movie.image}
                rating={movie.rating}
                duration={movie.duration}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our CineBetty VIP Experience</h2>
              <p className="text-gray-300 mb-6">Sign up for our membership program and enjoy exclusive benefits:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="bg-primary h-2 w-2 rounded-full mt-2 mr-3"></span>
                  <span>Discounted ticket prices and concessions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary h-2 w-2 rounded-full mt-2 mr-3"></span>
                  <span>Early access to special screenings and events</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary h-2 w-2 rounded-full mt-2 mr-3"></span>
                  <span>Earn points with every purchase and redeem for free movies</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary h-2 w-2 rounded-full mt-2 mr-3"></span>
                  <span>Birthday rewards and special offers</span>
                </li>
              </ul>

              {!showSignUpForm ? (
                <button 
                  onClick={() => setShowSignUpForm(true)}
                  className="btn btn-primary"
                >
                  Sign Up
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {formErrors.confirmPassword && <p className="text-red-500 text-sm mt-1">{formErrors.confirmPassword}</p>}
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="w-4 h-4 rounded bg-gray-800 border-gray-700 focus:ring-primary"
                      />
                    </div>
                    <label htmlFor="agreeTerms" className="ml-2 text-sm">
                      I agree to the <Link to="/terms" className="text-primary hover:underline">Terms and Conditions</Link>
                    </label>
                    {formErrors.agreeTerms && <p className="text-red-500 text-sm mt-1">{formErrors.agreeTerms}</p>}
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Join VIP
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowSignUpForm(false)}
                      className="btn btn-outline"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://i.pinimg.com/736x/d4/82/66/d4826636c47e2cf6579fbf042108841a.jpg" 
                alt="Cinema experience" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;