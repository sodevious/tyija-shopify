import {PlayIcon} from '@sanity/icons'

export default {
  type: "object",
  name: "videoEmbed",
  title: "Video Embed",
  icon: PlayIcon,
  fields: [
    {
      type: "string",
      name: "url",
      title: "Video URL",
      description: "A URL to a vimeo or youtube video",
    }
  ],
  preview: {
    select: {
      subtitle: 'url',
    },
    prepare(selection) {
      const { subtitle } = selection

      return {
        title: 'Video Embed',
        subtitle: subtitle
      }
    }
  }
};