import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { y: -5, transition: { duration: 0.2 } }
};

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Dr. Chander Kanwar",
      location: "Delhi",
      rating: 5,
      text: "the laddoos were super tasty! When I looked at the ingredients, I was like—wait, seriously? All that goodness packed into one bite? Never thought something this healthy could taste so good. Thanks for that sweet surprise today. You should totally make toffee versions too—kids would love them!",
      image: "cust1.jpg"
    },
    {
      id: 2,
      name: "Soniya",
      location: "Delhi",
      rating: 5,
      text: "My mom and I have a sweet tooth, but we’re careful about what we eat — no refined sugar, no artificial stuff. These millet laddoos felt truly clean and full of flavour. My mom loved them, and so did I! They’re tasty, addictive in the best way, and perfect for guilt-free family celebrations.",
      image: "cust2.jpg"
    },
    {
      id: 3,
      name: "Anant",
      location: "Uttrakhand",
      rating: 5,
      text: "Yaar, I’m not even trying to exaggerate — but seriously, these True Pahadi millet laddoos are something else. They give me energy all day long! And you know I’m super conscious about what I eat — these just fit perfectly. Great for my gut, great for my work routine. Thank you so much for sending them… but listen, my order is still pending, okay? One more dabba, please — jaldi bhejna!",
      image: "cust3.jpg"
    }
  ];

  return (
    <motion.section
      id="reviews"
      className="py-20 bg-trupahadi-beige overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container-custom text-center mb-16" variants={itemVariants}>
        <h2 className="section-title">Customer Reviews</h2>
        <p className="section-subtitle">
          Hear what our customers have to say about their experience with TruPahadi products.
        </p>
      </motion.div>

      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div
                  className="bg-white rounded-xl overflow-hidden shadow-sm group cursor-pointer relative p-8 h-full"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="absolute top-6 right-6 text-trupahadi-earth opacity-20">
                    <Quote size={40} />
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-semibold text-trupahadi-green">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700">{review.text}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static mx-2 transform-none" />
            <CarouselNext className="static mx-2 transform-none" />
          </div>
        </Carousel>
      </motion.div>
    </motion.section>
  );
};

export default Reviews;
