// Imported Utils
import mixpanel from "mixpanel-browser";

// Imported Components
import { useEffect } from "react";
import HomePage from "./pages/Home/page";

export default function Home() {
  useEffect(() => {
    mixpanel.init("YOUR_PROJECT_TOKEN", { debug: true });
  }, []);

  return <HomePage></HomePage>;
}
