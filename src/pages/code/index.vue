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
              <img class="div-com-list-item-img" :src="item.url" />
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
              <img class="div-com-list-item-img" :src="item.url" />
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
              <img class="div-com-list-item-img" :src="item.url" />
              <div class="div-com-list-item-title">{{ item.title }}</div>
            </div>
          </div>
        </template>
      </ListCard>
    </div>
    <div class="div-opr">
      <div v-if="pageObject">
        <div v-for="(node, index) in pageObject.children" :key="index">
          <component :is="node.type" :data="node.props"></component>
        </div>
      </div>
    </div>
    <div class="div-pro">
      <div>属性编辑</div>
      <t-divider></t-divider>
      <div v-if="selectItem">
        <t-space direction="vertical" :size="8">
          <div>已选择:</div>
          <div>组件名: {{ selectItem.title }}</div>
          <div>组件类型: {{ selectItem.type }}</div>

          <!-- <div>
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
        </div> -->
        </t-space>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { markRaw, onMounted, reactive, ref } from 'vue';
import ListCard from './components/ListCard.vue';
import { ComponentType, VPage, VNode } from './interface';
import EImage from './components/EImage.vue';

const data = reactive({
  baseTitle: '基础组件',
  inputTitle: '输入组件',
  desTitle: '描述组件',
});

onMounted(() => {
  selectItem.value = BaseList[0];
});

const pageObject = ref<VPage>({
  title: '创建的页面',
  children: [],
});
const selectItem = ref<ComponentType>();
const chooseItem = (item: ComponentType) => {
  selectItem.value = item;
  let node: VNode = {
    title: item.title,
    type: item.type,
    props: item.props,
    children: [],
  };
  pageObject.value.children.push(node);
};

const BaseList: ComponentType[] = [
  {
    title: 'button',
    type: 't-button',
    url: 'https://tdesign.gtimg.com/site/doc/doc-button.png',
    props: {
      width: {
        type: 'number',
        default: '100',
      },
      height: {
        type: 'number',
        default: '100',
      },
    },
  },
];
const DesList: ComponentType[] = [
  {
    title: 'time-picker',
    type: 't-time-picker',
    url: 'https://tdesign.gtimg.com/site/doc/doc-tooltip.png',
    props: {
      width: {
        type: 'number',
        default: '100',
      },
      height: {
        type: 'number',
        default: '100',
      },
    },
  },
  {
    title: 'image',
    type: markRaw(EImage),
    url: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
    props: {
      width: {
        type: 'number',
        default: '200',
      },
      height: {
        type: 'number',
        default: '200',
      },
      url: {
        type: 'string',
        default: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
      },
    },
  },
];
const inputType: ComponentType = {
  title: 'input',
  url: 'https://tdesign.gtimg.com/site/doc/doc-input.png',
  type: 't-input',
  props: {
    width: {
      type: 'number',
      default: '100',
    },
    height: {
      type: 'number',
      default: '100',
    },
    placeholder: {
      type: 'string',
      default: '请输入',
    },
    type: {
      type: 'options',
      default: 'text',
      values: ['text', 'number', 'url', 'tel', 'password', 'search', 'submit', 'hidden'],
    },
  },
};
const InputList: ComponentType[] = [inputType];
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
