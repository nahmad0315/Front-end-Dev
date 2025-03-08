import MarketTrends from "./market_trends";
import HomeBuying from "./HomeBuyingSelling";
import LegalResources from "./LegalResources";
import PropertyManagement from "./PropertyManagement";
import CaseStudies from "./CaseStudies";
export default function ResourcesPage() {
  return (
    <>
      {/* HEADER AND FOOTER ARE INCLUDED THROUGH layout.tsx so need to get it in hear again... */}
      <MarketTrends />
      <HomeBuying />
      <LegalResources />
      <PropertyManagement />
      <CaseStudies />
    </>
  );
}
