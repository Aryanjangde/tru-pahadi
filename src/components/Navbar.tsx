
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-trupahadi-green">
          TruPahadi
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground hover:text-trupahadi-green transition">About Us</a>
          <a href="#founder" className="text-foreground hover:text-trupahadi-green transition">Founder's Story</a>
          <a href="#mission" className="text-foreground hover:text-trupahadi-green transition">Mission & Vision</a>
          <a href="#investors" className="text-foreground hover:text-trupahadi-green transition">Investor Corner</a>
          <a href="#contact" className="btn-primary">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white w-full absolute transition-all duration-300 ${isOpen ? 'max-h-96 py-4 shadow-md' : 'max-h-0 overflow-hidden'}`}>
        <div className="container-custom flex flex-col space-y-4">
          <a href="#about" className="text-foreground hover:text-trupahadi-green transition" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#founder" className="text-foreground hover:text-trupahadi-green transition" onClick={() => setIsOpen(false)}>Founder's Story</a>
          <a href="#mission" className="text-foreground hover:text-trupahadi-green transition" onClick={() => setIsOpen(false)}>Mission & Vision</a>
          <a href="#investors" className="text-foreground hover:text-trupahadi-green transition" onClick={() => setIsOpen(false)}>Investor Corner</a>
          <a href="#contact" className="btn-primary inline-block text-center" onClick={() => setIsOpen(false)}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
