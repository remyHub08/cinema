import  { Link } from 'react-router-dom';
import { Film, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-light pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Film className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold">CineBetty</span>
            </Link>
            <p className="text-gray-400">Experience movies the way they were meant to be seen, on the big screen with premium sound and comfort.</p>
            <div className="flex mt-4 gap-4">
              <a href="https://facebook.com/cinebetty" className="text-gray-400 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/cinebetty" className="text-gray-400 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/cinebetty" className="text-gray-400 hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary">Home</Link></li>
              <li><Link to="/movies" className="text-gray-400 hover:text-primary">Movies</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p>Rutsiro, Rwanda</p>
              <p className="mt-2">
                <a href="mailto:cinebetty@gmail.com" className="hover:text-primary inline-flex items-center gap-1">
                  <Mail size={16} />
                  cinebetty@gmail.com
                </a>
              </p>
              <p className="mt-2">
                <a href="tel:0734616455" className="hover:text-primary">0795824236</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CineBetty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  