import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TabProps } from "../components/Tab";
import Tab from "../components/Tab";
export default {
  title: "Tab/Tab",
  component: Tab
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args: TabProps) => (
  <Tab {...args} />
);

export const Q1 = Template.bind({});
Q1.args = {
  tabs: [
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
  ]
};
