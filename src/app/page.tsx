import { Masthead } from "@/components/Masthead";
import { HeroCrossing } from "@/components/HeroCrossing";
import { EditorialIntro } from "@/components/EditorialIntro";
import { NeighborhoodAtlas } from "@/components/NeighborhoodAtlas";
import { PassageReel } from "@/components/PassageReel";
import { StatBand } from "@/components/StatBand";
import { AuthorNote } from "@/components/AuthorNote";
import { WhatYoullLearn } from "@/components/WhatYoullLearn";
import { BuyCard } from "@/components/BuyCard";
import { SampleChapterGate } from "@/components/SampleChapterGate";
import { SeriesContext } from "@/components/SeriesContext";
import { FAQ } from "@/components/FAQ";
import { FooterEditorial } from "@/components/FooterEditorial";

export default function Home() {
  return (
    <main className="relative">
      <Masthead />
      <HeroCrossing />
      <EditorialIntro />
      <StatBand />
      <NeighborhoodAtlas />
      <PassageReel />
      <AuthorNote />
      <WhatYoullLearn />
      <BuyCard />
      <SampleChapterGate />
      <SeriesContext />
      <FAQ />
      <FooterEditorial />
    </main>
  );
}
