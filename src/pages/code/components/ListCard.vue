<template>
  <div class="div-card">
    <div class="div-card-title">{{ title }}</div>
    <t-divider></t-divider>
    <div class="div-card-list">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="less" scoped>
.div-card {
  padding: 16px;
  &-title {
    padding: 0px;
  }
  &-list {
    padding: 16px 0px;
  }
}
.t-divider {
  margin: 0;
  margin-top: 8px;
}
</style>