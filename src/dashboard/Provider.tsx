
import React, { createContext, useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface DashboardProviderProps {
  children: React.ReactNode;
}

interface ProviderValues {
  sidebarOpen?: boolean;
  openSidebar?: () => void;
  closeSidebar?: () => void;
  sidebarRightOpen?: boolean;
  openSidebarRight?: () => void;
  closeSidebarRight?: () => void;
}

const Context = createContext<ProviderValues>({});

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarRightOpen, setSidebarRightOpen] = useState(false);
  const location = useLocation();

  const openSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const openSidebarRight = useCallback(() => {
    setSidebarRightOpen(true);
  }, []);

  const closeSidebarRight = useCallback(() => {
    setSidebarRightOpen(false);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    return () => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      }
    };
  }, [location, sidebarOpen]);

  useEffect(() => {
    return () => {
      if (sidebarRightOpen) {
        setSidebarRightOpen(false);
      }
    };
  }, [location, sidebarRightOpen]);

  const contextValues: ProviderValues = {
    sidebarOpen,
    openSidebar,
    closeSidebar,
    sidebarRightOpen,
    openSidebarRight,
    closeSidebarRight,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
}

export function useDashboardContext() {
  return React.useContext(Context);
}
