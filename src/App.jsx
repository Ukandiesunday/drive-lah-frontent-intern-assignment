import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout";

import Subscriptions from "./pages/subscription/Subscription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />} path={"/"}>
          <Route index element={<Subscriptions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
