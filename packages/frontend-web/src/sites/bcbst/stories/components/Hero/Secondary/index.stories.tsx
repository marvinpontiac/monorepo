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
        <div className="bcbst-hero__aspect-ratio">
          <div className="bcbst-hero__background">
            <picture>
              <source srcSet={args.image[0]} media="(min-width: 1280px)" />
              <source srcSet={args.image[1]} media="(min-width: 768px)" />
              <img src={args.image[2]} alt="Hero image alt text" />
            </picture>
          </div>
          <div className="bcbst-grid bcbst-hero__grid">
            <div className="bcbst-hero__content">
              {args.headingTag == 'h1' ? (
                <h1 className="bcbst-hero__heading">{args.heading}</h1>
              ) : (
                <h2 className="bcbst-hero__heading">{args.heading}</h2>
              )}
              {args.description && (
                <div className="bcbst-hero__description">
                  <p>{args.description}</p>
                </div>
              )}
              {args.buttonGroup?.length > 0 && (
                <div className="bcbst-hero__btn-group btn-group">
                  {args.buttonGroup.map((button) => (
                    <Button key={button.label} {...button} />
                  ))}
                </div>
              )}
            </div>
            {args.links?.length > 0 && (
              <nav aria-label="jump nav" className="bcbst-hero__jumplinks">
                {args.links.map((link) => (
                  <div key={link.label} className="bcbst-hero__jumplink">
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
    styles: ['bcbst-hero', 'bcbst-hero--secondary', 'bcbst-hero--text-light', 'bcbst-hero--overlay-dark'],
  },
} satisfies Story;

export const LightTextWithoutOverlay: Story = {
  args: {
    ...data.lightText.content,
    ...data.lightText.buttons,
    headingTag: 'h1',
    styles: ['bcbst-hero', 'bcbst-hero--secondary', 'bcbst-hero--text-light'],
  },
} satisfies Story;

export const DarkTextWithLightOverlay: Story = {
  args: {
    ...data.darkText.content,
    ...data.darkText.buttons,
    headingTag: 'h1',
    styles: ['bcbst-hero', 'bcbst-hero--secondary', 'bcbst-hero--text-dark', 'bcbst-hero--overlay-light'],
  },
} satisfies Story;

export const DarkTextWithoutOverlay: Story = {
  args: {
    ...data.darkText.content,
    ...data.darkText.buttons,
    headingTag: 'h1',
    styles: ['bcbst-hero', 'bcbst-hero--secondary', 'bcbst-hero--text-dark'],
  },
} satisfies Story;
