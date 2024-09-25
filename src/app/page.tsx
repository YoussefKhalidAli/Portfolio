// Imported Components
import HomePage from "./pages/Home/page";

// Imported Utils
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function Home() {
  useEffect(() => {
    mixpanel.init("57138c3bac41b3081f111a8e5deded12", { debug: true });
  }, []);

  return <HomePage></HomePage>;
}
