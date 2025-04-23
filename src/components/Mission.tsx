
import { Target, Eye, Leaf, Users } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Mission & Vision</h2>
          <p className="section-subtitle">
            We are committed to redefining food purity while empowering local farming communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Card */}
          <div className="bg-trupahadi-green-light p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-trupahadi-green rounded-full flex items-center justify-center mr-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-trupahadi-green">
                Our Mission
              </h3>
            </div>
            <p className="mb-6 text-gray-700">
              To redefine food purity by providing 100% natural, sustainably sourced, and ethically produced food products.
            </p>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
                  <Leaf size={14} className="text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">Promote sustainable, chemical-free farming techniques</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
                  <Users size={14} className="text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">Empower local farmers with fair trade and direct partnerships</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
                  <Leaf size={14} className="text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">Deliver nutrient-rich, preservative-free food to every home</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mt-1">
                  <Leaf size={14} className="text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">Educate consumers about the benefits of organic and traditional food practices</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Vision Card */}
          <div className="bg-trupahadi-earth-light p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-trupahadi-earth rounded-full flex items-center justify-center mr-4">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-trupahadi-green">
                Our Vision
              </h3>
            </div>
            <p className="mb-6 text-gray-700">
              To be India's most trusted name in organic, clean-label, and ethically produced food, setting new benchmarks for quality, transparency, and sustainability.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700 italic">
                "We envision a world where food is as nature intended pure, nourishing, and environmentally responsible."
              </p>
            </div>
            <div className="mt-6">
              <p className="text-gray-700">
                At Trupahadi, we're dedicated to preserving traditional food production methods while embracing sustainable innovations. Our vision extends beyond just selling products we aim to create a movement that reconnects people with the true essence of food, supports local farming communities, and contributes to a healthier planet.
              </p>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="text-center max-w-3xl mx-auto pt-10 border-t border-gray-100">
          <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={20} className="text-trupahadi-green" />
              </div>
              <h4 className="font-medium mb-1">Purity</h4>
              <p className="text-sm text-gray-600">Unadulterated products</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={20} className="text-trupahadi-green" />
              </div>
              <h4 className="font-medium mb-1">Sustainability</h4>
              <p className="text-sm text-gray-600">Eco-friendly practices</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={20} className="text-trupahadi-green" />
              </div>
              <h4 className="font-medium mb-1">Integrity</h4>
              <p className="text-sm text-gray-600">Honest transactions</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={20} className="text-trupahadi-green" />
              </div>
              <h4 className="font-medium mb-1">Community</h4>
              <p className="text-sm text-gray-600">Supporting locals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
