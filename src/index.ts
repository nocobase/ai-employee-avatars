/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

/*!
 * NocoBase AI employee avatars (@nocobase/ai-employee-avatars)
 *
 * Code licensed under MIT License.
 * Copyright (c) 2025 Florian Körner
 *
 * Design "NocoBase AI employee avatars". / Remix of the original.
 */

import type { StyleCreate, StyleMeta } from '@dicebear/core';
import { escape } from '@dicebear/core';

import type { Options } from './types.js';
import { getComponents } from './utils/getComponents.js';
import { getColors } from './utils/getColors.js';

export const meta: StyleMeta = {
  title: 'NocoBase AI employee avatars',
};

export const create: StyleCreate<Options> = ({ prng, options }) => {
  const components = getComponents({ prng, options });
  const colors = getColors({ prng, options });

  return {
    attributes: {
      viewBox: '0 0 320 320',
      fill: 'none',
      'shape-rendering': 'auto'
    },
    body: `${components.base?.value(components, colors) ?? ''}${components.hair?.value(components, colors) ?? ''}${components.clothes?.value(components, colors) ?? ''}${components.earing?.value(components, colors) ?? ''}${components.glasses?.value(components, colors) ?? ''}${components.mouth?.value(components, colors) ?? ''}${components.mask?.value(components, colors) ?? ''}`,
    extra: () => ({
      ...Object.entries(components).reduce<Record<string, string | undefined>>(
        (acc, [key, value]) => {
          acc[key] = value?.name;
          return acc;
        },
        {}
      ),
      ...Object.entries(colors).reduce<Record<string, string>>(
        (acc, [key, value]) => {
          acc[`${key}Color`] = value;
          return acc;
        },
        {}
      ),
    }),
  };
};

export { schema } from './schema.js';
export type { Options } from './types.js';
