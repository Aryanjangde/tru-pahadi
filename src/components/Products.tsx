import { ShoppingCart, Award, Leaf } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 2,
      name: "Wood-Pressed Organic Black Mustard Oil",
      image: "blackmustard.jpeg",
      description: "Premium black mustard oil extracted using traditional wood-pressing methods to retain maximum nutritional value.",
      benefits: ["High pungency", "Rich aroma", "Traditional process", "Pure & natural"]
    },
    {
      id: 3,
      name: "Wood-Pressed Organic Groundnut Oil",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/11/SD/DB/XV/107877514/peanut-oil-500x500.jpg",
      description: "Pure groundnut oil extracted naturally through wood-pressing, preserving its authentic taste and health benefits.",
      benefits: ["Heart healthy", "High smoke point", "Natural extraction", "No preservatives"]
    },
    {
      id: 4,
      name: "Wood-Pressed Organic Sesame Oil",
      image: "seasame.jpeg",
      description: "Traditional wood-pressed sesame oil rich in natural antioxidants and authentic flavor.",
      benefits: ["Rich in minerals", "Traditional process", "Chemical-free", "Pure aroma"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Pure, authentic and chemical-free products straight from the hills of Uttarakhand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-trupahadi-beige rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-trupahadi-green flex items-center justify-center mr-2">
                    <Leaf size={12} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-trupahadi-green">100% Organic</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-trupahadi-green mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit, index) => (
                      <span 
                        key={index} 
                        className="inline-block bg-trupahadi-green-light text-trupahadi-green text-xs px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full flex items-center justify-center bg-trupahadi-green text-white hover:bg-trupahadi-green-dark transition duration-300 py-2 rounded-md">
                  <ShoppingCart size={16} className="mr-2" />
                  Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold text-trupahadi-green mb-6">
              Our Quality Commitment
            </h3>
            <p className="text-gray-700 mb-8">
              Every Trupahadi product undergoes rigorous quality checks to ensure it meets our stringent standards for purity, flavor, and nutritional value. We believe in transparency and traceability, which is why we take pride in sharing the journey of our products from farm to table.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              <div className="p-4">
                <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={20} className="text-trupahadi-green" />
                </div>
                <h4 className="font-medium mb-1">FSSAI Approved</h4>
                <p className="text-sm text-gray-600">Meets safety standards</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf size={20} className="text-trupahadi-green" />
                </div>
                <h4 className="font-medium mb-1">Organic Certified</h4>
                <p className="text-sm text-gray-600">Chemical-free farming</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={20} className="text-trupahadi-green" />
                </div>
                <h4 className="font-medium mb-1">DPIIT Recognized</h4>
                <p className="text-sm text-gray-600">Govt. of India certified</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={20} className="text-trupahadi-green" />
                </div>
                <h4 className="font-medium mb-1">NPOP Certified</h4>
                <p className="text-sm text-gray-600">National organic certification</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-trupahadi-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={20} className="text-trupahadi-green" />
                </div>
                <h4 className="font-medium mb-1">India Organic</h4>
                <p className="text-sm text-gray-600">Certified organic products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
