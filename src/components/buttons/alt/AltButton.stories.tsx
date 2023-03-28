import { ComponentMeta, ComponentStory } from '@storybook/react';
import AltButton, { IAltButton } from './AltButton';
import { mockAltButtonProps } from './AltButton.mocks';

export default {
  title: 'templates/AltButton',
  component: AltButton,
  argTypes: {},
} as ComponentMeta<typeof AltButton>;

const Template: ComponentStory<typeof AltButton> = (args) => (
  <AltButton {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockAltButtonProps.base,
} as IAltButton;
