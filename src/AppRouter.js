import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboad";
import Server from "./components/server";
import Application from "./components/application";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" index element={<Dashboard />} />
      <Route path="/servers" index element={<Server />} />
      <Route path="/applications" index element={<Application />} />
    </Routes>
  );
};

export default AppRouter;
