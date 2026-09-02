import { ActivitiesSection } from "@/components/activities/ActivitiesSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FacilitationSection } from "@/components/sections/FacilitationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ModelSection } from "@/components/sections/ModelSection";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { activities } from "@/data/activities";

export default function HomePage() {
  const moduleCount = new Set(activities.map((activity) => activity.module))
    .size;

  return (
    <>
      <SiteHeader />

      <main id="inicio">
        <HeroSection
          moduleCount={moduleCount}
          activityCount={activities.length}
        />

        <PurposeSection />
        <ActivitiesSection />
        <ModelSection />
        <FacilitationSection />
      </main>

      <SiteFooter />
    </>
  );
}
