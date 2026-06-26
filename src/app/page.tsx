import Header from "@/components/Header";
import Hero from "@/components/HeroCinematic";
import About from "@/components/About";
import PresidentMessage from "@/components/PresidentMessage";
import Leadership from "@/components/Leadership";
import Schools from "@/components/Schools";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <PresidentMessage />
      <Leadership />
      <Schools />
      <News />
      <Footer />
    </>
  );
}