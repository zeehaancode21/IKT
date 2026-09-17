import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SoftwareSection from "@/components/SoftwareSection";
import DrawingAutomationSection from "@/components/DrawingAutomationSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import WorkflowSection from "@/components/WorkflowSection";
import IKTSection from "@/components/IKTSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
// import FloatingQuoteButton from "@/components/FloatingQuoteButton";
// import TeamSection from "@/components/TeamSection";

const Index = () => (
  <>
    <ScrollProgress />
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SoftwareSection />
      <DrawingAutomationSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <WorkflowSection />
      <IKTSection />
      <TestimonialsSection />
      <ContactSection />
      {/* <TeamSection /> */}
    </main>
    <FooterSection />
    {/* <FloatingQuoteButton /> */}
  </>
);

export default Index;
