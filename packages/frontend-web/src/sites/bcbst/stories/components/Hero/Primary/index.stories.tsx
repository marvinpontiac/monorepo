import type { Meta, StoryObj } from '@storybook/react';
import { composeStories } from '@storybook/react';
import data from './data.json';

// reuse stories
import * as buttonStories from '../../Button/index.stories';
const { Button } = composeStories(buttonStories);

const meta: Meta = {
  title: 'Components/Hero/Primary',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => {
    return (
      <div className={args.styles.join(' ')}>
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
              <h1 className="bcbst-hero__heading">{args.heading}</h1>
              {args.description && (
                <div className="bcbst-hero__description">
                  <p>{args.description}</p>
                </div>
              )}
              {args.buttonGroup.length > 0 && (
                <div className="bcbst-hero__btn-group btn-group">
                  {args.buttonGroup.map((button) => (
                    <Button key={button.label} {...button} />
                  ))}
                </div>
              )}
            </div>
          </div>
          {args.jumpLinks?.length > 0 && (
            <nav aria-label="jump nav" className="bcbst-hero__jumplinks">
              {args.jumpLinks.map((link) => (
                <div key={link.label} className="bcbst-hero__jumplink">
                  <Button {...link} />
                </div>
              ))}
            </nav>
          )}
        </div>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj;

export const LightTextWithDarkOverlayCentered: Story = {
  args: {
    ...data.lightText,
    styles: ['bcbst-hero', 'bcbst-hero--primary', 'bcbst-hero--centered', 'bcbst-hero--text-light', 'bcbst-hero--overlay-dark'],
  },
};

export const LightTextWithoutOverlayCentered: Story = {
  args: {
    ...data.lightText,
    styles: ['bcbst-hero', 'bcbst-hero--primary', 'bcbst-hero--centered', 'bcbst-hero--text-light'],
  },
};

export const LightTextWithDarkOverlayLeft: Story = {
  args: {
    ...data.lightText,
    styles: ['bcbst-hero', 'bcbst-hero--primary', 'bcbst-hero--text-light', 'bcbst-hero--overlay-dark'],
  },
};

export const LightTextWithoutOverlayLeft: Story = {
  args: {
    ...data.lightText,
    styles: ['bcbst-hero', 'bcbst-hero--primary', 'bcbst-hero--text-light'],
  },
};

export const DarkTextWithLightOverlayCentered: Story = {
  args: {
    ...data.darkText,
    styles: ['bcbst-hero', 'bcbst-hero--primary', 'bcbst-hero--centered', 'bcbst-hero--text-dark', 'bcbst-hero--overlay-light'],
  },
};

export const DarkTextWithoutOverlayCentered: Story = {
  args: {
    ...data.darkText,
    styles: ['bcbst-hero', 'bcbst-hero--primary', 'bcbst-hero--centered', 'bcbst-hero--text-dark'],
  },
};

export const DarkTextWithLightOverlayLeft: Story = {
  args: {
    ...data.darkText,
    styles: ['bcbst-hero', 'bcbst-hero--primary', 'bcbst-hero--text-dark', 'bcbst-hero--overlay-light'],
  },
};

export const DarkTextWithoutOverlayLeft: Story = {
  args: {
    ...data.darkText,
    styles: ['bcbst-hero', 'bcbst-hero--primary', 'bcbst-hero--text-dark'],
  },
};
