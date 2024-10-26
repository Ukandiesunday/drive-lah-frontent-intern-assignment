import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout";

import Subscriptions from "./pages/subscription/Subscription";
import Device from "./pages/device/Device";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />} path={"/"}>
          <Route index element={<Subscriptions />} />
          <Route element={<Device />} path={"/device"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
