<template>
  <div class="home fixed-view flex">
    <div class="history">
      <div class="tool-bar history-item flex just-sb align-center">
        <span class="title">History</span>
        <span class="gesture--click disable-select" @click="clearRecords">Clear all</span>
      </div>
      <div
        class="history-item flex gesture--click"
        v-for="item in records"
        :key="item.date"
        @click="selectRecord(item)"
      >
        <div class="request-type flex just-center align-center">{{ item.method }}</div>
        <div class="flex-1">{{ item.url }}</div>
      </div>
      <empty v-if="records.length === 0">No any request</empty>
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
          Send
        </div>
      </div>
      <div class="request-result flex-1 flex flex-col">
        <spin v-if="loading" />
        <div class="result-title">Response</div>
        <div class="result-panel flex-1 flex">
          <pre class="line-numbers">
            <code class="language-json">{{ result }}</code>
            <empty v-if="!result && !loading">
              <span style="color: #fff;">Click Send to get a response</span>
            </empty>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, onMounted } from 'vue';
import request, { Method } from '@/utils/request';
import './base.less';
import { validateUrl } from '@/utils';
import Spin from '@/components/Spin/index.vue';
import Empty from '@/components/Empty/index.vue';
import { Record } from './data.d';

export default {
  name: 'home',
  components: {
    Spin,
    Empty,
  },
  setup() {
    const url = ref('https://api.apiopen.top/getJoke?page=1&count=2&type=video');
    const result = ref('');
    const methods = ref<Method[]>(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
    const method = ref<Method>('GET');
    const records = ref<Record[]>([]);
    const loading = ref(false);

    onMounted(() => {
      records.value = JSON.parse(localStorage.getItem('requestHistory') || '') || [];
    });

    // 刷新高亮
    watch(result, (newValue, oldValue) => {
      setTimeout(() => {
        Prism.highlightAll();
      });
    });
    // 更新记录缓存
    watch(records, (newValue, oldValue) => {
      localStorage.setItem('requestHistory', JSON.stringify(newValue));
    });

    // 发送请求
    const sendRequest = async () => {
      if (!url.value || !validateUrl(url.value)) {
        alert('请输入正确的URL');
        return;
      }
      loading.value = true;
      try {
        const res = await request({ method: method.value, url: url.value });
        result.value = res;
      } finally {
        loading.value = false;
      }
      // 记录
      records.value = [
        ...records.value,
        { date: new Date().getTime(), method: method.value, url: url.value },
      ];
    };
    // 清除所有记录
    const clearRecords = () => {
      records.value = [];
    };
    // 选择记录
    const selectRecord = (_record: Record) => {
      method.value = _record.method;
      url.value = _record.url;
      sendRequest();
    };

    return {
      url,
      result,
      methods,
      method,
      records,
      loading,
      sendRequest,
      clearRecords,
      selectRecord,
    };
  },
};
</script>
