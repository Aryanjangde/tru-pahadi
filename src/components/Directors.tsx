import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30, staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
  hover: { scale: 1.02 }
};

const Directors = () => {
  return (
    <motion.section
      id="directors"
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container-custom" variants={itemVariants}>
        <div className="text-center mb-16">
          <motion.h2 className="section-title" variants={itemVariants}>Meet Our Directors</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Guided by experienced leadership committed to our vision of sustainability and excellence.
          </motion.p>
        </div>

        <motion.div
          className="bg-trupahadi-beige rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          variants={itemVariants}
          whileHover="hover"
        >
          <div className="p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <motion.div
                className="w-24 h-24 rounded-full bg-trupahadi-earth-light flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src="director.JPG"
                  alt="Mr. Madhuvardhan Saxena"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              <div>
                <div className="flex items-center mb-2">
                  <motion.h4
                    className="text-xl font-serif font-semibold text-trupahadi-green"
                    whileHover={{ x: 5 }}
                  >
                    Mr. Madhuvardhan Saxena
                  </motion.h4>
                  <div className="ml-4 px-3 py-1 bg-trupahadi-green bg-opacity-10 rounded-full">
                    <div className="flex items-center">
                      <Briefcase size={14} className="text-trupahadi-green mr-1" />
                      <span className="text-sm text-trupahadi-green">Financial Advisor</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Board Member & Financial Advisor</p>
                <motion.p
                  className="text-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Mr. Madhuvardhan Saxena is a seasoned financial expert with over three decades of experience in the banking and financial services industry. Throughout his distinguished career, he has held key leadership positions across reputed banking institutions, with a strong focus on corporate finance, risk management, and regulatory compliance.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Directors;












// import { Briefcase } from 'lucide-react';

// const Directors = () => {
//   return (
//     <section id="directors" className="py-20 bg-white">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="section-title">Meet Our Directors</h2>
//           <p className="section-subtitle">
//             Guided by experienced leadership committed to our vision of sustainability and excellence.
//           </p>
//         </div>
        
//         <div className="bg-trupahadi-beige rounded-xl overflow-hidden shadow-sm">
//           <div className="p-8">
//             <div className="flex flex-col sm:flex-row items-center sm:items-start">
//               <div className="w-24 h-24 rounded-full bg-trupahadi-earth-light flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
//                 <img
//                   src="director.JPG"
//                   alt="Mr. Madhuvardhan Saxena"
//                   className="w-full h-full object-cover rounded-full"
//                 />
//               </div>
//               <div>
//                 <div className="flex items-center mb-2">
//                   <h4 className="text-xl font-serif font-semibold text-trupahadi-green">Mr. Madhuvardhan Saxena</h4>
//                   <div className="ml-4 px-3 py-1 bg-trupahadi-green bg-opacity-10 rounded-full">
//                     <div className="flex items-center">
//                       <Briefcase size={14} className="text-trupahadi-green mr-1" />
//                       <span className="text-sm text-trupahadi-green">Financial Advisor</span>
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 mb-4">Board Member & Financial Advisor</p>
//                 <p className="text-gray-700">
//                   Mr. Madhuvardhan Saxena is a seasoned financial expert with over three decades of experience in the banking and financial services industry. Throughout his distinguished career, he has held key leadership positions across reputed banking institutions, with a strong focus on corporate finance, risk management, and regulatory compliance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Directors;
