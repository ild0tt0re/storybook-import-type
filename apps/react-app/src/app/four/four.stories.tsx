import type { Story, Meta } from '@storybook/react';

import { Four } from './four';
const StoryMeta: Meta = {
  component: Four,
  title: 'Four',
};

const Template: Story = (args) => <Four {...args} />;
export default StoryMeta;
export const Primary = Template.bind({});
Primary.args = {};
