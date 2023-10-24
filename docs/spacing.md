# Spacing

## Our Sizes

we have **_10_** different sizes for spacing:
**[0, xs, m1, m2, m3, m4, l1, l2, l3, l4]**

if `$space-factor: 1rem (or 8px)` then our sizes will be:

    0: 0px
    xs: $space-factor / 2 = 4px,
    m1: $space-factor * 1 =8px,
    m2: $space-factor * 1.25 = 10px,
    m3: $space-factor * 1.5 = 12px,
    2m3: $space-factor * 1.5 * 2 = 24px,
    m4: $space-factor * 1.75 = 14px
    l1: $space-factor * 2.5 = 20px
    l2: $space-factor * 3.125 = 25px
    l3: $space-factor * 3.75 = 30px
    l4: $space-factor * 4.375 = 35px
    l5: $space-factor * 6.25 = 50px
    l6: $space-factor * 1 = 80px

we generate various classes like bootstrap for margin and padding of these sizes for using them easily and straight in classNames of any HTML tag element:

    .ms-0 { margin-left/right: 0;}
    .ms-xs { margin-left/right: $xs; //(margin-left for dir=ltr, margin-right for dir=rtl)}
    .ms-n-xs { negative of ms-xs;}
    .me-xs { margin-right/left: $xs; //(margin-right for dir=ltr, margin-left for dir=rtl)}
    .me-n-xs { negative of me-xs;}
    .mx-xs {
        margin-left: $xs;
        margin-right: $xs;
    }
    .my-xs {
        margin-top: $xs;
        margin-bottom: $xs;
    }
    .mt-xs {margin-top: $xs}
    .mt-n-xs {negative of mt-xs}
    .mb-xs {margin-bottom: $xs}
    .mb-n-xs {negative of mb-xs}
    .m-xs {margin: $xs}

    ,
    ...    (and like these for other sizes)

## mixins

we created _**mixins**_ for `margin`, `padding`, `left` and `right` for supporting both **_rtl_** and **_ltr_** direction and you must use them instead of using vanilla css margin-left/right, padding-left/right and left/right properties:

    @mixin margin-start  => if dir=rtl:margin-right and if dir=ltr:margin-left
    @mixin margin-end  => if dir=rtl:margin-left and if dir=ltr:margin-right
    @mixin padding-start  => if dir=rtl:padding-right and if dir=ltr:padding-left
    @mixin padding-end  => you it instead of margin-left or margin-right
    @mixin start  => if dir=rtl:left and if dir=ltr:right
    @mixin end  => if dir=rtl:right and if dir=ltr:left

or use css property for supporting direction changing:

- `margin-inline-start`
- `margin-inline-end`
- `padding-inline-start`
- `padding-inline-end`

### How to access the sizes inside of the scss files?

For accessing sizes inside of styles.module.scss file you have to import `src/styles/function.scss` and use the `space` function to access the sizes. Just give the size name as an argument.

```css
@import 'src/styles/functions.scss';

.className {
  padding-inline-start: space(m1);
}
```
