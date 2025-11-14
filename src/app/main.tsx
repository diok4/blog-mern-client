import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { store } from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  </StrictMode>
);
