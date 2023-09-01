import { useEffect } from "react";
import { GlobalCss } from "./infra/styles/GlobalCreateStyles";

import AppRoutes from "./routes/routes";

function App() {

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) return localStorage.setItem("cart", '[]');
  }, []);

  return (
    <div className="default" >
      <AppRoutes />
      <GlobalCss />
    </div>
  );
}

export default App;
