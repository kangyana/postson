<template>
  <div class="home fixed-view flex">
    <div class="history">
      <div class="history-item flex gesture--click" v-for="item in 20" :key="item">
        <div class="request-type flex just-center align-center">GET</div>
        <div class="flex-1">https://api.apiopen.top/getJoke?page=1&count=2&type=video</div>
      </div>
    </div>
    <div class="request flex-1 flex flex-col">
      <div class="request-form flex">
        <div class="request-search flex-1 flex">
          <select class="request-select fw700" v-model="option">
            <option v-for="item in options" :key="item" :value="item">{{ item }}</option>
          </select>
          <input class="request-input flex-1" v-model="url" />
        </div>
        <div
          class="request-button flex just-center align-center gesture--click disable-select"
          @click="sendRequest"
        >
          请 求
        </div>
      </div>
      <div class="request-result flex-1 flex flex-col">
        <div class="result-title">Response</div>
        <div class="result-panel flex-1 flex">
          <pre class="line-numbers">
            <code class="language-json">{{ result }}</code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import './base.less';

export default {
  name: 'home',
  setup() {
    const url = ref('https://api.apiopen.top/getJoke?page=1&count=2&type=video');
    const result = ref('');
    const options = ref(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
    const option = ref('GET');

    const sendRequest = () => {
      if (!url.value) {
        alert('请求URL为空！');
        return;
      }
      fetch(url.value)
        .then((res) => res.json())
        .then((res) => {
          const str = JSON.stringify(res);
          result.value = str
            .replace(/            {/g, '{')
            .replace(/,/g, ',\n')
            .replace(/{/g, '{\n')
            .replace(/}/g, '\n}')
            .replace(/\[/g, '[\n')
            .replace(/\]/g, '\n]');
          setTimeout(() => {
            Prism.highlightAll();
          });
        });
    };

    return {
      url,
      result,
      sendRequest,
      options,
      option,
    };
  },
};
</script>
