// Utilities
import { defineAsyncComponent } from 'vue'
import { propsFactory } from '@/util'

// Types
import type { AsyncComponentLoader, PropType, StyleValue, VNode } from 'vue'

export type RendererComponent = {
  tag: string
  class?: string | Array<string> | undefined
  style?: StyleValue | undefined
  props?: { [key: string]: any } | undefined
  children?: string | Array<RendererComponent> | undefined
  factory?: AsyncComponentLoader
}

export type SchemaPostProcessor = (schema: RendererComponent[], node: RendererComponent) => VNode

// Composables
export const makeRendererProps = propsFactory({
  componentsDictionary: {
    type: Object as PropType<{ [key: string]: AsyncComponentLoader }>,
    default: () => ({})
  },
  preProcessSchema: Function as PropType<SchemaPostProcessor>,
}, 'renderer')

const asyncComponentsDictionary = {} as { [key: string]: AsyncComponentLoader }
export function getComponentTag(c: RendererComponent, dic: { [key: string]: AsyncComponentLoader } | null = null) {
  if (c.factory) {
    if (!asyncComponentsDictionary[c.tag]) {
      asyncComponentsDictionary[c.tag] = defineAsyncComponent({
        loader: c.factory
      })
    }
    return asyncComponentsDictionary[c.tag]
  } else if (dic && dic[c.tag]) {
    if (!asyncComponentsDictionary[c.tag]) {
      asyncComponentsDictionary[c.tag] = dic[c.tag]
    }
    return asyncComponentsDictionary[c.tag]
  }

  return c.tag
}

export function genComponentsFromSchema(schema: RendererComponent[], dic: { [key: string]: AsyncComponentLoader } | null = null): JSX.Element[] {
  return schema.map<JSX.Element>((k: RendererComponent, i: number) => {
    const SchemaDynamoComponent = getComponentTag(k, dic)
    const ChildrenRendered: any = Array.isArray(k.children) ? genComponentsFromSchema(k.children ?? [], dic) : k.children
    return <SchemaDynamoComponent
      class={[k.class,]}
      style={[k.style]}
      {...k.props}
    >
      {ChildrenRendered}
    </SchemaDynamoComponent>
  })
}
