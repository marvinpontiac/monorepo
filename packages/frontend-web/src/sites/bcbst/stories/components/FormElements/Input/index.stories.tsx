import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/FormElements/Input',
  tags: ['autodocs'],
  render: (args) => (
    <input
      className='bcbst-form-input'
      type={args.type}
      id={args.id}
      name={args.name}
      maxLength={args.maxLength}
      minLength={args.minLength}
      pattern={args.pattern}
      required={args.required}
      aria-aria-required={args.required}
      aria-describedby={args.describedby}
      autoComplete={args.autoComplete}
      placeholder={args.placeholder}
      defaultValue={args.defaultValue}
    />
  ),
};

export default meta;

type Story = StoryObj;

export const Input: Story = {
} satisfies Story;

export const Placeholder: Story = {
  args: {
    placeholder: 'MM/DD/YYYY',
  },
} satisfies Story;

export const Value: Story = {
  args: {
    defaultValue: 'Default Value',
  },
} satisfies Story;