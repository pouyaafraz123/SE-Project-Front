# Conventions

## Components Structuring

We use atomic design pattern for our components folder structuring.

- Atoms: They are include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.

- Molecules: They are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.

- Organisms: They are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface. e.g. header, filter, sidebar and table.

- Templates: They are page-level objects that place components into a layout and articulate the design’s underlying content structure. We can write storybook for them without struggle with API data.

**If they are some components that they are relative to each other, put them in separate folder. e.g input components or dropdown components or providers.**

### Icons

Declare them as a `ReactComponent`:

```tsx
import { ReactComponent as ActionMenuBoldSVG } from "assets/icons/solarIcons/actionMenu-bold.svg";
import { ReactComponent as ActionMenuLinearSVG } from "assets/icons/solarIcons/actionMenu-linear.svg";

function ActionMenuBold() {
  return <ActionMenuBoldSVG data-variant="bold" />;
}

function ActionMenuLinear() {
  return <ActionMenuBoldSVG data-variant="linear" />;
}

...

export { ActionMenuBold, ActionMenuLinear };
```

- data-variant of 'linear', 'line-duotone' and 'broken' is `linear`.
- data-variant of 'bold' and 'bold-duotone' is `bold`.

### Folder structuring

Each component folder should have these files:

- index.ts
- [component name].tsx
- types.ts
- styles.module.scss
- [component name].stories.tsx

**components property types naming convention:** [component name]Props e.g. ButtonProps

#### DO & DO NOT

- **_DO NOT:_** use arrow function for declaring functional component.

```tsx
const Button = () => {
  return <div>index</div>
}
```

- **_DO:_**

```tsx
function Button() {
  return <div>index</div>
}
```

- **_DO NOT:_**
  extract props inside of function parentheses.

```tsx
function Filter({ name, value, onchange, ...rest }: FilterProps) {
  //your code
}
```

- **_DO:_** extract them inside of function:

```tsx
function Filter(props: FilterProps) {
  const { name, value, onChange, ...rest } = props
  //your code
}
```

- **_DO NOT:_** use export default.

## Imports and Exports

- Comply `imports` orders.

- Always import from `index.ts` files.

- import straight. do not use `../../../../src/components/button`. use `components/button`

## naming

**_DO NOT:_** use snake_case.

**_DO:_** use camelCase.

**_DO NOT:_** use word's short form.

```ts
for (let i = 0; i < array.length; i++) {
  const element = array[i]
}
```

## Assets/icons/solarIcons

Every icon folder should contains these files:

- [icon name]-broken.svg
- [icon name]-linear.svg
- [icon name]-line-duotone.svg
- [icon name]-bold.svg
- [icon name]-bold-duotone.svg

## Typography

Do not add styles to the text. Instead, wrap it inside of the `Typography` component. Every text size, variant, and color that you need, has been defined in the `Typography` component.

## Colors and Themes

Do not use the colors defined in the `styles/color/css`. Instead, use colors defined in `styles/theme.css`. These are changed by changing the theme of the user interface.

## Spacing

Only use spacing variables for margin and padding that are defined in the `styles/spacing.css` file.

## ltr and rtl Direction

Do not use the 'margin-left', 'margin-right', 'padding-left', 'padding-right', 'left', and 'right' properties in your styles.module.scss files. Instead, use `@mixins` like @include margin-left which is defined to support both `rtl` and `ltr` spacing.

## Branch naming

// TODO: complete later

## Page naming

Pages should have a named export with export name always being **Component**. This is required for lazy loading.

```tsx
export function Component() {
  return ()
}
```
