import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Four } from './four';

export default {
  component: Four,
  title: 'Four',
} as ComponentMeta<typeof Four>;

const Template: ComponentStory<typeof Four> = (args) => <Four {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
