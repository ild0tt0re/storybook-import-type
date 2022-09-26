import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Two } from './two';

export default {
  component: Two,
  title: 'Two',
} as ComponentMeta<typeof Two>;

const Template: ComponentStory<typeof Two> = (args) => <Two {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
