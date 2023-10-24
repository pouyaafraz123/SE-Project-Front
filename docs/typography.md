# Typography Component

## font size and line height

we have _**10**_ deferent font sizes:
**[micro, xs, sm, md, md-high, base, lg, xl, 2xl, 7xl]**

if `$font-size-factor: 0.5rem; (or 8px)` then our sizes will be:

    micro: {
        font-size: 10px;
        line-hight: 16px;
    }
    xs: {
        font-size: 12px;
        line-hight: 20px;
    }
    sm: {
        font-size: 13px;
        line-hight: 20px;
    }
    md: {
        font-size: 14px;
        line-hight: 20px;
    }
    md-high: {
        font-size: 14px;
        line-hight: 24px;
    }
    base: {
        font-size: 16px;
        line-hight: 28px;
    }
    lg: {
        font-size: 18px;
        line-hight: 30px;
    }
    xl: {
        font-size: 20px;
        line-hight: 32px;
    }
    2xl: {
        font-size: 24px;
        line-hight: 36px;
    }
    7xl: {
        font-size: 68px;
        line-hight: 90px;
    }

we generate various classes like bootstrap for font sizes for using them easily and straight in classNames of any HTML tag element:

    .fs-micro {
        font-size: 10px;
        line-hight: 16px;
    }
    .fs-xs {$xs}
    .fs-sm {$sm}
    .fs-md {$md}
    .fs-md-high {$md-high}
    .fs-base {$base}
    .fs-lg {$lg}
    .fs-xl {$xl}
    .fs-2xl {$2xl}
    .fs-7xl {$7xl}

### how to access these sizes inside your scss files?

Because in addition to font-size, we also have line-height you have to use `@mixins font-size($name)` mixins.
For accessing sizes inside of styles.module.scss file you have to import `src/styles/function.scss` and use the `fontSize` function to access the sizes. Just give the size name as an argument.

```css
@import 'src/styles/functions.scss';
@import 'src/styles/mixins.scss';

.className {
  @include font-size: fontSize(sm);
}
```

## font weight

we have _**5**_ deferent font sizes:
**[regular, medium, semi-bold, bold, extra-bold]**

    regular: 400,
    medium: 500,
    semi-bold: 600,
    bold: 700,
    extra-bold: 800

### how to use fon weight sizes in scss files?

For accessing sizes inside of styles.module.scss file you have to import `src/styles/function.scss` and use the `fontWeight` function to access the sizes. Just give the size name as an argument.

```css
@import 'src/styles/functions.scss';

.className {
  font-weight: fontWeight(semi-bold);
}
```

## Declare new font style

To declare a new font style you have pick a name as a `variant` and add to `variantType` in `types.ts` file. Then define its **fontSize**, **fontWeight**, **color** and its **tag** as `span` or `p` inside of `variant.ts`.
