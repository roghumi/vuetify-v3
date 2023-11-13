
// Composables
import { makeComponentProps } from '@/composables/component'
import { makeTagProps } from '@/composables/tag'
import { makeRendererProps, RendererComponent, genComponentsFromSchema } from '@/composables/renderer'

// Utilities
import { genericComponent, propsFactory } from '@/util'
import { PropType } from 'vue'

export const makeVSchemaRenderProps = propsFactory({
  schemaItems: {
    type: Array as PropType<Array<RendererComponent>>,
    default: () => ([])
  },
  value: {
    type: Object as PropType<{[key: string]: any}>,
    default: () => ({}),
  },

  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeRendererProps(),
}, 'VSchemaRenderer')

export const VSchemaRenderer = genericComponent()({
  name: 'VSchemaRenderer',

  props: makeVSchemaRenderProps(),

  setup(props, { slots }) {
    const Tag = props.tag ?? 'div'
    return () => genComponentsFromSchema([{
      tag: Tag,
      class: props.class,
      style: props.style,
      children: props.schemaItems,
    }], props.componentsDictionary)
  }
})

export type VSchemaRenderer = InstanceType<typeof VSchemaRenderer>
