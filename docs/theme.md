# Theme Usage Documentation

## Introduction

This documentation provides detailed information on how to effectively use the theme features and styles for your project. It covers the utilization of CSS and SCSS for theming, variable usage, and best practices for maintaining a consistent design language.

## CSS Styles

How to Use in SCSS Files and Styles
When customizing the theme's colors in your SCSS files, it is essential to use the getColor function declared in the function.scss file. This function not only allows you to set colors but can also handle opacity adjustments if needed.

### Usage Example

#### Without Opacity

```scss
body {
  background-color: getColor(var(--theme-primary-main));

  /* or */

  background-color: getThemeColor(var(primary-main));
}
```

#### With Opacity

```scss
body {
  background-color: getColor(var(--theme-primary-main), 20);

  /* or */

  background-color: getThemeColor(var(primary-main), 20);
}
```

### Parameters

**The getColor function accepts two parameters:**

1. First Parameter: Variable name enclosed in the var() function. It should correspond to a color variable defined in the colors.scss file.
2. Second Parameter (Optional): Opacity value, which specifies the transparency of the color. This parameter is optional and can be omitted if no opacity adjustment is required.

### Variables and Variable Naming

To maintain consistency in your theme styles and ensure that the theme is applied uniformly, it is important to follow these guidelines:

- All color variables are declared in the colors.scss file. You should refrain from using these variables directly unless you are certain that you do not want the theme to apply to that particular style. These color variables always begin with --color.
- Colors that are subject to theme changes should be defined in the theme.scss file. These variables also begin with --theme. Using these variables ensures that your styles adapt to theme changes seamlessly.

## generate classes from theme-colors

For every color that is defined in `$color` in `global-variables.scss` we generate its `color`, `background-color`, and `border-color` classes to use them easily and straightly in classNames of any HTML tag element:

e.g. for the color `primary-main`, three classes have been generated:

```scss
/* These classes have been generated by @mixin color-x */

.color-primary-main {
  color: rgb(var(--theme-primary-main));
}
.bg-color-primary-main {
  background-color: rgb(var(--theme-primary-main));
}
.border-color-primary-main {
  border-color: rgb(var(--theme-primary-main));
}
```
