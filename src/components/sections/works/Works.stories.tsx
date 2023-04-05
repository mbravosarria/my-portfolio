import { ComponentMeta, ComponentStory } from '@storybook/react';
import Works, { IWorks } from './Works';
import { mockWorksProps } from './Works.mocks';

export default {
  title: 'sections/Works',
  component: Works,
  argTypes: {},
} as ComponentMeta<typeof Works>;

const Template: ComponentStory<typeof Works> = () => <Works />;

export const Base = Template.bind({});

Base.args = {
  ...mockWorksProps.base,
} as IWorks;
