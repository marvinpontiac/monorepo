import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Components/Tabset',
  tags: ['autodocs'],
  render: (args) => <h1>{args.data}</h1>,
};

export default meta;

type Story = StoryObj;

export const Tabset: Story = {
  args: {
    data: 'Lorem ipsem',
  },
} satisfies Story;
