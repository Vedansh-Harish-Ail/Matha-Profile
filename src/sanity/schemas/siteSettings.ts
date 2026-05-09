export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // __experimental_actions: ['update', 'publish'], // Use for singleton in older versions or with desk structure
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Business Address',
      type: 'text',
    },
    {
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
    },
    {
      name: 'gstNumber',
      title: 'GST Number',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
  ],
};
