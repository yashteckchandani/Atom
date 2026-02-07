import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import LandingPage from "./sections/LandingPage";
import ChatPage from "./sections/ChatPage";

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload && location.pathname === "/chat") {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
};

export default AppRoutes;
