import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/FormElements/Textarea',
  tags: ['autodocs'],
  render: (args) => (
    <textarea
      className='acs-test-form-textarea'
      id={args.id}
      autoFocus={args.autoFocus}
      cols={args.cols}
      disabled={args.disabled}
      form={args.form}
      maxLength={args.maxLength}
      name={args.name}
      placeholder={args.placeholder}
      readOnly={args.readOnly}
      required={args.required}
      rows={args.rows}
      wrap={args.wrap}
      aria-aria-required={args.required}
      aria-describedby={args.describedby}
      autoComplete={args.autoComplete}
    />
  ),
};

export default meta;

type Story = StoryObj;

export const Textarea: Story = {
  args: {
    rows: "10",
    cols: "50"
  }
} satisfies Story;

