import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};

export const PrimaryFilled: Story = {
  args: {
    color: 'primary',
    variant: 'filled',
    children: 'Primary Filled',
  },
};

export const PrimaryOutlined: Story = {
  args: {
    color: 'primary',
    variant: 'outlined',
    children: 'Primary Outlined',
  },
};

export const SecondaryFilled: Story = {
  args: {
    color: 'secondary',
    variant: 'filled',
    children: 'Secondary Filled',
  },
};

export const SecondaryOutlined: Story = {
  args: {
    color: 'secondary',
    variant: 'outlined',
    children: 'Secondary Outlined',
  },
};
