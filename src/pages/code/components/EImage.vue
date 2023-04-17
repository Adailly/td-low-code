<template>
  <t-image
    src="https://tdesign.gtimg.com/demo/demo-image-1.png"
    fit="cover"
    :style="{ width: '120px', height: '120px' }"
  />
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