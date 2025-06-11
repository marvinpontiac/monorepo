import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/FormElements/Inline Error',
  tags: ['autodocs'],
  render: (args) => (
    <div
      id={args.id}
      aria-atomic="true"
      aria-relevant="additions text"
      className="acs-test-form-error"
      role="alert"
    >
      <p>{args.errorMessage}</p>
    </div>
  ),
};

export default meta;

type Story = StoryObj;

export const InlineError: Story = {
  args: {
    errorMessage: 'A valid email address is required. Please input valid characters.',
  },
} satisfies Story;
