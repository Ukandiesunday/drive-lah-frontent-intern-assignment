import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout";

import Subscriptions from "./pages/subscription/Subscription";

import DeviceManagement from "./pages/deviceManagent/DeviceManagement";
import NotFound from "./pages/pageNotFound/NotFound";
import Location from "./pages/location/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />} path={"/"}>
          <Route index element={<Location />} path={"/location"}></Route>
          <Route element={<Subscriptions />} path={"/subscription"} />
          <Route element={<DeviceManagement />} path={"/device"} />
          <Route element={<NotFound />} path={"*"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
