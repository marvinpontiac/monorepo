import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/FormElements/Label',
  tags: ['autodocs'],
  render: (args) => (
    <label className="bcbst-field__label" id={args.id} htmlFor={args.for}>
      {args.label}
      {args.required && <sup className="bcbst-field__required"> *</sup>}
      {args.optional && <span className="bcbst-field__optional"> {args.optional}</span>}
    </label>
  ),
};

export default meta;

type Story = StoryObj;

export const Label: Story = {
  args: {
    label: 'First name',
  },
} satisfies Story;

export const RequiredLabel: Story = {
  args: {
    label: 'First name',
    required: true
  },
} satisfies Story;

export const OptionalLabel: Story = {
  args: {
    label: 'First name',
    optional: "(optional)"
  },
} satisfies Story;
