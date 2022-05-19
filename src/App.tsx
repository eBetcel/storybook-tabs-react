import React from "react";
import "./App.css";
import TabComponents from "./components/Tabs";

const tabs = [
  {
    title: "Tab 1",
    content: "Essa é a tab 1"
  },
  {
    title: "Tab 2",
    content: "Essa é a tab 2"
  },
  {
    title: "Tab 3",
    content: "Essa é a tab 3"
  },
  {
    title: "Tab 4",
    content: "Essa é a tab 4"
  }
];

function App() {
  return <TabComponents tabs={tabs} />;
}

export default App;
