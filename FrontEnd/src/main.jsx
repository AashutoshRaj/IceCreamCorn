// src/index.js or src/main.jsx (if Vite)
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store from "./store"; // adjust path if your store is elsewhere
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./api/apiClient"; // initialize interceptors

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </ThemeProvider>
);
