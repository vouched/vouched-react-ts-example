import { useEffect } from "react";
import loadVouched from "./vouched-script";

const App = () => {
  useEffect(() => {
    loadVouched();
  }, []);

  return <div id="vouched-element" style={{ height: "100%" }}></div>;
};

export default App;
