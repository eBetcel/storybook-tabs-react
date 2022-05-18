import "./Tabs.css";
import { useState } from "react";

interface TabProps {
  content: string;
}

const Tab: React.FC<TabProps> = ({ content }) => {
  return (
    <div>
      <span>{content}</span>
    </div>
  );
};

export default Tab;
