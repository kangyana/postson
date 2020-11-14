<template>
  <div class="empty flex flex-col just-center align-center disable-select">
    <img
      class="empty-image"
      src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import './index.less';

export default {
  name: 'empty',
};
</script>