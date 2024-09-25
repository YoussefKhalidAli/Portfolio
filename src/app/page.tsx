// Imported Components
import HomePage from "./pages/Home/page";

//Import Utils
import mixpanel from "mixpanel-browser";

export default function Home() {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN!, {
    debug: true,
  });

  return <HomePage></HomePage>;
}
