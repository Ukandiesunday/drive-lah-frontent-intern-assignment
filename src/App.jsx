import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout";

import Subscriptions from "./pages/subscription/Subscription";

import DeviceManagement from "./pages/deviceManagent/DeviceManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />} path={"/"}>
          <Route index element={<Subscriptions />} />
          <Route element={<DeviceManagement />} path={"/device"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
