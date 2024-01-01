
// import React, { createContext, useState, useCallback, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// interface DashboardProviderProps {
//   children: React.ReactNode;
// }

// interface ProviderValues {
//   sidebarOpen?: boolean;
//   openSidebar?: () => void;
//   closeSidebar?: () => void;
//   sidebarRightOpen?: boolean;
//   openSidebarRight?: () => void;
//   closeSidebarRight?: () => void;
// }

// const Context = createContext<ProviderValues>({});

// export function DashboardProvider({ children }: DashboardProviderProps) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarRightOpen, setSidebarRightOpen] = useState(false);
//   const location = useLocation();

//   const openSidebar = useCallback(() => {
//     setSidebarOpen(true);
//   }, []);

//   const closeSidebar = useCallback(() => {
//     setSidebarOpen(false);
//   }, []);

//   const openSidebarRight = useCallback(() => {
//     setSidebarRightOpen(true);
//   }, []);

//   const closeSidebarRight = useCallback(() => {
//     setSidebarRightOpen(false);
//   }, []);

//   useEffect(() => {
//     document.documentElement.style.overflow = "hidden";

//     return () => {
//       document.documentElement.style.overflow = "auto";
//     };
//   }, []);

//   useEffect(() => {
//     return () => {
//       if (sidebarOpen) {
//         setSidebarOpen(false);
//       }
//     };
//   }, [location, sidebarOpen]);

//   useEffect(() => {
//     return () => {
//       if (sidebarRightOpen) {
//         setSidebarRightOpen(false);
//       }
//     };
//   }, [location, sidebarRightOpen]);

//   const contextValues: ProviderValues = {
//     sidebarOpen,
//     openSidebar,
//     closeSidebar,
//     sidebarRightOpen,
//     openSidebarRight,
//     closeSidebarRight,
//   };

//   return <Context.Provider value={contextValues}>{children}</Context.Provider>;
// }

// export function useDashboardContext() {
//   return React.useContext(Context);
// }
// Importing necessary React features and hooks
import React, { createContext, useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Defining the properties expected by DashboardProvider component
interface DashboardProviderProps {
  children: React.ReactNode;
}

// Defining the shape of the context values
interface ProviderValues {
  sidebarOpen?: boolean;
  openSidebar?: () => void;
  closeSidebar?: () => void;
  sidebarRightOpen?: boolean;
  openSidebarRight?: () => void;
  closeSidebarRight?: () => void;
}

// Creating a context to be used by components that need access to dashboard-related state and functions
const Context = createContext<ProviderValues>({});

// DashboardProvider component
export function DashboardProvider({ children }: DashboardProviderProps) {
  // State to manage whether the left sidebar is open or closed
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // State to manage whether the right sidebar is open or closed
  const [sidebarRightOpen, setSidebarRightOpen] = useState(false);

  // Hook from react-router-dom to get information about the current URL location
  const location = useLocation();

  // Function to open the left sidebar
  const openSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  // Function to close the left sidebar
  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // Function to open the right sidebar
  const openSidebarRight = useCallback(() => {
    setSidebarRightOpen(true);
  }, []);

  // Function to close the right sidebar
  const closeSidebarRight = useCallback(() => {
    setSidebarRightOpen(false);
  }, []);

  // Effect hook to disable scrolling when the component mounts
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    // Cleanup function to enable scrolling when the component unmounts
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  // Effect hook to close the left sidebar when the URL location changes
  useEffect(() => {
    return () => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      }
    };
  }, [location, sidebarOpen]);

  // Effect hook to close the right sidebar when the URL location changes
  useEffect(() => {
    return () => {
      if (sidebarRightOpen) {
        setSidebarRightOpen(false);
      }
    };
  }, [location, sidebarRightOpen]);

  // Creating an object with values to be provided by the context
  const contextValues: ProviderValues = {
    sidebarOpen,
    openSidebar,
    closeSidebar,
    sidebarRightOpen,
    openSidebarRight,
    closeSidebarRight,
  };

  // Providing the context values to the components within the DashboardProvider
  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
}

// Hook to conveniently access the context values within other components
export function useDashboardContext() {
  return React.useContext(Context);
}
