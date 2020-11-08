<style lang="css">
</style>

<template>
  <div class="home">
    <ul>
      <li v-for="item in jokes" :key="item.sid">
        <div>{{ `${item.name}-${item.text}` }}</div>
        <img :src="item.thumbnail" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'

export default {
  name: 'home',
  setup() {
    const jokes = ref([])

    const getJokes = () => {
      fetch('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
        .then(res => res.json())
        .then(res => {
          jokes.value = res.result
        })
    }

    onMounted(getJokes)

    return {
      jokes,
      getJokes
    }
  },
};
</script>