import { HeroBannerSection } from "@/components/dashboard/HeroBanner";
import { MainContentSection } from "@/components/dashboard/MainContent";
import { ContentDisplaySection } from "@/components/dashboard/ContentDisplay";
import { FAQSection } from "@/components/dashboard/FAQSection";
import { HelpCenterSection } from "@/components/dashboard/HelpCenter";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full  md:gap-24 gap-14 ">
      <HeroBannerSection />
      <MainContentSection />
      <ContentDisplaySection />
      <FAQSection />
      <HelpCenterSection />
    </div>
  );
}
