import { useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1) || "unknown";

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0a0a0f]">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-light text-white/10">404</h1>
            <div className="h-0.5 w-16 bg-white/10 mx-auto" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-medium text-white">Page Not Found</h2>
            <p className="text-white/40 leading-relaxed">
              The page{" "}
              <span className="font-medium text-white/60">"{pageName}"</span>{" "}
              doesn&apos;t exist.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#0a0a0f] bg-white rounded-full hover:bg-white/90 transition-all"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}