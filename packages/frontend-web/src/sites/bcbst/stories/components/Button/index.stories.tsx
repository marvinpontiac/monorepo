import type { Meta, StoryObj } from '@storybook/react';

/**
 * Buttons and most CTAs throughout Copeland.com are enabled to allow content authors to select which content type they want the CTA to target, including caret and external page links, downloadable content, and video content. CTA content types can often be co-mingled in the same CTA group or component as needed. Each of the four CTA content types are styled with their own distinctive content icon and interaction behavior, as shown below.

 * ### Buttons:
 * “Call to Action” buttons on the new website are designed to accommodate up to 22 characters across one row of text.   
 * In cases where you need to write a longer call to action, try to use links, not buttons.
 */

/**
 * ### Button Text Variant:
 * Essentially the only notable difference between Button CTAs and Text CTAs is that the latter do not display a button background or border.
 */

const meta: Meta = {
  title: 'Components/Buttons',
  tags: ['autodocs'],
  render: (args) => {
    const reversedBackgroundColor = args.variant.includes('reversed') ? 'var(--color-gray-dark56)' : undefined;
    const reversedPadding = args.variant.includes('reversed') ? 'var(--size-spacing-small)' : undefined;
    return (
      <>
        <h2>Anchor elements</h2>
        <div style={{ display: 'flex', gap: 'var(--size-spacing-medium)', flexWrap: 'wrap', backgroundColor: reversedBackgroundColor, padding: reversedPadding }}>
          <a href="/index#hello-world" className={`bcbst-btn ${args.variant} bcbst-btn--caret`}>
            {args.label}
          </a>
          <a href="/index2#hello-world" className={`bcbst-btn ${args.variant} bcbst-btn--download`}>
            Download document
          </a>
          <a href="/index3#hello-world" className={`bcbst-btn ${args.variant} bcbst-btn--video`}>
            Watch video
          </a>
          <a href="/index4#hello-world" className={`bcbst-btn ${args.variant} bcbst-btn--external`}>
            External link
          </a>
          <a href="/index5#hello-world" aria-disabled="true" className={`bcbst-btn ${args.variant}`}>
            Disabled
          </a>
        </div>

        <h2>Button elements</h2>
        <div style={{ display: 'flex', gap: 'var(--size-spacing-medium)', flexWrap: 'wrap', backgroundColor: reversedBackgroundColor, padding: reversedPadding }}>
          <button type="button" className={`bcbst-btn ${args.variant} bcbst-btn--caret`}>
            {args.label}
          </button>
          <button type="button" className={`bcbst-btn ${args.variant} bcbst-btn--download`}>
            Download document
          </button>
          <button type="button" className={`bcbst-btn ${args.variant} bcbst-btn--video`}>
            Watch video
          </button>
          <button type="button" className={`bcbst-btn ${args.variant} bcbst-btn--external`}>
            External link
          </button>
          <button type="button" disabled aria-disabled="true" className={`bcbst-btn ${args.variant}`}>
            Disabled
          </button>
        </div>
      </>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    label: 'string',
    variant: 'bcbst-btn--primary',
    icon: 'bcbst-btn--caret'
  },
  render: args => {
    return (
      <a href="/index2#hello-world" className={`bcbst-btn ${args.variant} ${args.icon}`}>
         {args.label}
      </a>
    )
  },
} satisfies Story;

export const Primary: Story = {
  args: {
    label: 'Internal link',
    variant: 'bcbst-btn--primary',
  },
} satisfies Story;

export const Secondary: Story = {
  args: {
    label: 'Internal link',
    variant: 'bcbst-btn--secondary',
  },
} satisfies Story;

export const Tertiary: Story = {
  args: {
    label: 'Internal link',
    variant: 'bcbst-btn--tertiary',
  },
} satisfies Story;

export const Reversed: Story = {
  args: {
    label: 'Internal link',
    variant: 'bcbst-btn--reversed',
  },
} satisfies Story;

export const TextPrimary: Story = {
  args: {
    label: 'Internal link',
    variant: 'bcbst-btn--text-primary',
  },
} satisfies Story;

export const TextSecondary: Story = {
  args: {
    label: 'Internal link',
    variant: 'bcbst-btn--text-secondary',
  },
} satisfies Story;

export const TextReversed: Story = {
  args: {
    label: 'Internal link',
    variant: 'bcbst-btn--text-reversed',
  },
} satisfies Story;
