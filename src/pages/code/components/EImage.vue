<template>
  <div>
    <t-image :src="imgData.url" fit="cover" :style="{ width: `${imgData.width}px`, height: `${imgData.height}px` }" />
  </div>
</template>

<script setup lang="ts">
import { PropType, reactive, watch } from 'vue';
import { EImageType, PropsObject } from '../interface';

const props = defineProps({
  data: {
    type: Object as PropType<PropsObject>,
  },
});
watch(
  () => props.data,
  (val) => {
    console.log(val);
    setData(val);
  },
);

const imgData = reactive({
  url: '',
  width: 100,
  height: 100,
});

const setData = (object: PropsObject) => {
  imgData.url = object['url']['default'];
  imgData.width = object['width']['default'];
  imgData.height = object['height']['default'];
};

if (props.data) {
  const object = props.data;
  setData(object);
}

// :style="{ width: `${data.width}px`, height: `${data.height}px` }"
</script>