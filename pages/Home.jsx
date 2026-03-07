"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import FeaturedWork from "@/components/home/FeaturedWork";
import ApproachSection from "@/components/home/ApproachSection";
import IndustriesStrip from "@/components/home/IndustriesStrip";
import TechStack from "@/components/home/TechStack";
import FounderVision from "@/components/home/FounderVision";
import CTASection from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeBuild />
      <FounderVision />
      <FeaturedWork />
      <ApproachSection />
      <IndustriesStrip />
      <TechStack />
      <CTASection />
    </>
  );
}