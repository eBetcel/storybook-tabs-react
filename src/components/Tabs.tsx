import "./Tabs.css";
import { useState } from "react";
import Tab from "./Tab";

interface TabProps {
  title: string;
  content: string;
}

export interface TabsProps {
  tabs: Array<TabProps>;
}

const TabComponents: React.FC<TabsProps> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="tab-components-container">
      <div className="buttons-container">
        {tabs.map((tab, index) => {
          return (
            <button
              key={tab.title}
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
            return <Tab key={tab.content} content={tab.content} />;
          }
          return <span></span>;
        })}
      </div>
    </div>
  );
};

export default TabComponents;
