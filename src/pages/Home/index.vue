<template>
  <div class="home fixed-view flex">
    <div class="history">
      <div class="history-item flex" v-for="item in 20" :key="item">
        <div class="request-type flex just-center align-center">GET</div>
        <div class="flex-1">https://api.apiopen.top/getJoke?page=1&count=2&type=video</div>
      </div>
    </div>
    <div class="request flex-1">
      <div class="request-form flex">
        <div class="request-search flex-1 flex">
          <select class="request-select fw700">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
          </select>
          <input class="request-input flex-1" />
        </div>
        <div class="request-button flex just-center align-center gesture--click disable-select">请 求</div>
      </div>
    </div>
  </div>
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
