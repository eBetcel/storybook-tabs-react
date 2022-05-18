import "./Tabs.css";
import { useState } from "react";
import Tab from "./Tab";

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

const TabComponents = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="tab-components-container">
      <div className="buttons-container">
        {tabs.map((tab, index) => {
          return (
            <button
              className={
                currentTab !== index ? "tab-button" : "tab-button-selected"
              }
              onClick={() => setCurrentTab(index)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <div className="content-container">
        {tabs.map((tab, index) => {
          if (index === currentTab) {
            return <Tab content={tab.content} />;
          }
          return <span></span>;
        })}
      </div>
    </div>
  );
};

export default TabComponents;
