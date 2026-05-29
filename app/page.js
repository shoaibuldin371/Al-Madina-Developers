import TopContactBar from "@/components/TopContactBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PromoVideo from "@/components/PromoVideo";
import PakArabVideo from "@/components/PakArabVideo";
import ContactPersons from "@/components/ContactPersons";
import Services from "@/components/Services";
import FeaturedProperties from "@/components/FeaturedProperties";
import InstallmentPlans from "@/components/InstallmentPlans";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <TopContactBar />
      <Navbar />
      <Hero />
      <About />
      <PromoVideo />
      <PakArabVideo />
      <ContactPersons />
      <Services />
      <FeaturedProperties />
      <InstallmentPlans />
      <Gallery />
      <WhyChooseUs />
      <Location />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}
