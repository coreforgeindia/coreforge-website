import { useEffect, useState } from "react";
import CoreForgeLoader from "./CoreForgeLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  if (loading) {
    return <CoreForgeLoader duration={5} />;
  }

  return <main>Your website goes here.</main>;
}
