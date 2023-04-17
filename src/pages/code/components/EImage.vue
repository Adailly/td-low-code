<template>
  <div>
    <t-image :src="data.url" fit="cover" :style="{ width: `${data.width}px`, height: `${data.height}px` }" />
  </div>
</template>

<script setup lang="ts">
import { PropType, watch } from 'vue';
import { EImageType } from '../interface';

const props = defineProps({
  data: {
    type: Object as PropType<EImageType>,
  },
});
watch(
  () => props.data,
  (val) => {
    console.log(val);
  },
);
console.log(props.data);
// :style="{ width: `${data.width}px`, height: `${data.height}px` }"
</script>