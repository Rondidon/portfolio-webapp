import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routesConfig from "../routing/routingConfig";
import Loading from "./Loading";
import { RouteConfig } from "../routing/types/routeConfig";

const Main: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Zeige den Ladebildschirm beim Routenwechsel
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 100); // Simuliere eine Ladezeit
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="app-main container">
      <Suspense fallback={<Loading />}>
        <Routes>
          {routesConfig.map((route: RouteConfig, index: number) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
