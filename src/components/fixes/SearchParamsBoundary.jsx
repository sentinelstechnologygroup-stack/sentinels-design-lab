// src/components/fixes/SearchParamsBoundary.jsx
"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SearchParamsInner() {
  const searchParams = useSearchParams();

  // Example usage:
  const source = searchParams.get("source") || "";
  const plan = searchParams.get("plan") || "";

  return (
    <>
      {/* Replace this with your real UI */}
      <div data-source={source} data-plan={plan} />
    </>
  );
}

export default function SearchParamsBoundary() {
  return (
    <Suspense fallback={null}>
      <SearchParamsInner />
    </Suspense>
  );
}