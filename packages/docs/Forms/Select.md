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

### Validation states <Badge type="warning" text="Unreleased" />

<SelectDocs section="validation-state" />

### Shapes <Badge type="warning" text="Unreleased" />

<SelectDocs section="shape" />

## Illustrations

### Label and helper text <Badge type="warning" text="Unreleased" />

<SelectDocs section="with-label-and-helper-text" />

### Hidden label <Badge type="warning" text="Unreleased" />

<SelectDocs section="hidden-label" />

### Disabled <Badge type="warning" text="Unreleased" />

<SelectDocs section="disabled" />

### Datalist <Badge type="warning" text="Unreleased" />

When the input field is empty the selected option will automatically be null.

<SelectDocs section="datalist" />

### Optgroup <Badge type="warning" text="Unreleased" />

<SelectDocs section="optgroup" />

## Advanced usage <Badge type="warning" text="Unreleased" />

### Ref usage <Badge type="warning" text="Unreleased" />

The `useSelectedOption` composables can take as second argument a `MaybeRefOrGetter<number|string>`, in most of the cases
the id of the selected option might come from an object ref or an id ref, in that case passing the writable ref
containing the id will automatically update it, instead if you do not pass a writable ref, it will be considered only as 
the initial selected value for the component and the selected option will be the only one to be updated.

<SelectDocs section="ref-usage" />

