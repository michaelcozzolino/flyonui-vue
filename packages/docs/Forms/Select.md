# Select

### Default

<SelectDocs section="default" />

### Floating label

<SelectDocs section="floating-label" />

## Sizes

### Default size

<SelectDocs section="default-size" />

### Floating label size

<SelectDocs section="floating-label-size" />

## Illustrations

### Icon

<SelectDocs section="with-icon" />

### Validation states

<SelectDocs section="validation-state" />

### Shapes

<SelectDocs section="shape" />

### Label and helper text

<SelectDocs section="with-label-and-helper-text" />

### Hidden label

<SelectDocs section="hidden-label" />

### Disabled

<SelectDocs section="disabled" />

### Datalist

When the input field is empty the selected option will automatically be null.

<SelectDocs section="datalist" />

### Multiple

<SelectDocs section="multiple" />

### Optgroup

<SelectDocs section="optgroup" />

## Advanced usage

### Ref usage

The `useSelectedOption` composables can take as second argument a `MaybeRefOrGetter<number|string>`, in most of the cases
the id of the selected option might come from an object ref or an id ref, in that case passing the writable ref
containing the id will automatically update it, instead if you do not pass a writable ref, it will be considered only as 
the initial selected value for the component and the selected option will be the only one to be updated.

<SelectDocs section="ref-usage" />

## Api

### Props

<SelectDocs section="props" />
