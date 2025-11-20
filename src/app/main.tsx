import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Provider as ChakraProvider } from "./layout/chakra/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </Provider>
    </MantineProvider>
  </StrictMode>
);
// после установки чакра слетела ui
