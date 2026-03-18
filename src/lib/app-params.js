// src/lib/app-params.js

export function getAppParams() {
  if (typeof window === "undefined") {
    return {};
  }

  const urlParams = new URLSearchParams(window.location.search);

  return {
    source: urlParams.get("source") || "",
    plan: urlParams.get("plan") || "",
  };
}

export const appParams = {
  get: getAppParams,
};