import { Block } from 'payload'

export const NewsletterBlock: Block = {
  slug: 'newsletterblock',
  labels: {
    singular: 'Newsletter Block',
    plural: 'Newsletter Blocks',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'Subscribe now to Our Newsletter.',
    },
    {
      name: 'subtext',
      type: 'text',
      defaultValue: 'All your information is completely confidential',
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Enter your email',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      defaultValue: 'SUBSCRIBE',
    },
  ],
}
