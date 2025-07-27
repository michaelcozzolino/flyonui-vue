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

[//]: # (### Label and helper text)

[//]: # ()

[//]: # (<SelectDocs section="with-label-and-helper-text" />)

### Disabled <Badge type="warning" text="Unreleased" />

<SelectDocs section="disabled" />

### Datalist <Badge type="warning" text="Unreleased" />

<SelectDocs section="datalist" />

### Optgroup <Badge type="warning" text="Unreleased" />

<SelectDocs section="optgroup" />

## Advanced usage <Badge type="warning" text="Unreleased" />

### Ref usage <Badge type="warning" text="Unreleased" />

The `useSelectedOption` composables can take as second argument a `MaybeRefOrGetter<number|string>`, in most of the cases
the id of the selected option might come from an object ref or an id ref, in that case passing the writable ref
containing the id will automatically update it.

<SelectDocs section="ref-usage" />

