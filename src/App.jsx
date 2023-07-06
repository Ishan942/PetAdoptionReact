import React from "react";
import ReactDOM from "react-dom/client";
import Searchparams from "./Searchparams";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to={`/`}>Adopt ME!</Link>
          </header>

          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<Searchparams />}></Route>
          </Routes>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
