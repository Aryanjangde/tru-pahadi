import { TrendingUp, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const headerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } },
  hover: { scale: 1.03, y: -5, transition: { type: 'spring', stiffness: 400 } }
};

const imageVariants = {
  hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
};

const Investors = () => {
  const investors = [
    {
      name: 'Mr. Sahil Aggarwal',
      title: 'Co-Founder and CEO, Rishihood University',
      img: 'https://rishihood.edu.in/wp-content/uploads/2024/04/Sahil-Aggarwal.jpg',
      desc: `Sahil Aggarwal is the Co-Founder and CEO of Rishihood University, India's first impact university. An IIT Delhi graduate, he is a visionary leader dedicated to transforming education and fostering social impact. His strategic expertise and deep understanding of entrepreneurship bring immense value to Trupahadi's mission of sustainable food production.`
    },
    {
      name: 'Mr. Ajay Gupta',
      title: 'Founder, Bachpan Play School & Academic Heights Public School',
      img: 'ajay.JPG',
      desc: `Ajay Gupta, the Founder of Bachpan Play School and Academic Heights Public School, is a pioneer in education with a strong commitment to societal growth. His leadership and experience in scaling ventures provide Trupahadi with strategic direction and business expansion insights.`
    }
  ];

  return (
    <motion.section
      id="investors"
      className="py-20 bg-trupahadi-beige overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container-custom text-center mb-16" variants={headerVariants}>
        <h2 className="section-title">Investor Corner</h2>
        <p className="section-subtitle">
          Join us in building a future where quality, ethics, and sustainability drive the food industry.
        </p>
      </motion.div>

      <motion.div className="container-custom" variants={headerVariants}>
        <h3 className="text-2xl font-serif font-semibold text-trupahadi-green text-center mb-12">
          Meet Our Esteemed Investors
        </h3>
      </motion.div>

      <motion.div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
        {investors.map((inv, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-sm group cursor-pointer relative"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="p-8 flex flex-col sm:flex-row items-center sm:items-start">
              <motion.div
                className="w-24 h-24 rounded-full bg-trupahadi-earth-light flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 overflow-hidden"
                variants={imageVariants}
                whileHover="hover"
              >
                <motion.img
                  src={inv.img}
                  alt={inv.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              <div>
                <motion.h4
                  className="text-xl font-serif font-semibold text-trupahadi-green mb-2"
                  whileHover={{ x: 5 }}
                >
                  {inv.name}
                </motion.h4>
                <motion.p
                  className="text-gray-600 mb-4"
                  whileHover={{ x: 5, transition: { delay: 0.1 } }}
                >
                  {inv.title}
                </motion.p>
                <motion.p
                  className="text-gray-700"
                  whileHover={{ x: 5, transition: { delay: 0.2 } }}
                >
                  {inv.desc}
                </motion.p>
              </div>
            </div>
            <motion.div
              className="absolute bottom-4 right-4 text-trupahadi-green"
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              <ChevronRight size={24} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Investors;












// import { ArrowRight } from 'lucide-react';

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen flex items-center bg-trupahadi-green-light">
//       {/* Background pattern */}
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      
//       {/* Content */}
//       <div className="container-custom relative z-10 pt-24 pb-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="text-left">
//             <div className="inline-block px-4 py-1 bg-trupahadi-green bg-opacity-10 text-trupahadi-green rounded-full mb-4">
//               100% Organic & Chemical-Free
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-trupahadi-green mb-6">
//               Elevating Purity, <br />
//               Enriching Lives
//             </h1>
//             <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
//               From the pristine hills of Uttarakhand, we bring you nature's finest produce, cultivated through traditional, chemical-free farming methods.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <a href="#products" className="btn-primary flex items-center justify-center">
//                 Explore Our Products
//                 <ArrowRight size={18} className="ml-2" />
//               </a>
//               <a href="#about" className="px-6 py-3 border border-trupahadi-green text-trupahadi-green rounded-md font-medium hover:bg-trupahadi-green hover:text-white transition duration-300 text-center">
//                 Learn More About Us
//               </a>
//             </div>
//           </div>
          
//           <div className="hidden lg:block">
//             <div className="relative">
//               <div className="absolute -top-6 -left-6 w-64 h-64 bg-trupahadi-earth rounded-full opacity-20"></div>
//               <img 
//                 src="https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787850.jpg?semt=ais_hybrid&w=740" 
//                 alt="Organic food product from Trupahadi" 
//                 className="w-full h-auto rounded-lg shadow-xl relative z-10"
//               />
//               <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-trupahadi-green-light rounded-full"></div>
//             </div>
//           </div>
//         </div>
        
//         {/* Trust badges */}
//         <div className="mt-16 pt-8 border-t border-trupahadi-green border-opacity-20">
//           <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
//             <div className="p-4">
//               <p className="font-serif font-medium text-trupahadi-green">Organic Certified</p>
//             </div>
//             <div className="p-4">
//               <p className="font-serif font-medium text-trupahadi-green">FSSAI Approved</p>
//             </div>
//             <div className="p-4">
//               <p className="font-serif font-medium text-trupahadi-green">DPIIT Certified</p>
//             </div>
//             <div className="p-4">
//               <p className="font-serif font-medium text-trupahadi-green">100% Natural</p>
//             </div>
//             <div className="p-4">
//               <p className="font-serif font-medium text-trupahadi-green">NPOP Certified</p>
//             </div>
//             <div className="p-4">
//               <p className="font-serif font-medium text-trupahadi-green">India Organic</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Decorative element */}
//       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
//     </div>
//   );
// };

// export default Hero;
