import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Three } from './three';

export default {
  component: Three,
  title: 'Three',
} as ComponentMeta<typeof Three>;

const Template: ComponentStory<typeof Three> = (args) => <Three {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
