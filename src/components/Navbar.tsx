import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30, duration: 0.6 } }
};

const menuVariants = {
  hidden: { height: 0, opacity: 0, transition: { when: 'afterChildren' } },
  visible: { height: 'auto', opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About Us' },
    { href: '#founder', label: "Founder's Story" },
    { href: '#mission', label: 'Mission & Vision' },
    { href: '#investors', label: 'Investor Corner' },
    { href: '/corporate-gifting', label: 'Corporate Gifting' },
    { href: '#contact', label: 'Contact Us', primary: true }
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-custom flex justify-between items-center">
        <motion.a
          href="/"
          className="text-2xl font-serif font-bold text-trupahadi-green"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          TruPahadi
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              className={`${link.primary ? 'btn-primary' : 'text-foreground'} transition`}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9, rotate: 90 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white w-full absolute top-full shadow-md overflow-hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="container-custom flex flex-col space-y-4 py-4">
              {links.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  className={`${link.primary ? 'btn-primary inline-block text-center' : 'text-foreground'} transition`}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;










// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
//       <div className="container-custom flex justify-between items-center">
//         <a href="#" className="text-2xl font-serif font-bold text-trupahadi-green">
//           TruPahadi
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8">
//           <a href="#about" className="text-foreground hover:text-trupahadi-green transition">About Us</a>
//           <a href="#founder" className="text-foreground hover:text-trupahadi-green transition">Founder's Story</a>
//           <a href="#mission" className="text-foreground hover:text-trupahadi-green transition">Mission & Vision</a>
//           <a href="#investors" className="text-foreground hover:text-trupahadi-green transition">Investor Corner</a>
//           <a href="#contact" className="btn-primary">Contact Us</a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button 
//           className="md:hidden text-foreground" 
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden bg-white w-full absolute transition-all duration-300 ${isOpen ? 'max-h-96 py-4 shadow-md' : 'max-h-0 overflow-hidden'}`}>
//         <div className="container-custom flex flex-col space-y-4">
//           <a href="#about" className="text-foreground hover:text-trupahadi-green transition" onClick={() => setIsOpen(false)}>About Us</a>
//           <a href="#founder" className="text-foreground hover:text-trupahadi-green transition" onClick={() => setIsOpen(false)}>Founder's Story</a>
//           <a href="#mission" className="text-foreground hover:text-trupahadi-green transition" onClick={() => setIsOpen(false)}>Mission & Vision</a>
//           <a href="#investors" className="text-foreground hover:text-trupahadi-green transition" onClick={() => setIsOpen(false)}>Investor Corner</a>
//           <a href="#contact" className="btn-primary inline-block text-center" onClick={() => setIsOpen(false)}>Contact Us</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
