import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: 'Variant type for the button ',
    },
    size: {
      description: 'Button sizes',
    },
    onClick: {
      action: 'clicked',
      description: 'Function Called when the button is clicked',
    },
    children: {
      control: 'text',
      description: 'Content to be displayed inside the button',
    },
    className: {
      description: 'Custom tailwind css classes to applyh to the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    onClick: action('default clicked'),
    className: 'shadow-lg',
    children: 'Default',
  },
};
