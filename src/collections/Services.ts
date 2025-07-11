// collections/Services.ts
import type { CollectionConfig } from 'payload';

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea', // or 'richText' if you prefer
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },

    
  ],
};
