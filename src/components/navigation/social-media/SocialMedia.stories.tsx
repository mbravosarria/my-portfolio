import { ComponentMeta, ComponentStory } from '@storybook/react';
import SocialMedia, { ISocialMedia } from './SocialMedia';
import { mockSocialMediaProps } from './SocialMedia.mocks';

export default {
  title: 'navigation/SocialMedia',
  component: SocialMedia,
  argTypes: {},
} as ComponentMeta<typeof SocialMedia>;

const Template: ComponentStory<typeof SocialMedia> = (args) => (
  <SocialMedia {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSocialMediaProps.base,
} as ISocialMedia;
