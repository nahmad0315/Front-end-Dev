"use client";

import { ReactNode, Suspense } from "react";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import ErrorBoundaryWrapper from "@/components/error-boundary/ErrorBoundaryWrapper";
import { usePathname } from "next/navigation";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isAdmin =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/user") ||
    pathname.startsWith("/auth");

  return (
    <div className="bg-white w-full h-full">
      {/* Hide Header & Footer for Admin Pages */}
      {!isAdmin && <HeaderComponent />}

      <div className="flex flex-col min-h-[calc(100vh-300px)]">
        <ErrorBoundaryWrapper>
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <span>Loading...</span>
              </div>
            }
          >
            {children}
          </Suspense>
        </ErrorBoundaryWrapper>
      </div>

      {!isAdmin && <FooterComponent />}
    </div>
  );
};

export default LayoutComponent;
