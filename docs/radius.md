# Radius

## Our Sizes

we have **_5_** different sizes for radius:
**[xs, sm, md, lg, full]**

if `$radius-factor: 1rem (or 8px)` then our sizes will be:

    xs: $radius-factor / 2 = 4px,
    sm: $radius-factor * 1 = 8px,
    md: $radius-factor * 2 = 16px,
    lg: $radius-factor * 3.5 = 28px,
    full: 100%,

we generate various classes like bootstrap for rounding to use them easily and straight in classNames of any HTML tag element:

    .rounded-xs { radius: $xs;}
    .rounded-top-xs {
        border-top-right-radius: $xs;
        border-top-left-radius: $xs;
    }
    .rounded-bottom-xs {
        border-bottom-right-radius: $xs;
        border-bottom-left-radius: $xs;
    }
    .rounded-right-xs {
        border-top-right-radius: $xs;
        border-bottom-right-radius: $xs;
    }
    .rounded-left-xs {
        border-top-left-radius: $xs;
        border-bottom-left-radius: $xs;
    }

    ,
    ...    (and like these for other sizes)

## how to use radius sizes inside of scss files?

For accessing sizes inside of styles.module.scss file you have to import `src/styles/function.scss` and use the `radius` function to access the sizes. Just give the size name as an argument.

```css
@import 'src/styles/functions.scss';

.className {
  padding-inline-start: radius(sm);
}
```
