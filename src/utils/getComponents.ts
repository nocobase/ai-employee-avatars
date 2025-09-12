/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

import type { Prng } from '@dicebear/core';
import type { Options, ComponentPickCollection } from '../types.js';
import { pickComponent } from './pickComponent.js';

type Props = {
  prng: Prng,
  options: Options
}

export function getComponents({ prng, options }: Props): ComponentPickCollection {
  const baseComponent = pickComponent({
    prng,
    group: 'base',
    values: options.base,
  });
  const hairComponent = pickComponent({
    prng,
    group: 'hair',
    values: options.hair,
  });
  const clothesComponent = pickComponent({
    prng,
    group: 'clothes',
    values: options.clothes,
  });
  const earingComponent = pickComponent({
    prng,
    group: 'earing',
    values: options.earing,
  });
  const glassesComponent = pickComponent({
    prng,
    group: 'glasses',
    values: options.glasses,
  });
  const mouthComponent = pickComponent({
    prng,
    group: 'mouth',
    values: options.mouth,
  });

  return {
    'base': baseComponent,
    'hair': hairComponent,
    'clothes': clothesComponent,
    'earing': earingComponent,
    'glasses': glassesComponent,
    'mouth': mouthComponent,
  }
};
