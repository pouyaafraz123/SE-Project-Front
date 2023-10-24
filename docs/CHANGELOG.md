# Summary Note

## V0

- storybook
- normalize
- fonts
- buttons
- theme
- spacing
- typography
- box
- tooltip
- ...

---

### @pouya - V1

- refactor buttons to reduce counts
- add label component used in displaying id
- add link component (customized react router link)
- add separator component
- add status chip base component (base component for displaying statuses)
- add appointment status component
- add card container component (TODO: because other card components are incomplete all styles not implemented and just basic items added)
- add info card component (cards which used in dashboard)
- add information item component (component that display information about some entities, for example, patient or appointment or doctor in appointment cards)
- add appointment card (also has some component inside)
- add merge props util that merge similar props together
- add fonts with persian numbers

---

### @Ali - v1.1

- Adding Autocomplete component.
- Adding Phone component.
- Adding searchInput component.
- Adding useDeounced hook.
- Adding a small size of the input.

---

### @Ali - v1.1.1

- Adding textbox to the autocomplete for showing the selected item.

---

### @Ali - v1.1.2

- Adding dashed border style to the **Box** component.
- Adding dashed and solid border-style css classes.

---

### @Ali - V2

- Fixing icon styling issue.
- Adding all icons to the storybook.
- Adding text centering feature to the typography component.
- Fixing icon changing bug of search input.
- Adding no data text to select box.
- Adding isLoading and IsError to the input component.

---

### @pouya - V3

- drag container (for creating component which is draggable)
- change html props of the box from inside object to object itself because drag component passes some properties which do not work if not provided
- base modal component
- add alert types
- add alert ui state
- add alert container
- add alert helper functions
- add alert variants
- add alert special types and functions for each type of alert
- for using alert one alert container must be in root component
- then if you want to use alert you can use functions: showNotificationAlert, showActionAlert, showDeleteAlert
- complete alert component styles
- add example in tests/alert-page
- add date picker library react-multi-date-picker ([`link`](https://shahabyazdi.github.io/react-multi-date-picker))
- add date picker multiple variants to tests page
- see example in test/data-picker-page
- add jsdoc and comments to new components

---

### @Ali - V4

- Add fileInput component

---

### @Vahid - V5

- Add a form story for testing formFields (src/components/fastFields/testForm)
- Add field component (label & error wrapper for formik)
- Add FastFields (fastFileds are formControls with formik baked in)
- FastInput (text input in forms)
- FastSelect (dropdown component)
- FastComplete (works similar to Select)
- FastPhone
- FastDate (datePicker)

---

### @pouya - V6

- add toastify config
- add toastify container
- add info notif
- add warning notif
- add error notif
- add success notif
- add promise notif
- add notify component
- fix icon important bug (add word break style to not break in any circumstance, because it cause multiple part of icon not display properly)
- add with toast decorator
- add sample page for notify (http://localhost:3000/test/notif-page)
- add jsdoc and comment for notify and its components

### @pouya - V7

- fix merge props order in button
- add cloneSingChild util
- add swiper component
- add variant to info card
- add swiper story book and tests in http://localhost:3000/test/swiper-page
- fix: remove jsx element type from components
- fix dir in toast and swiper

### @pouya - V8

- merge notify components into one component
- move close alert and show alert to ui store

### @Ali - V9

- Add sidebar component
- Add Page Layout component
- Add checkbox input
- Add multi-select input
- Add rerender items function to selectBoxFn
- fix: Input component's has-icon data attribute bug

### @Vahid - V10

- Add WithPagination decorator (only used in template pages with table)
- rename register.json to form.json
- App.tsx will now show a list of all pages i RoboV
- Add createHF & getHF query
- Add baseForm component
- Add HF view|edit|create page

### @pouya - V11

- add filter component
- add filter helper functions
- add checkbox component
- add useFilterParams hook
- add filter sample page and hook
