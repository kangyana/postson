<template>
  <div class="home">123</div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import './base.less';

export default {
  name: 'home',
  setup() {
    const jokes = ref([]);

    const getJokes = () => {
      // fetch('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
      //   .then(res => res.json())
      //   .then(res => {
      //     jokes.value = res.result
      //   })
    };

    onMounted(getJokes);

    return {
      jokes,
      getJokes,
    };
  },
};
</script>
