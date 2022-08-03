import { PresentationIcon } from '@sanity/icons';

export default {
    title: 'Carousel',
    name: 'carousel',
    type: 'object',
    icon: PresentationIcon,
    fields: [
        {
            title: 'Slides',
            name: 'slides',
            description: 'Arrange them in the order you want them displayed',
            type: 'array',
            of: [
                {
                    name: 'Image',
                    type: 'picture',
                    options: {
                        isHighlighted: true,
                    }
                },
                {
                    name: 'Video',
                    type: 'videoEmbed',
                    options: {
                        isHighlighted: true,
                    }
                }
            ]
        }
    ],
    preview: {
        prepare(selection) {
            return {
                title: 'Carousel',
            }
        }
    }
}