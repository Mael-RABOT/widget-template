import { useState, useEffect } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import "./App.css";
import Container from "./container";

function App() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    async function fetchSize() {
      const appWindow = getCurrentWindow();
      const newSize = await appWindow.innerSize();
      setSize(newSize.toLogical(await appWindow.scaleFactor()));
    }
    fetchSize();
  }, []);

  return (
  <div
    className="widget"
    style={{
      width: size.width,
      height: size.height,
    }}
  >
    <div className="widget-header">
      <span>SYSTEM MONITOR</span>
      <span className="status-dot">● ONLINE</span>
    </div>

    <div className="widget-frame">
      <Container />
    </div>
  </div>
);
}

export default App;