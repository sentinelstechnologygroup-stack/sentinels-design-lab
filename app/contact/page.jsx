// app/contact/page.jsx
import { Suspense } from "react";
import ContactPage from "@/pages/Contact";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ContactPage />
    </Suspense>
  );
}