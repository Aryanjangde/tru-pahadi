import { ShoppingCart, Award, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
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

const Products = () => {
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
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <motion.div
                    className="group bg-trupahadi-beige rounded-2xl overflow-hidden shadow-xl h-full flex flex-col"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="h-56 w-full overflow-hidden flex items-center justify-center bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <motion.div
                        className="flex items-center mb-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mr-2 shadow-md">
                          <Leaf size={12} className="text-white" />
                        </div>
                        <span className="text-sm font-medium text-trupahadi-green">100% Organic</span>
                      </motion.div>
                      <h3 className="text-xl font-serif font-semibold text-trupahadi-green mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-3">
                          {product.benefits.map((benefit, index) => (
                            <motion.span
                              key={index}
                              className="inline-block bg-trupahadi-green-light text-trupahadi-green text-xs px-3 py-1 rounded-full shadow-sm"
                              whileHover={{ scale: 1.05 }}
                            >
                              {benefit}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static mx-2 transform-none" />
              <CarouselNext className="static mx-2 transform-none" />
            </div>
          </Carousel>
        </motion.div>

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
