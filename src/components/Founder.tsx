import { BookOpen, Award, Users, Play, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } }
};

const Founder = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  
  // Instagram-like story colors
  const storyGradient = "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500";

  return (
    <motion.section
      id="founder"
      className="py-20 bg-trupahadi-beige overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container-custom" variants={itemVariants}>
        <div className="text-center mb-16">
          <motion.h2 className="section-title" variants={itemVariants}>Founder's Story</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            A journey inspired by the purity of the Himalayas and the rich agricultural heritage of Uttarakhand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="order-2 lg:order-1" variants={itemVariants}>
            <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">
              Meet Parth Vardhan Saxena
            </h3>
            <p className="mb-6 text-gray-700">
              Trupahadi was founded by Parth Vardhan Saxena, a passionate entrepreneur and a proud son of Uttarakhand. Inspired by the purity of the Himalayas and the rich agricultural heritage of his homeland, Parth envisioned a brand that could bring the essence of traditional, organic food to modern consumers.
            </p>
            <p className="mb-6 text-gray-700">
              Parth is a second-year BBA student at Rishihood University and a B.Tech CS dropout. He always wanted to do something in the food industry, recognizing a massive gap in the market. Today, the oils and food products consumed by people are far from pure. He strongly believes in providing an alternative that is straight from the hills of Uttarakhand organic, unadulterated, and wholesome.
            </p>
            <p className="mb-8 text-gray-700">
              His journey began with a simple realization: the market was flooded with mass-produced, chemically laden food that compromised both health and flavor. Determined to make a difference, Parth dedicated himself to reviving forgotten food traditions, empowering local farmers, and ensuring that Trupahadi stood for nothing less than uncompromised quality.
            </p>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center" variants={containerVariants}>
              {[
                { icon: <BookOpen size={20} />, title: 'Entrepreneurship', desc: 'Visionary leader' },
                { icon: <Award size={20} />, title: 'Quality', desc: 'Uncompromising' },
                { icon: <Users size={20} />, title: 'Community', desc: 'Supporting locals' }
              ].map((val, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    {val.icon}
                  </div>
                  <h4 className="font-medium mb-1">{val.title}</h4>
                  <p className="text-sm text-gray-600">{val.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="order-1 lg:order-2 flex justify-center" variants={itemVariants}>
            <div className="relative">
              {/* Instagram stories-like ring */}
              <motion.div 
                className={`absolute -inset-3 ${storyGradient} rounded-full z-10 cursor-pointer`}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                onClick={() => setVideoOpen(true)}
              ></motion.div>
              
              <motion.div
                className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-trupahadi-earth opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping-slow"
              ></motion.div>
              
              <motion.div 
                className="relative z-20 cursor-pointer"
                onClick={() => setVideoOpen(true)}
              >
                <motion.img
                  src="founder2.jpg"
                  alt="Founder Parth Vardhan Saxena"
                  className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-8 border-white shadow-xl relative z-10"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-20 rounded-full flex items-center justify-center"
                  whileHover={{ opacity: 0.4 }}
                  initial={{ opacity: 0.2 }}
                >
                  <Play size={40} className="text-white" fill="white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Modal */}
      {videoOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button 
            className="absolute top-6 right-6 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            onClick={() => setVideoOpen(false)}
            whileHover={{ scale: 1.1 }}
          >
            <X size={24} />
          </motion.button>
          
          <motion.div 
            className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              src="Ankurrrr.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Founder;










// import { BookOpen, Award, Users } from 'lucide-react';

// const Founder = () => {
//   return (
//     <section id="founder" className="py-20 bg-trupahadi-beige">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="section-title">Founder's Story</h2>
//           <p className="section-subtitle">
//             A journey inspired by the purity of the Himalayas and the rich agricultural heritage of Uttarakhand.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="order-2 lg:order-1">
//             <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">
//               Meet Parth Vardhan Saxena
//             </h3>
//             <p className="mb-6 text-gray-700">
//               Trupahadi was founded by Parth Vardhan Saxena, a passionate entrepreneur and a proud son of Uttarakhand. Inspired by the purity of the Himalayas and the rich agricultural heritage of his homeland, Parth envisioned a brand that could bring the essence of traditional, organic food to modern consumers.
//             </p>
//             <p className="mb-6 text-gray-700">
//               Parth is a second-year BBA student at Rishihood University and a B.Tech CS dropout. He always wanted to do something in the food industry, recognizing a massive gap in the market. Today, the oils and food products consumed by people are far from pure. He strongly believes in providing an alternative that is straight from the hills of Uttarakhand organic, unadulterated, and wholesome.
//             </p>
//             <p className="mb-8 text-gray-700">
//               His journey began with a simple realization: the market was flooded with mass-produced, chemically laden food that compromised both health and flavor. Determined to make a difference, Parth dedicated himself to reviving forgotten food traditions, empowering local farmers, and ensuring that Trupahadi stood for nothing less than uncompromised quality.
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//               <div className="p-4 bg-white rounded-lg shadow-sm">
//                 <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
//                   <BookOpen size={20} className="text-trupahadi-green" />
//                 </div>
//                 <h4 className="font-medium mb-1">Entrepreneurship</h4>
//                 <p className="text-sm text-gray-600">Visionary leader</p>
//               </div>
//               <div className="p-4 bg-white rounded-lg shadow-sm">
//                 <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Award size={20} className="text-trupahadi-green" />
//                 </div>
//                 <h4 className="font-medium mb-1">Quality</h4>
//                 <p className="text-sm text-gray-600">Uncompromising</p>
//               </div>
//               <div className="p-4 bg-white rounded-lg shadow-sm">
//                 <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Users size={20} className="text-trupahadi-green" />
//                 </div>
//                 <h4 className="font-medium mb-1">Community</h4>
//                 <p className="text-sm text-gray-600">Supporting locals</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="order-1 lg:order-2 flex justify-center">
//             <div className="relative">
//               <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-trupahadi-earth opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//               <img 
//                 src="bhaiya.jpeg" 
//                 alt="Founder Parth Vardhan Saxena" 
//                 className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-8 border-white shadow-xl relative z-10"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Founder;
