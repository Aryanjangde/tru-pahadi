import { TrendingUp, Users, ChevronRight } from 'lucide-react';

const Investors = () => {
  return (
    <section id="investors" className="py-20 bg-trupahadi-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Investor Corner</h2>
          <p className="section-subtitle">
            Join us in building a future where quality, ethics, and sustainability drive the food industry.
          </p>
        </div>
        
        {/* Current Investors */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-semibold text-trupahadi-green text-center mb-12">
            Meet Our Esteemed Investors
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Investor 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="w-24 h-24 rounded-full bg-trupahadi-earth-light flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <img
                      src="https://rishihood.edu.in/wp-content/uploads/2024/04/Sahil-Aggarwal.jpg"
                      alt="Mr. Sahil Aggarwal"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-trupahadi-green mb-2">Mr. Sahil Aggarwal</h4>
                    <p className="text-gray-600 mb-4">Co-Founder and CEO, Rishihood University</p>
                    <p className="text-gray-700">
                      Sahil Aggarwal is the Co-Founder and CEO of Rishihood University, India's first impact university. An IIT Delhi graduate, he is a visionary leader dedicated to transforming education and fostering social impact. His strategic expertise and deep understanding of entrepreneurship bring immense value to Trupahadi's mission of sustainable food production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Investor 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="w-24 h-24 rounded-full bg-trupahadi-earth-light flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <img
                      src="ajay.JPG"
                      alt="Mr. Ajay Gupta"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-trupahadi-green mb-2">Mr. Ajay Gupta</h4>
                    <p className="text-gray-600 mb-4">Founder, Bachpan Play School & Academic Heights Public School</p>
                    <p className="text-gray-700">
                      Ajay Gupta, the Founder of Bachpan Play School and Academic Heights Public School, is a pioneer in education with a strong commitment to societal growth. His leadership and experience in scaling ventures provide Trupahadi with strategic direction and business expansion insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
