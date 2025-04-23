
import { Heart, Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-trupahadi-green-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">TruPahadi</h3>
            <p className="mb-4 text-gray-200">
              From the Hills to Your Home, Pure & Authentic. Bringing nature's finest produce from Uttarakhand.
            </p>
           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-trupahadi-earth-light transition">About Us</a></li>
              <li><a href="#founder" className="hover:text-trupahadi-earth-light transition">Founder's Story</a></li>
              <li><a href="#mission" className="hover:text-trupahadi-earth-light transition">Mission & Vision</a></li>
              <li><a href="#investors" className="hover:text-trupahadi-earth-light transition">Investor Corner</a></li>
              <li><a href="#products" className="hover:text-trupahadi-earth-light transition">Our Products</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1" />
                <span>+91 87918 99488</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1" />
                <span>info@trupahadi.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span>Rishihood University, Sonipat, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white text-trupahadi-green-dark p-2 rounded-full hover:bg-trupahadi-earth-light transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white text-trupahadi-green-dark p-2 rounded-full hover:bg-trupahadi-earth-light transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white text-trupahadi-green-dark p-2 rounded-full hover:bg-trupahadi-earth-light transition">
                <Twitter size={20} />
              </a>
            </div>
            <div className="mt-6">
              <div className="flex items-center mb-2">
                <Leaf size={18} className="mr-2" />
                <span>100% Organic Certified</span>
              </div>
              <div className="flex items-center">
                <Leaf size={18} className="mr-2" />
                <span>FSSAI Approved</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} Trupahadi. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
