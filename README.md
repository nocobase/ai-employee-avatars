<h1 align="center"><img src="./tests/svg/0.svg" width="96" /> <br />NocoBase AI employee avatars</h1>
<p align="center">
  <strong>Avatar Style for <a href="https://dicebear.com/">DiceBear</a></strong><br />
  <a href="">NocoBase AI employee avatars</a> by <a href=""></a>
</p>


<p align="center">
  The avatar style is based on <a href="">NocoBase AI employee avatars</a> by
  <a href=""></a>, licensed under
  <a href=""></a>. / Remix of the original.
</p>
<p align="center">
  See <a href="https://dicebear.com/licenses">license overview</a> for more information.
</p>

----

## Usage

Install the DiceBear package and this avatar style with the following command:

```
npm install @dicebear/core @nocobase/ai-employee-avatars --save
```

Now you can create your first avatar.

```js
import { createAvatar } from '@dicebear/core';
import style from '@nocobase/ai-employee-avatars';

let svg = createAvatar(style, {
  // ... options
});
```

## Options

All options from [DiceBear](https://dicebear.com/docs/options) and additionally the following:

### base

type: `array`  
allowed: `yellow`, `blue`, `brown`, `red`, `green`, `purple`  
default: `['yellow', 'blue', 'brown', 'red', 'green', 'purple']`


### clothes

type: `array`  
allowed: `unisex001`, `woman001`, `unisex002`, `unisex003`, `unisex004`, `unisex005`, `unisex006`, `unisex007`, `unisex008`, `unisex009`, `unisex010`, `unisex011`, `woman002`, `woman003`, `woman004`, `unisex012`, `unisex013`, `unisex014`, `unisex015`, `unisex016`  
default: `['unisex001', 'woman001', 'unisex002', 'unisex003', 'unisex004', 'unisex005', 'unisex006', 'unisex007', 'unisex008', 'unisex009', 'unisex010', 'unisex011', 'woman002', 'woman003', 'woman004', 'unisex012', 'unisex013', 'unisex014', 'unisex015', 'unisex016']`


### earing

type: `array`  
allowed: `woman001`, `unisex001`, `unisex002`, `woman002`, `woman003`, `woman004`, `woman005`  
default: `['woman001', 'unisex001', 'unisex002', 'woman002', 'woman003', 'woman004', 'woman005']`


### glasses

type: `array`  
allowed: `unisex001`, `unisex002`  
default: `['unisex001', 'unisex002']`


### hair

type: `array`  
allowed: `man001`, `woman001`, `woman002`, `man002`, `woman003`, `man003`, `man004`, `man005`, `woman004`, `woman005`, `man006`, `man007`, `woman006`, `woman007`, `woman008`, `woman009`, `woman010`, `man008`, `woman011`, `woman012`  
default: `['man001', 'woman001', 'woman002', 'man002', 'woman003', 'man003', 'man004', 'man005', 'woman004', 'woman005', 'man006', 'man007', 'woman006', 'woman007', 'woman008', 'woman009', 'woman010', 'man008', 'woman011', 'woman012']`


### mouth

type: `array`  
allowed: `unisex001`  
default: `['unisex001']`



## Build this package

```
npm run build
```

## Test this package

```
npm run test
```
