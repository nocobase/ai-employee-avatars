/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

export interface Options {
  base?: (
    | 'yellow'
    | 'blue'
    | 'brown'
    | 'red'
    | 'green'
    | 'purple'
  )[];
  hair?: (
    | 'man001'
    | 'woman001'
    | 'woman002'
    | 'man002'
    | 'woman003'
    | 'man003'
    | 'man004'
    | 'man005'
    | 'woman004'
    | 'woman005'
    | 'man006'
    | 'man007'
    | 'woman006'
    | 'woman007'
    | 'woman008'
    | 'woman009'
    | 'woman010'
    | 'man008'
    | 'woman011'
    | 'woman012'
  )[];
  clothes?: (
    | 'unisex001'
    | 'woman001'
    | 'unisex002'
    | 'unisex003'
    | 'unisex004'
    | 'unisex005'
    | 'unisex006'
    | 'unisex007'
    | 'unisex008'
    | 'unisex009'
    | 'unisex010'
    | 'unisex011'
    | 'woman002'
    | 'woman003'
    | 'woman004'
    | 'unisex012'
    | 'unisex013'
    | 'unisex014'
    | 'unisex015'
    | 'unisex016'
  )[];
  earing?: (
    | 'woman001'
    | 'unisex001'
    | 'unisex002'
    | 'woman002'
    | 'woman003'
    | 'woman004'
    | 'woman005'
  )[];
  glasses?: (
    | 'unisex001'
    | 'unisex002'
  )[];
  mouth?: (
    | 'unisex001'
  )[];
  mask?: (
    | 'dark'
  )[];
}

export type ColorPickCollection = Record<string, string>;

export type ComponentGroup = Record<string, ComponentGroupItem>;
export type ComponentGroupCollection = Record<string, ComponentGroup>;
export type ComponentGroupItem = (
  components: ComponentPickCollection,
  colors: ColorPickCollection
) => string;
export type ComponentPickCollection = Record<string, ComponentPick>;
export type ComponentPick =
  | {
      name: string;
      value: ComponentGroupItem;
    }
  | undefined;
