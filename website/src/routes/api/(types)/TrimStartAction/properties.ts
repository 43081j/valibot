import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  BaseTransformation: {
    modifier: 'extends',
    type: {
      type: 'custom',
      name: 'BaseTransformation',
      href: '../BaseTransformation/',
      generics: [
        {
          type: 'custom',
          name: 'TInput',
        },
        {
          type: 'custom',
          name: 'TInput',
        },
        'never',
      ],
    },
  },
  type: {
    type: {
      type: 'string',
      value: 'trim_start',
    },
  },
  reference: {
    type: {
      type: 'custom',
      modifier: 'typeof',
      name: 'trimStart',
      href: '../trimStart/',
    },
  },
};
