<template>
  <div class="div-container">
    <div class="div-com">
      <div class="div-com-title">组件</div>
      <t-divider></t-divider>
      <ListCard :title="data.baseTitle">
        <template #list>
          <div class="div-com-list flex-wrap">
            <div
              class="div-com-list-item"
              v-for="(item, index) in BaseList"
              :key="index"
              @click="chooseItem(BaseList[index])"
            >
              <img class="div-com-list-item-img" :src="item.image" />
              <div class="div-com-list-item-title">{{ item.title }}</div>
            </div>
          </div>
        </template>
      </ListCard>
      <ListCard :title="data.inputTitle">
        <template #list>
          <div class="div-com-list flex-wrap">
            <div
              class="div-com-list-item"
              v-for="(item, index) in InputList"
              :key="index"
              @click="chooseItem(InputList[index])"
            >
              <img class="div-com-list-item-img" :src="item.image" />
              <div class="div-com-list-item-title">{{ item.title }}</div>
            </div>
          </div>
        </template>
      </ListCard>
      <ListCard :title="data.desTitle">
        <template #list>
          <div class="div-com-list flex-wrap">
            <div
              class="div-com-list-item"
              v-for="(item, index) in DesList"
              :key="index"
              @click="chooseItem(DesList[index])"
            >
              <img class="div-com-list-item-img" :src="item.image" />
              <div class="div-com-list-item-title">{{ item.title }}</div>
            </div>
          </div>
        </template>
      </ListCard>
    </div>
    <div class="div-opr">
      <component :is="selectItem?.t_type" :data="selectItem?.data"></component>
    </div>
    <div class="div-pro">
      <div>属性编辑</div>
      <t-divider></t-divider>
      <t-space direction="vertical">
        <div>已选择:</div>
        <div>组件名: {{ selectItem?.title }}</div>
        <div>组件类型: {{ selectItem?.t_type }}</div>

        <div>
          图片地址:
          <t-input type="url" placeholder="请输入图片地址" v-model.trim="selectItem.data.url">{{
            selectItem.data.url
          }}</t-input>
        </div>
        <div>
          图片宽度:
          <t-input type="number" placeholder="请输入图片地址" v-model.trim="selectItem.data.width">{{
            selectItem.data.width
          }}</t-input>
        </div>
        <div>
          图片高度:
          <t-input type="number" placeholder="请输入图片地址" v-model.trim="selectItem.data.height">{{
            selectItem.data.height
          }}</t-input>
        </div>
      </t-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import ListCard from './components/ListCard.vue';
import { CodeComponentType, EImageType } from './interface';
import EImage from './components/EImage.vue';

const data = reactive({
  baseTitle: '基础组件',
  inputTitle: '输入组件',
  desTitle: '描述组件',
});

onMounted(() => {
  selectItem.value = BaseList[0];
});

const selectItem = ref<CodeComponentType>();
const chooseItem = (item: CodeComponentType) => {
  selectItem.value = item;
  console.log(item.data);
};

const BaseList: CodeComponentType[] = [
  {
    title: 'button',
    t_type: 't-button',
    image: 'https://tdesign.gtimg.com/site/doc/doc-button.png',
    data: {
      url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
      width: 120,
      height: 120,
    } as EImageType,
  },
];
const InputList: CodeComponentType[] = [
  {
    title: 'input',
    t_type: 't-input',
    image: 'https://tdesign.gtimg.com/site/doc/doc-input.png',
    data: {
      url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
      width: 120,
      height: 120,
    } as EImageType,
  },
];
const DesList: CodeComponentType[] = [
  {
    title: 'tooltip',
    t_type: 't-tooltip',
    image: 'https://tdesign.gtimg.com/site/doc/doc-tooltip.png',
    data: {
      url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
      width: 120,
      height: 120,
    } as EImageType,
  },
  {
    title: 'image',
    t_type: 'EImage',
    image: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
    data: {
      url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
      width: 120,
      height: 120,
    } as EImageType,
  },
];
</script>

<style lang="less" scoped>
.div-container {
  height: 100%;
  background-color: #ffffff;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.div-com {
  height: 100%;
  background-color: #ffffff;
  width: 300px;

  &-title {
    padding: 16px;
    padding-bottom: 0px;
  }

  &-list {
    &-item {
      width: 50px;
      cursor: pointer;
      background: #e6e6e6;
      padding: 5px;
      margin-right: 5px;
      border-radius: 5px;
      &-img {
        width: 45px;
        height: 45px;
        text-align: center;
      }
      &-title {
        text-align: center;
      }
    }
  }
}
.div-opr {
  height: 100%;
  background-color: #e6e6e6;
  padding: 16px;

  flex: 1;
}
.div-pro {
  height: 100%;
  width: 300px;
  background-color: #ffffff;
  padding: 16px;
}

.t-divider {
  margin: 0;
  margin-top: 8px;
}
</style>