import { Target, Eye, Leaf, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } },
  hover: { scale: 1.03, y: -5, transition: { type: 'spring', stiffness: 350 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }
};

const Mission = () => {
  const values = [
    { icon: <Leaf size={20} />, title: 'Purity', desc: 'Unadulterated products' },
    { icon: <Leaf size={20} />, title: 'Sustainability', desc: 'Eco-friendly practices' },
    { icon: <Leaf size={20} />, title: 'Integrity', desc: 'Honest transactions' },
    { icon: <Leaf size={20} />, title: 'Community', desc: 'Supporting locals' }
  ];

  return (
    <motion.section
      id="mission"
      className="py-20 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-custom">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="section-title">Mission & Vision</h2>
          <p className="section-subtitle">
            We are committed to redefining food purity while empowering local farming communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Card */}
          <motion.div
            className="bg-trupahadi-green-light p-8 rounded-xl cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-trupahadi-green rounded-full flex items-center justify-center mr-4 animate-pulse">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-trupahadi-green">
                Our Mission
              </h3>
            </div>
            <p className="mb-6 text-gray-700">
              To redefine food purity by providing 100% natural, sustainably sourced, and ethically produced food products.
            </p>
            <motion.ul className="space-y-4" variants={containerVariants}>
              {[
                { icon: <Leaf size={14} />, text: 'Promote sustainable, chemical-free farming techniques' },
                { icon: <Users size={14} />, text: 'Empower local farmers with fair trade and direct partnerships' },
                { icon: <Leaf size={14} />, text: 'Deliver nutrient-rich, preservative-free food to every home' },
                { icon: <Leaf size={14} />, text: 'Educate consumers about the benefits of organic and traditional food practices' }
              ].map((item, idx) => (
                <motion.li key={idx} className="flex" variants={itemVariants} whileHover={{ x: 5 }}>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
                    {item.icon}
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="bg-trupahadi-earth-light p-8 rounded-xl cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-trupahadi-earth rounded-full flex items-center justify-center mr-4 animate-pulse">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-trupahadi-green">
                Our Vision
              </h3>
            </div>
            <p className="mb-6 text-gray-700">
              To be India's most trusted name in organic, clean-label, and ethically produced food, setting new benchmarks for quality, transparency, and sustainability.
            </p>
            <motion.div className="bg-white p-6 rounded-lg mb-6" variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <p className="text-gray-700 italic">
                "We envision a world where food is as nature intended pure, nourishing, and environmentally responsible."
              </p>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ x: 5 }}>
              <p className="text-gray-700">
                At Trupahadi, we're dedicated to preserving traditional food production methods while embracing sustainable innovations. Our vision extends beyond just selling products we aim to create a movement that reconnects people with the true essence of food, supports local farming communities, and contributes to a healthier planet.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div className="text-center max-w-3xl mx-auto pt-10 border-t border-gray-100" variants={itemVariants}>
          <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                className="p-4 cursor-pointer hover:bg-trupahadi-green-light rounded-xl"
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
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Mission;













// import { Target, Eye, Leaf, Users } from 'lucide-react';

// const Mission = () => {
//   return (
//     <section id="mission" className="py-20 bg-white">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="section-title">Mission & Vision</h2>
//           <p className="section-subtitle">
//             We are committed to redefining food purity while empowering local farming communities.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//           {/* Mission Card */}
//           <div className="bg-trupahadi-green-light p-8 rounded-xl">
//             <div className="flex items-center mb-6">
//               <div className="w-12 h-12 bg-trupahadi-green rounded-full flex items-center justify-center mr-4">
//                 <Target size={24} className="text-white" />
//               </div>
//               <h3 className="text-2xl font-serif font-semibold text-trupahadi-green">
//                 Our Mission
//               </h3>
//             </div>
//             <p className="mb-6 text-gray-700">
//               To redefine food purity by providing 100% natural, sustainably sourced, and ethically produced food products.
//             </p>
//             <ul className="space-y-4">
//               <li className="flex">
//                 <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
//                   <Leaf size={14} className="text-white" />
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-gray-700">Promote sustainable, chemical-free farming techniques</p>
//                 </div>
//               </li>
//               <li className="flex">
//                 <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
//                   <Users size={14} className="text-white" />
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-gray-700">Empower local farmers with fair trade and direct partnerships</p>
//                 </div>
//               </li>
//               <li className="flex">
//                 <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
//                   <Leaf size={14} className="text-white" />
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-gray-700">Deliver nutrient-rich, preservative-free food to every home</p>
//                 </div>
//               </li>
//               <li className="flex">
//                 <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
//                   <Leaf size={14} className="text-white" />
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-gray-700">Educate consumers about the benefits of organic and traditional food practices</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
          
//           {/* Vision Card */}
//           <div className="bg-trupahadi-earth-light p-8 rounded-xl">
//             <div className="flex items-center mb-6">
//               <div className="w-12 h-12 bg-trupahadi-earth rounded-full flex items-center justify-center mr-4">
//                 <Eye size={24} className="text-white" />
//               </div>
//               <h3 className="text-2xl font-serif font-semibold text-trupahadi-green">
//                 Our Vision
//               </h3>
//             </div>
//             <p className="mb-6 text-gray-700">
//               To be India's most trusted name in organic, clean-label, and ethically produced food, setting new benchmarks for quality, transparency, and sustainability.
//             </p>
//             <div className="bg-white p-6 rounded-lg">
//               <p className="text-gray-700 italic">
//                 "We envision a world where food is as nature intended pure, nourishing, and environmentally responsible."
//               </p>
//             </div>
//             <div className="mt-6">
//               <p className="text-gray-700">
//                 At Trupahadi, we're dedicated to preserving traditional food production methods while embracing sustainable innovations. Our vision extends beyond just selling products we aim to create a movement that reconnects people with the true essence of food, supports local farming communities, and contributes to a healthier planet.
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Values */}
//         <div className="text-center max-w-3xl mx-auto pt-10 border-t border-gray-100">
//           <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">Core Values</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <div className="p-4">
//               <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Leaf size={20} className="text-trupahadi-green" />
//               </div>
//               <h4 className="font-medium mb-1">Purity</h4>
//               <p className="text-sm text-gray-600">Unadulterated products</p>
//             </div>
//             <div className="p-4">
//               <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Leaf size={20} className="text-trupahadi-green" />
//               </div>
//               <h4 className="font-medium mb-1">Sustainability</h4>
//               <p className="text-sm text-gray-600">Eco-friendly practices</p>
//             </div>
//             <div className="p-4">
//               <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Leaf size={20} className="text-trupahadi-green" />
//               </div>
//               <h4 className="font-medium mb-1">Integrity</h4>
//               <p className="text-sm text-gray-600">Honest transactions</p>
//             </div>
//             <div className="p-4">
//               <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Leaf size={20} className="text-trupahadi-green" />
//               </div>
//               <h4 className="font-medium mb-1">Community</h4>
//               <p className="text-sm text-gray-600">Supporting locals</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;
