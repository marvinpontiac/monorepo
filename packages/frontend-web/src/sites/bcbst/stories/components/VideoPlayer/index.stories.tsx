import type { Meta, StoryObj } from '@storybook/react';
import data from './data.json';

const meta: Meta = {
  title: 'Components/VideoPlayer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => {
    return (
      <div className="bcbst-video-player">
        <div style={{ backgroundImage: 'url(' + args.image + ')' }} className="bcbst-video-player__thumbnail">
          <svg focusable="false">
            <use href="/bcbst-icons.svg#bcbst-icon--global_video-play"></use>
          </svg>
          <div className="bcbst-video-player__caption">
            <h3>{args.headline}</h3>
            <p>{args.teaser}</p>
          </div>
        </div>
        <div className="bcbst-videoplayer__player">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EaV0cC3Ect0?si=a05jciYzSe5muSs5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj;

export const VideoPlayer: Story = {
  args: {
    ...data,
  },
} satisfies Story;
