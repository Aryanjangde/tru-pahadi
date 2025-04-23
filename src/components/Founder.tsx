
import { BookOpen, Award, Users } from 'lucide-react';

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-trupahadi-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Founder's Story</h2>
          <p className="section-subtitle">
            A journey inspired by the purity of the Himalayas and the rich agricultural heritage of Uttarakhand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={20} className="text-trupahadi-green" />
                </div>
                <h4 className="font-medium mb-1">Entrepreneurship</h4>
                <p className="text-sm text-gray-600">Visionary leader</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={20} className="text-trupahadi-green" />
                </div>
                <h4 className="font-medium mb-1">Quality</h4>
                <p className="text-sm text-gray-600">Uncompromising</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={20} className="text-trupahadi-green" />
                </div>
                <h4 className="font-medium mb-1">Community</h4>
                <p className="text-sm text-gray-600">Supporting locals</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-trupahadi-earth opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="bhaiya.jpeg" 
                alt="Founder Parth Vardhan Saxena" 
                className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-8 border-white shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
