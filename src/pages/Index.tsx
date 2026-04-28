import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Facts from "@/components/Facts";
import Breeds from "@/components/Breeds";
import Promo from "@/components/Promo";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Facts />
      <Breeds />
      <Promo />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Index;