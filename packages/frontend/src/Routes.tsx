import { Route, Routes } from "react-router-dom";
import NotFound from "./containers/NotFound.tsx";
import Home from "./containers/Home.tsx";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    {/* Finally, catch all unmatched routes */}
    <Route path="*" element={<NotFound />} />;
  </Routes>
  );
}
