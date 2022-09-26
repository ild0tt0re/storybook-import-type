import type { Story, Meta } from '@storybook/react';

import { One } from './one';
const StoryMeta: Meta = {
  component: One,
  title: 'One',
};

const Template: Story = (args) => <One {...args} />;
export default StoryMeta;
export const Primary = Template.bind({});
Primary.args = {};
