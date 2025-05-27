import { motion } from 'framer-motion';
import { Download, Send, Leaf, Award, Copy, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import ProductCarousel from '@/components/ProductCarousel';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  hover: {
    scale: 1.02,
    transition: { type: 'spring', stiffness: 400 },
  },
};

// Client data - replace with actual client data
const clients = [
  { name: "Balaji Group", logo: "balajiGroup.png" },
  { name: "Rishihood University", logo: "rishihood-logo-light.png" },
];

const products = [
  {
    id: 1,
    name: 'Wood-Pressed Organic Yellow Mustard Oil',
    image: 'yellowMustard.jpg',
    description:
      'Premium yellow mustard oil extracted using traditional wood-pressing methods to retain maximum nutritional value.',
    benefits: ['High pungency', 'Rich aroma', 'Traditional process', 'Pure & natural'],
  },
  {
    id: 2,
    name: 'Wood-Pressed Organic Groundnut Oil',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2021/11/SD/DB/XV/107877514/peanut-oil-500x500.jpg',
    description:
      'Pure groundnut oil extracted naturally through wood-pressing, preserving its authentic taste and health benefits.',
    benefits: ['Heart healthy', 'High smoke point', 'Natural extraction', 'No preservatives'],
  },
  {
    id: 3,
    name: 'Wood-Pressed Organic Sesame Oil',
    image: 'seasame.jpeg',
    description:
      'Traditional wood-pressed sesame oil rich in natural antioxidants and authentic flavor.',
    benefits: ['Rich in minerals', 'Traditional process', 'Chemical-free', 'Pure aroma'],
  },
  {
    id: 4,
    name: "Millets Ladoos",
    description: "Traditional sweet treats made with organic millets, jaggery and ghee. Rich in nutrients and perfect for a healthy snack.",
    price: 349,
    image: "milletsLadoos.jpg",
    benefits: ['Gluten-Free', 'Traditional process', 'Chemical-free', 'Supports Digestive Health'],
  }
];

const CorporateGifting = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadCatalogue = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href to the PDF file
    link.href = '/product-catalog.pdf';
    // Set the download attribute to force download
    link.download = 'TruPahadi-Product-Catalog.pdf';
    // Append to the document
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.section
        className="py-20 bg-trupahadi-beige overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="container-custom" variants={itemVariants}>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1 className="text-4xl md:text-5xl font-serif font-bold text-trupahadi-green mb-6" variants={itemVariants}>
              Corporate Gifting
            </motion.h1>
            <motion.p className="text-xl text-gray-700 max-w-3xl mx-auto" variants={itemVariants}>
              Elevate your corporate relationships with our premium selection of authentic Indian sweets and delicacies.
            </motion.p>
          </div>

          {/* Client Carousel */}
          <motion.div 
            className="mb-20 overflow-hidden"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">Our Trusted Clients</h2>
            <div className="relative">
              <div className="flex justify-center space-x-12">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <div className="h-16 mb-2 flex items-center justify-center">
                        <img 
                          src={`/${client.logo}`} 
                          alt={`${client.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{client.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Corporate Experiences */}
          <motion.div className="mb-20" variants={itemVariants}>
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">Corporate Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Festive Sweets Boxes",
                  description: "Curated collections of premium sweets perfect for festive celebrations and corporate events.",
                  image: "festiveBox.jpg"
                },
                {
                  title: "Event and Celebration",
                  description: "Make a lasting impression with our premium gift boxes featuring authentic Indian delicacies.",
                  image: "eventAndCeleb.jpg"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={`/${item.image}`}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Products Section */}
          <motion.div className="mb-20" variants={itemVariants}>
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">Our Products</h2>
            <ProductCarousel />
            <div className="text-center mt-8">
              <button 
                onClick={handleDownloadCatalogue}
                className="inline-flex items-center gap-2 bg-trupahadi-green text-white px-6 py-3 rounded-full hover:bg-trupahadi-green-dark transition-colors"
              >
                <Download size={20} />
                Download Product Catalogue
              </button>
            </div>
          </motion.div>

          {/* Customization Section */}
          <motion.div className="mb-20 bg-white rounded-2xl p-8 shadow-lg" variants={itemVariants}>
            <h2 className="text-3xl font-serif font-semibold text-center mb-8">Customize your Gift Box!</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
              We've made it a joy to personalize a gift from TruPahadi just the way you want. Made to order to celebrate your special moments and milestone occasions, we walk every mile of the way with you.
            </p>
            <div className="text-center">
              {!showContactInfo ? (
                <button 
                  onClick={() => setShowContactInfo(true)}
                  className="inline-flex items-center gap-2 bg-trupahadi-green text-white px-6 py-3 rounded-full hover:bg-trupahadi-green-dark transition-colors"
                >
                  <Send size={20} />
                  Contact Us for Customization
                </button>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex flex-col items-center gap-4 text-gray-700">
                    <div className="flex items-center gap-3">
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Phone:</span>
                        <a href="tel:+918791899488" className="hover:text-trupahadi-green">+91 87918 99488</a>
                      </p>
                      <button
                        onClick={() => handleCopy('+918791899488', 'phone')}
                        className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                        title="Copy phone number"
                      >
                        {copiedField === 'phone' ? (
                          <Check size={16} className="text-green-500" />
                        ) : (
                          <Copy size={16} className="text-gray-500" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Email:</span>
                        <a href="mailto:parthvardhan30@gmail.com" className="hover:text-trupahadi-green">parthvardhan30@gmail.com</a>
                      </p>
                      <button
                        onClick={() => handleCopy('parthvardhan30@gmail.com', 'email')}
                        className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                        title="Copy email"
                      >
                        {copiedField === 'email' ? (
                          <Check size={16} className="text-green-500" />
                        ) : (
                          <Copy size={16} className="text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowContactInfo(false)}
                    className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors"
                  >
                    Hide Contact Info
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="max-w-2xl mx-auto" variants={itemVariants}>
            <h2 className="text-3xl font-serif font-semibold text-center mb-8">Write To Us</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
                />
                <input
                  type="text"
                  placeholder="Company *"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
                />
              </div>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-trupahadi-green">
                <option value="">Choose Experience *</option>
                <option value="festive">Festive Celebrations</option>
                <option value="office">Office Party</option>
                <option value="client">Client Gifting</option>
              </select>
              <textarea
                placeholder="Message *"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-trupahadi-green text-white px-8 py-3 rounded-full hover:bg-trupahadi-green-dark transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default CorporateGifting; 