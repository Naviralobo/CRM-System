import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.tsx";

import { store } from "./store/store";
import { Provider } from "react-redux";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </HashRouter>
);
