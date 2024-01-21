import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useCustomNavigation = (enableNavigation = true) => {
  const navigate = useNavigate();
  const location = useLocation();
  let prevLocation = location.pathname;

  useEffect(() => {
    if (!enableNavigation) {
      return; // Skip the effect if navigation is disabled
    }

    const handlePopState = () => {
      // Get the current pathname
      const currentPathname = location.pathname;

      // Check if the previous pathname is the same as the current one
      if (prevLocation !== currentPathname) {
        // Automatically navigate to the previous page when the user clicks the browser's back button
        navigate(-1);
      }

      // Update the previous location
      prevLocation = currentPathname;
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [enableNavigation, navigate, location]);

  const goBack = () => {
    // Manually navigate to the previous page
    navigate(-1);
  };

  const goToListPage = () => {
    // Manually navigate to the "/list" page
    navigate("/list");
  };

  return { goBack, goToListPage };
};

export default useCustomNavigation;
