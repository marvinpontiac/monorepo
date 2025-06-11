import type { Meta, StoryObj } from '@storybook/react';
import { composeStories } from '@storybook/react';
import data from './data.json';

// reuse stories
import * as buttonStories from '../../Button/index.stories';

const { Button } = composeStories(buttonStories);

const meta: Meta = {
  title: 'Components/Hero/Secondary',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => {
    return (
      <div className={[args.styles.join(' ') + ' ' + args.heroVariant].join(' ')}>
        <div className="acs-test-hero__aspect-ratio">
          <div className="acs-test-hero__background">
            <picture>
              <source srcSet={args.image[0]} media="(min-width: 1280px)" />
              <source srcSet={args.image[1]} media="(min-width: 768px)" />
              <img src={args.image[2]} alt="Hero image alt text" />
            </picture>
          </div>
          <div className="acs-test-grid acs-test-hero__grid">
            <div className="acs-test-hero__content">
              {args.headingTag == 'h1' ? (
                <h1 className="acs-test-hero__heading">{args.heading}</h1>
              ) : (
                <h2 className="acs-test-hero__heading">{args.heading}</h2>
              )}
              {args.description && (
                <div className="acs-test-hero__description">
                  <p>{args.description}</p>
                </div>
              )}
              {args.buttonGroup?.length > 0 && (
                <div className="acs-test-hero__btn-group btn-group">
                  {args.buttonGroup.map((button) => (
                    <Button key={button.label} {...button} />
                  ))}
                </div>
              )}
            </div>
            {args.links?.length > 0 && (
              <nav aria-label="jump nav" className="acs-test-hero__jumplinks">
                {args.links.map((link) => (
                  <div key={link.label} className="acs-test-hero__jumplink">
                    <Button {...link} />
                  </div>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj;

export const LightTextWithDarkOverlay: Story = {
  args: {
    ...data.lightText.content,
    ...data.lightText.buttons,
    headingTag: 'h1',
    styles: ['acs-test-hero', 'acs-test-hero--secondary', 'acs-test-hero--text-light', 'acs-test-hero--overlay-dark'],
  },
} satisfies Story;

export const LightTextWithoutOverlay: Story = {
  args: {
    ...data.lightText.content,
    ...data.lightText.buttons,
    headingTag: 'h1',
    styles: ['acs-test-hero', 'acs-test-hero--secondary', 'acs-test-hero--text-light'],
  },
} satisfies Story;

export const DarkTextWithLightOverlay: Story = {
  args: {
    ...data.darkText.content,
    ...data.darkText.buttons,
    headingTag: 'h1',
    styles: ['acs-test-hero', 'acs-test-hero--secondary', 'acs-test-hero--text-dark', 'acs-test-hero--overlay-light'],
  },
} satisfies Story;

export const DarkTextWithoutOverlay: Story = {
  args: {
    ...data.darkText.content,
    ...data.darkText.buttons,
    headingTag: 'h1',
    styles: ['acs-test-hero', 'acs-test-hero--secondary', 'acs-test-hero--text-dark'],
  },
} satisfies Story;
