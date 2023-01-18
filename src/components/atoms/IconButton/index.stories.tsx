import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from './index';
import SVG from '../../../utils/SVG';

export default {
  title: 'components/IconButton',
  component: IconButton,
  argTypes: {
    children: {
      control: {
        type: 'select',
      },
      options: ['notice', 'menu'],
    },
  },
  parameters: {
    componentSubtitle: '아이콘 버튼',
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <SVG name={args.children} width={24} height={24} viewBox="0 0 24 24" />
  </IconButton>
);

export const WithoutText = Template.bind({});
WithoutText.args = {
  label: '알림',
  children: 'notice',
  withText: false,
  disabled: false,
};

export const WithText = Template.bind({});
WithText.args = {
  label: '알림',
  children: 'notice',
  withText: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '알림',
  children: 'notice',
  disabled: true,
};
