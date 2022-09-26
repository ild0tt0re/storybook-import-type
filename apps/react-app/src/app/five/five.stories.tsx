import { ComponentStory, ComponentMeta } from '@storybook/react';
import AnyOfCustomOperatorComponentNew from './five';

export default {
  component: AnyOfCustomOperatorComponentNew,
  title: 'AnyOfCustomOperatorComponentNew',
} as ComponentMeta<typeof AnyOfCustomOperatorComponentNew>;

const Template: ComponentStory<typeof AnyOfCustomOperatorComponentNew> = (
  args
) => <AnyOfCustomOperatorComponentNew {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
