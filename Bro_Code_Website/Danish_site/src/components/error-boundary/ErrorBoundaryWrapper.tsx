"use client";

import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import fallbackRender from "@/components/error-boundary/fallbackRender";

const ErrorBoundaryWrapper = ({ children }: { children: ReactNode }) => {
  return <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>;
};

export default ErrorBoundaryWrapper;
