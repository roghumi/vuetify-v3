---
meta:
  nav: Radio buttons
  title: Radio button component
  description: A radio button allows the user to choose only one of a set of options using a radio group.
  keywords: radio groups, radio buttons, vuetify radio group component, vuetify radio component, vue radio component, vue radio group component
related:
  - /components/button-groups/
  - /components/forms/
  - /components/checkboxes/
features:
  label: 'C: VRadio'
  report: true
  github: /components/VRadio/
  spec: https://m2.material.io/components/radio-buttons
---

# Radio buttons

The `v-radio` component is a simple radio button. When combined with  the `v-radio-group` component you can provide grouping functionality to allow users to select from a predefined set of options.

<page-features />

## Usage

Although `v-radio` can be used on its own, it is best used in conjunction with `v-radio-group`.

<usage name="v-radio-group" />

<entry />

## API

| Component | Description |
| - | - |
| [v-radio-group](/api/v-radio-group/) | Primary Component |
| [v-radio](/api/v-radio/) | Sub-component used for modifying the `v-radio-group` state |

<api-inline hide-links />

## Examples

### Props

#### Model (group)

Using the **v-model** (or **model-value**) you can access and control the selected radio button defined by the set **value** on the child `v-radio` components.

<example file="v-radio-group/prop-model-group" />

::: info
  If you are using integer values with **model-value**, you will need to use `:value` to set the value of the child `v-radio` otherwise it will be evaluated as a sting.
:::

#### Model (radio)

The **v-model** (or **model-value**) you can access and control the value of a single radio button. The `true`/`false` values can be independently defined using the **true-value** and **false-value** props.

<example file="v-radio-group/prop-model-radio" />

#### Colors

Radios can be colored by using any of the builtin colors and contextual names using the **color** prop.

<example file="v-radio-group/prop-colors" />

#### Direction

Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column.

<example file="v-radio-group/prop-direction" />

### Slots

#### Label

Radio Group labels can be defined in `label` slot - that will allow to use HTML content.

<example file="v-radio-group/slot-label" />
