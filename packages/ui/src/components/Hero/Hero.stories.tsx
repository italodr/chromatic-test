import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hero } from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = args => (
  <Hero {...args}></Hero>
);

export const Teaser = Template.bind({});

