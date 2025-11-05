import "@/styles/globals.css";
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return <Component {...pageProps} />;
}
