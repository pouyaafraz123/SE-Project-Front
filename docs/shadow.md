# Radius

## Our Sizes

we have **_4_** different sizes for shadow size:
**[xs, sm, md, lg]**

if `$shadow-size-factor: 1rem (or 8px)` then our sizes will be:

    xs: $shadow-size-factor * * 1.25 = 10px,
    sm: $shadow-size-factor * * 2.5 = 20px,
    md: $shadow-size-factor * * 3.75 = 30px,
    lg: $shadow-size-factor * * 5 = 40px,

## mixins

We create some mixins for shadow and border with shadow:

    @mixin shadow($shadow-size: lg, $theme-color-name: border-main) {
      box-shadow: 0px 0px shadowSize($shadow-size) 0px getThemeColor($theme-color-name);
    }

    @mixin border-and-shadow($shadow-size: lg, $theme-color-name: border-main) {
        border: 1px solid getThemeColor($theme-color-name);
        @include shadow($shadow-size, $theme-color-name);
    }
