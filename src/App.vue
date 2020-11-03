<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Index</router-link>
      </li>
      <li>
        <router-link to="/not-table">Not Table</router-link>
      </li>
      <li>
        <router-link to="/table">Table</router-link>
      </li>
    </ul>
  </nav>

  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'App',
})
</script>
