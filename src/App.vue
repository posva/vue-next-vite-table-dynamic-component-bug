<template>
  <ul>
    <li><button @click="view = 'Index'">Index</button></li>
    <li><button @click="view = 'Table'">Table</button></li>
  </ul>

  {{ view }}

  <main>
    <component :is="view"></component>
  </main>
</template>

<script>
import { ref } from 'vue'
import Index from './views/Index.vue'
import Table from './views/Table.vue'

export default {
  name: 'App',
  components: { Index, Table },
  setup() {
    const view = ref('Index')

    return { view }
  },
}
</script>
