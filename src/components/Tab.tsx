import "./Tabs.css";

export interface TabProps {
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
