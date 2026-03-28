// src/pages/Home.jsx
"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import FeaturedWork from "@/components/home/FeaturedWork";
import ApproachSection from "@/components/home/ApproachSection";
import FounderVision from "@/components/home/FounderVision";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import TechStack from "@/components/home/TechStack";
import HomePackagesPreview from "@/components/home/HomePackagesPreview";
import HomeProofStrip from "@/components/home/HomeProofStrip";
import HomeFinalCTA from "@/components/home/HomeFinalCTA";
import WhyHireSDL from "@/components/home/WhyHireSDL";
import ProofStrip from "@/components/home/ProofStrip";
import ProcessSteps from "@/components/home/ProcessSteps";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyHireSDL />
      <ProofStrip />
      <ProcessSteps />
      <HomeProofStrip />
      <WhatWeBuild />
      <HomePackagesPreview />
      <ApproachSection />
      <FeaturedWork />
      <FounderVision />
      <IndustriesStrip />
      <TechStack />
      <HomeFinalCTA />
    </>
  );
}