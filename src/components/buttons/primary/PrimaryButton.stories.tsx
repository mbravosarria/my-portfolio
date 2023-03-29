import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryButton, { IPrimaryButton } from './PrimaryButton';
import { mockPrimaryButtonProps } from './PrimaryButton.mocks';

export default {
  title: 'buttons/PrimaryButton',
  component: PrimaryButton,
  argTypes: {},
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockPrimaryButtonProps.base,
} as IPrimaryButton;
