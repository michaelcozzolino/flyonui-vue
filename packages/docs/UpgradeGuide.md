# Upgrade Guide

## Upgrading to 3.x from 2.x

### Props

- The `isDisabled` and `isReadonly` props of every component have been renamed to `disabled` and `readonly`
  in order to reflect the native attribute of the html element.
  so in your component make sure to replace every (`isDisabled`|`is-disabled`)|(`isReadonly`|`is-readonly`) with
  `disabled`|`readonly`
