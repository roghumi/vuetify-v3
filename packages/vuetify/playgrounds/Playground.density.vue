<template>
    <v-container>
      <div class="d-flex flex-row">
        <div class="d-flex flex-column flex-grow-1">
          <VSelect
            class="my-3"
            :label="showLabel ? 'Sample label goes here' : undefined"
            :items="['item 1', 'item 2', 'item 3']"
            :density="density"
            :variant="variant"
            :flat="flat"
            hide-details
          />
          <VTextField
            class="my-3"
            :label="showLabel ? 'Sample label goes here' : undefined"
            :density="density"
            :variant="variant"
            :flat="flat"
            hide-details
          />
          <VAutocomplete
            class="my-3"
            :label="showLabel ? 'Sample label goes here' : undefined"
            :items="['item 1', 'item 2', 'item 3']"
            :density="density"
            :variant="variant"
            :flat="flat"
            hide-details
          />
          <VList
            class="my-3"
            :items="['item 1', 'item 2', 'item 3']"
            :density="density"
            :variant="variant"
            :flat="flat"
            hide-details
          >
          </VList>
          <VDataTable
            class="my-3"
            :headers="headers"
            :items="desserts"
            item-value="name"
            :density="density"
            :variant="variant"
            :flat="flat"
            hide-details
          />
        </div>
        <VCol cols="3" class="d-flex flex-column">
          <VSelect
            v-model="density"
            :items="['default', 'comfortable', 'compact', 'minimal']"
          />
          <VSelect
            v-model="variant"
            :items="[
              'plain',
              'underlined',
              'solo',
              'solo-filled',
              'solo-inverted',
              undefined
            ]"
          />
          <VSwitch v-model="showLabel" label="show label" />
          <VSwitch v-model="flat" label="flat" />
        </VCol>
      </div>
    </v-container>
  </template>
  
  <script>
  import { ref, } from 'vue'
  
  export default {
    name: 'Playground',
  
    setup () {
      const density = ref('default')
      const variant = ref(undefined)
      const showLabel = ref(false)
      const flat = ref(false)
  
      const headers = [
        {
          title: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          key: 'name'
        },
        { title: 'Calories', align: 'end', key: 'calories' },
        { title: 'Fat (g)', align: 'end', key: 'fat' },
        { title: 'Carbs (g)', align: 'end', key: 'carbs' },
        { title: 'Protein (g)', align: 'end', key: 'protein' },
        { title: 'Iron (%)', align: 'end', key: 'iron' }
      ]
      const desserts = [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22'
        }
      ]
  
      const vswitch = ref(false)
  
      return {
        vswitch,
        density,
        variant,
        showLabel,
        flat,
        headers,
        desserts,
      }
    }
  }
  </script>
  