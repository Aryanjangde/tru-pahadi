import { ShoppingCart, Award, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCarousel from './ProductCarousel';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const Products = () => {
  return (
    <motion.section
      id="products"
      className="py-20 bg-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-4xl font-bold text-trupahadi-green">Our Products</h2>
          <p className="section-subtitle text-lg mt-4 text-gray-600">
            Pure, authentic and chemical-free products straight from the hills of Uttarakhand.
          </p>
        </motion.div>

        {/* Products Carousel */}
        <ProductCarousel />

        <motion.div
          className="mt-16 pt-12 border-t border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">Our Quality Commitment</h3>
            <p className="text-gray-700 mb-8">
              Every Trupahadi product undergoes rigorous quality checks to ensure it meets our stringent standards for purity, flavor, and nutritional value. We believe in transparency and traceability, which is why we take pride in sharing the journey of our products from farm to table.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              {[
                { title: 'FSSAI Approved', desc: 'Meets safety standards', icon: <Award size={20} className="text-trupahadi-green" /> },
                { title: 'Organic Certified', desc: 'Chemical-free farming', icon: <Leaf size={20} className="text-trupahadi-green" /> },
                { title: 'DPIIT Recognized', desc: 'Govt. of India certified', icon: <Award size={20} className="text-trupahadi-green" /> },
                { title: 'NPOP Certified', desc: 'National organic certification', icon: <Award size={20} className="text-trupahadi-green" /> },
                { title: 'India Organic', desc: 'Certified organic products', icon: <Award size={20} className="text-trupahadi-green" /> },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded-xl shadow"
                  whileHover={{ scale: 1.03, y: -3 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                >
                  <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-medium text-trupahadi-green mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Products;
