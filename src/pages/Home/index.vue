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
          <select class="request-select fw700" v-model="method">
            <option v-for="item in methods" :key="item" :value="item">{{ item }}</option>
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
import { ref, watch } from 'vue';
import request, { Method } from '@/utils/request';
import './base.less';

export default {
  name: 'home',
  setup() {
    const url = ref('https://api.apiopen.top/getJoke?page=1&count=2&type=video');
    const result = ref('');
    const methods = ref<Method[]>(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
    const method = ref<Method>('GET');
    // 发送请求
    const sendRequest = async () => {
      if (!url.value) {
        alert('请求URL为空！');
        return;
      }
      const res = await request({ method: method.value, url: url.value });
      result.value = JSON.stringify(res)
        .replace(/,/g, ',\n')
        .replace(/{/g, '{\n')
        .replace(/}/g, '\n}')
        .replace(/\[/g, '[\n')
        .replace(/\]/g, '\n]');
    };
    // 刷新高亮
    watch(result, (newValue, oldValue) => {
      setTimeout(() => {
        Prism.highlightAll();
      });
    });

    return {
      url,
      result,
      sendRequest,
      methods,
      method,
    };
  },
};
</script>
