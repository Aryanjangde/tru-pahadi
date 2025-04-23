import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-trupahadi-green-light">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-block px-4 py-1 bg-trupahadi-green bg-opacity-10 text-trupahadi-green rounded-full mb-4">
              100% Organic & Chemical-Free
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-trupahadi-green mb-6">
              Elevating Purity, <br />
              Enriching Lives
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
              From the pristine hills of Uttarakhand, we bring you nature's finest produce, cultivated through traditional, chemical-free farming methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn-primary flex items-center justify-center">
                Explore Our Products
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#about" className="px-6 py-3 border border-trupahadi-green text-trupahadi-green rounded-md font-medium hover:bg-trupahadi-green hover:text-white transition duration-300 text-center">
                Learn More About Us
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-trupahadi-earth rounded-full opacity-20"></div>
              <img 
                src="https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787850.jpg?semt=ais_hybrid&w=740" 
                alt="Organic food product from Trupahadi" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-trupahadi-green-light rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-16 pt-8 border-t border-trupahadi-green border-opacity-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <div className="p-4">
              <p className="font-serif font-medium text-trupahadi-green">Organic Certified</p>
            </div>
            <div className="p-4">
              <p className="font-serif font-medium text-trupahadi-green">FSSAI Approved</p>
            </div>
            <div className="p-4">
              <p className="font-serif font-medium text-trupahadi-green">DPIIT Certified</p>
            </div>
            <div className="p-4">
              <p className="font-serif font-medium text-trupahadi-green">100% Natural</p>
            </div>
            <div className="p-4">
              <p className="font-serif font-medium text-trupahadi-green">NPOP Certified</p>
            </div>
            <div className="p-4">
              <p className="font-serif font-medium text-trupahadi-green">India Organic</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
