# Upgrade Guide

## Upgrading to 3.x from 2.x

### All Components - Props

- The `isDisabled` and `isReadonly` props of every component have been renamed to `disabled` and `readonly`
  in order to reflect the native attribute of the html element.
  so in your component make sure to replace every (`isDisabled`|`is-disabled`)|(`isReadonly`|`is-readonly`) with
  `disabled`|`readonly`

### FoInputText

In some cases, where the component contains icons and labels, if, for example, you need to have a specific size on the input,
it is needed to wrap it into a `<div class="w-sm"></div>` container having the needed size as class instead of passing that one
to the input component directly. For further info we suggest to check both the new and old code docs related to this component.

### FoSocialButton

The possible values of the prop `social` have been updated and fully lowercased, the new values are:

| Old         | New        |
|-------------|------------|
| `Facebook`  | `facebook` |
| `Github`    | `github`   |
| `Linkedin`  | `linkedin` |
| `Twitter`   | `x`        |
