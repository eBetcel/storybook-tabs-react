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
  content: "conteudo"
};
