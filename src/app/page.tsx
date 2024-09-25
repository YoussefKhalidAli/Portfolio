// Imported Components
import HomePage from "./pages/Home/page";

// Imported Utils
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function Home() {
  useEffect(() => {
    mixpanel.init("YOUR_PROJECT_TOKEN", { debug: true });
  }, []);

  return <HomePage></HomePage>;
}
