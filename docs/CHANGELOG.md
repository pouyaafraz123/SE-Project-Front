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
- add sample page for notify (<http://localhost:3000/test/notif-page>)
- add jsdoc and comment for notify and its components

### @pouya - V7

- fix merge props order in button
- add cloneSingChild util
- add swiper component
- add variant to info card
- add swiper story book and tests in <http://localhost:3000/test/swiper-page>
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

### @pouya - v12

- change filter value mapper typing
- remove table context convert it to props
- refactor pagination logic and improve performance and prevent infinite loop
- add table search component
- add generic type props to table component
- fix table typing issues
- fix table columns definition based on types
- add header tab component
- add header tab group component
- add table heading component
- add table head component
- add table container
- add table parts to container
- add header tab group, download, print, title to table heading
- add table search filter component
- add label and label icon to filter
- add table search component
- add table variants
- add table actions
- add generic typing and conditional typing to pageTable
- add tableBody component
- add function to calculate total count
- add per page and on per page to pagination
- remove pagination from table
- add custom table
- fix table margin issue
- add custom table styles
- add table bottom component
- fix empty filter option for use filter hook
- add useTableParams hook
- add usePagination hook
- and useSearchParam hook
- fix swiper width issue
- write additional typing for using useTableParams hook more usable
- refactor hf table with new hooks and page table
- refactor doctor form
- refactor all tables and stories with new component
- add pagination and search params type to apis

### @pouya - v13

- add page component to pages
- fix body overflow x issue
- fix table page layouts

### @pouya - v14

- fix issue of using page instead per page

### @ali - v15

- Adding radio button component

### @Vahid -v16

- add base modal
- add modal container
- add modal storybook decorator

### @pouya - v17

- add appointments table type
- add appointment table query
- add appointment table template
- add appointment table mock
- add randomBool util
- add appointment action conditions

### @ali - v18

- Adding the clicking feature to the sidebar menu item
- Adding Stepper component

### @ali - v19

- Add FastRadio component. Use a union for its type ('male'|'female')
- Fix DatePicker notSelecting/notClosing

### @pouya - v20

- add tablePerPage Selector
- add table page number display component
- add per page change to with pagination decorator

### @Vahid - v21

- add FastTime component. type = string
- fix infiniteSearch search not working
- add noData to infinite search

### @pouya - v22

- Add past appointment component
- translate appointment card
- add summary note card
- add write summary card
- add followup card
- add order card
- add prescription card
- add referral card

### @pouya - v23

- add summary note table type
- add summary note table query
- add summary note table template
- add summary note table mock

### @pouya - v24

- add appointment data table type
- add appointment data table query
- add appointment data table template
- add appointment data table mock
- add with tabs decorator
- add use tab helper
- add use tab to use table params

### @pouya - v25

### @ali - v25

- add doctor information list box
- add patient information list box
- add operation times list box
- add delete icon button in table column items
- add show experiment menu item
