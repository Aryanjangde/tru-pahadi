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












// import { TrendingUp, Users, ChevronRight } from 'lucide-react';

// const Investors = () => {
//   return (
//     <section id="investors" className="py-20 bg-trupahadi-beige">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="section-title">Investor Corner</h2>
//           <p className="section-subtitle">
//             Join us in building a future where quality, ethics, and sustainability drive the food industry.
//           </p>
//         </div>
        
//         {/* Current Investors */}
//         <div className="mb-20">
//           <h3 className="text-2xl font-serif font-semibold text-trupahadi-green text-center mb-12">
//             Meet Our Esteemed Investors
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Investor 1 */}
//             <div className="bg-white rounded-xl overflow-hidden shadow-sm">
//               <div className="p-8">
//                 <div className="flex flex-col sm:flex-row items-center sm:items-start">
//                   <div className="w-24 h-24 rounded-full bg-trupahadi-earth-light flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
//                     <img
//                       src="https://rishihood.edu.in/wp-content/uploads/2024/04/Sahil-Aggarwal.jpg"
//                       alt="Mr. Sahil Aggarwal"
//                       className="w-full h-full object-cover rounded-full"
//                     />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-serif font-semibold text-trupahadi-green mb-2">Mr. Sahil Aggarwal</h4>
//                     <p className="text-gray-600 mb-4">Co-Founder and CEO, Rishihood University</p>
//                     <p className="text-gray-700">
//                       Sahil Aggarwal is the Co-Founder and CEO of Rishihood University, India's first impact university. An IIT Delhi graduate, he is a visionary leader dedicated to transforming education and fostering social impact. His strategic expertise and deep understanding of entrepreneurship bring immense value to Trupahadi's mission of sustainable food production.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Investor 2 */}
//             <div className="bg-white rounded-xl overflow-hidden shadow-sm">
//               <div className="p-8">
//                 <div className="flex flex-col sm:flex-row items-center sm:items-start">
//                   <div className="w-24 h-24 rounded-full bg-trupahadi-earth-light flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
//                     <img
//                       src="ajay.JPG"
//                       alt="Mr. Ajay Gupta"
//                       className="w-full h-full object-cover rounded-full"
//                     />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-serif font-semibold text-trupahadi-green mb-2">Mr. Ajay Gupta</h4>
//                     <p className="text-gray-600 mb-4">Founder, Bachpan Play School & Academic Heights Public School</p>
//                     <p className="text-gray-700">
//                       Ajay Gupta, the Founder of Bachpan Play School and Academic Heights Public School, is a pioneer in education with a strong commitment to societal growth. His leadership and experience in scaling ventures provide Trupahadi with strategic direction and business expansion insights.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Investors;
