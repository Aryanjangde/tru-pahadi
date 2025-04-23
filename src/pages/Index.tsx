
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Directors from "@/components/Directors";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import Investors from "@/components/Investors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Founder />
      <Directors />
      <Mission />
      <Investors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
