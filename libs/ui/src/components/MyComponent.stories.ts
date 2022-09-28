import { moduleMetadata, Story, Meta } from '@storybook/angular';
import MyComponent from './MyComponent';

export default {
  title: 'MyComponent',
  component: MyComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<typeof MyComponent>;

const Template: Story<typeof MyComponent> = (args: typeof MyComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
