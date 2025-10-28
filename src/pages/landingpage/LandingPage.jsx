import HeroSection from "../../components/hero/HeroSection";
import FeaturesSection from "../../components/feature/FeaturesSection";
import Footer from "../../components/footer/Footer";
import styles from "./LandingPage.module.css";
import Header from "../../components/header/Header";
import AboutUs from "../../components/about/AboutUs";
import Testimonials from "../../components/testimonials/Testimonials";
import ContactUs from "../../components/contact/ContactUs";

export default function LandingPage() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Header />
        <HeroSection />
        <AboutUs />
        <FeaturesSection />
        <Testimonials />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
