<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Home from '@/pages/Home/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
  },
});
</script>
