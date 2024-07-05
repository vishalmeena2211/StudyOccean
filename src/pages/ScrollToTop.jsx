import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Component for scrolling to the top of the page on route change
export default function ScrollToTop() {
  // Get current pathname from location
  const { pathname } = useLocation();

  // Scroll to the top of the page when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component does not render anything, it only handles side effects
  return null;
}
