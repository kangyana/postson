<template>
  <div class="spin flex flex-col just-center align-center disable-select">
    <div class="spin-dot">
      <i class="spin-dot-item"></i>
      <i class="spin-dot-item"></i>
      <i class="spin-dot-item"></i>
      <i class="spin-dot-item"></i>
    </div>
    <div class="spin-text">Loading...</div>
  </div>
</template>

<script lang="ts">
import './index.less';

export default {
  name: 'spin',
};
</script>