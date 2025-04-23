import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
};

const MotionButton = motion.button;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-trupahadi-beige"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="container-custom" variants={itemVariants}>
        <div className="text-center mb-16">
          <motion.h2 className="section-title" variants={itemVariants}>Contact Us</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Reach out to us for inquiries, partnerships, or to learn more about our products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
              We'd love to hear from you! Whether you have questions about our products, want to discuss potential partnerships, or are interested in investment opportunities, our team is here to help.
            </p>

            <div className="space-y-6">
              {[{ icon: Phone, label: 'Phone', text: '+91 87918 99488' },
                { icon: Mail, label: 'Email', text: 'info@trupahadi.com' },
                { icon: MapPin, label: 'Address', text: 'Trupahadi Office, Near Rishihood University,\nSonipat, Haryana,\nIndia - 131001' }]
                .map(({ icon: Icon, label, text }, idx) => (
                  <motion.div key={idx} className="flex items-start" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                    <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mr-4 flex-shrink-0 animate-pulse">
                      <Icon size={20} className="text-trupahadi-green" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">{label}</h4>
                      <p className="text-gray-700 whitespace-pre-line">{text}</p>
                    </div>
                  </motion.div>
                ))}
            </div>

            <motion.div className="mt-10 bg-white p-6 rounded-lg" variants={itemVariants} whileHover={{ scale: 1.01 }}>
              <h4 className="font-medium text-gray-800 mb-4">Business Hours</h4>
              <ul className="space-y-2">
                {[
                  ['Monday - Friday:', '9:00 AM - 6:00 PM'],
                  ['Saturday:', '10:00 AM - 4:00 PM'],
                  ['Sunday:', 'Closed']
                ].map(([day, hours], idx) => (
                  <li className="flex justify-between" key={idx}>
                    <span className="text-gray-600">{day}</span>
                    <span className="text-gray-800">{hours}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="bg-white rounded-xl p-8 shadow-sm" variants={itemVariants}>
            <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">Send Us a Message</h3>

            {submitted ? (
              <motion.div className="bg-trupahadi-green-light text-trupahadi-green p-4 rounded-lg mb-6" variants={itemVariants}>
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <motion.form onSubmit={handleSubmit} variants={containerVariants}>
                <div className="grid grid-cols-1 gap-6">
                  {[['name', 'Your Name', 'text'], ['email', 'Your Email', 'email']].map(([field, label, type], idx) => (
                    <motion.div key={idx} variants={itemVariants}>
                      <label htmlFor={field} className="block text-gray-700 mb-2">{label}</label>
                      <input
                        type={type as string}
                        id={field}
                        name={field}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
                        required
                      />
                    </motion.div>
                  ))}

                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Investment Interest">Investment Interest</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
                      required
                    ></textarea>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <MotionButton
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </MotionButton>
                  </motion.div>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
















// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       console.log('Form submitted:', formData);
//       setIsSubmitting(false);
//       setSubmitted(true);
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
      
//       // Reset submission status after 5 seconds
//       setTimeout(() => {
//         setSubmitted(false);
//       }, 5000);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="py-20 bg-trupahadi-beige">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="section-title">Contact Us</h2>
//           <p className="section-subtitle">
//             Reach out to us for inquiries, partnerships, or to learn more about our products.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div>
//             <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">
//               Get In Touch
//             </h3>
//             <p className="text-gray-700 mb-8">
//               We'd love to hear from you! Whether you have questions about our products, want to discuss potential partnerships, or are interested in investment opportunities, our team is here to help.
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
//                   <Phone size={20} className="text-trupahadi-green" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
//                   <p className="text-gray-700">+91 87918 99488</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
//                   <Mail size={20} className="text-trupahadi-green" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-800 mb-1">Email</h4>
//                   <p className="text-gray-700">info@trupahadi.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start">
//                 <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mr-4 flex-shrink-0">
//                   <MapPin size={20} className="text-trupahadi-green" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-800 mb-1">Address</h4>
//                   <p className="text-gray-700">
//                     Trupahadi Office, Near Rishihood University,<br />
//                     Sonipat, Haryana,<br />
//                     India - 131001
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-10 bg-white p-6 rounded-lg">
//               <h4 className="font-medium text-gray-800 mb-4">Business Hours</h4>
//               <ul className="space-y-2">
//                 <li className="flex justify-between">
//                   <span className="text-gray-600">Monday - Friday:</span>
//                   <span className="text-gray-800">9:00 AM - 6:00 PM</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span className="text-gray-600">Saturday:</span>
//                   <span className="text-gray-800">10:00 AM - 4:00 PM</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span className="text-gray-600">Sunday:</span>
//                   <span className="text-gray-800">Closed</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div className="bg-white rounded-xl p-8 shadow-sm">
//             <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">
//               Send Us a Message
//             </h3>
            
//             {submitted ? (
//               <div className="bg-trupahadi-green-light text-trupahadi-green p-4 rounded-lg mb-6">
//                 <p className="font-medium">Thank you for your message!</p>
//                 <p>We'll get back to you as soon as possible.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
//                       required
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
//                       required
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
//                     <select
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
//                       required
//                     >
//                       <option value="">Select a subject</option>
//                       <option value="General Inquiry">General Inquiry</option>
//                       <option value="Product Information">Product Information</option>
//                       <option value="Partnership Opportunity">Partnership Opportunity</option>
//                       <option value="Investment Interest">Investment Interest</option>
//                       <option value="Feedback">Feedback</option>
//                     </select>
//                   </div>
                  
//                   <div>
//                     <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={5}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-trupahadi-green"
//                       required
//                     ></textarea>
//                   </div>
                  
//                   <div>
//                     <button
//                       type="submit"
//                       className="w-full btn-primary flex items-center justify-center"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <span>Sending...</span>
//                       ) : (
//                         <>
//                           <Send size={18} className="mr-2" />
//                           Send Message
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
