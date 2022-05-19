import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabComponents, { TabsProps } from "../components/Tabs";
export default {
  title: "Tab/Tab",
  component: TabComponents
} as ComponentMeta<typeof TabComponents>;

const Template: ComponentStory<typeof TabComponents> = (args: TabsProps) => (
  <TabComponents {...args} />
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
