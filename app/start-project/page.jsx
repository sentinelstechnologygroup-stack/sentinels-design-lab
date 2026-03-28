// app/start-project/page.jsx
import { Suspense } from "react";
import StartProjectPage from "@/pages/StartProject";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <StartProjectPage />
    </Suspense>
  );
}