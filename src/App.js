import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import SearchAppBar from "./components/Nav"
import "./App.css";

function App() {
  return (
    <NewsContextProvider>
      <SearchAppBar />
      <News />
    </NewsContextProvider>
  );
}

export default App;