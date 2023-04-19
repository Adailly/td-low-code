// key/value 对象
export interface KeyValueObject {
  [key: string]: any;
}

// 属性对象
export interface PropsObject {
  [key: string]: KeyValueObject | KeyValueObject[];
}

// 组件对象
export interface ComponentType {
  title: string;
  url: string;
  type: any;
  props: PropsObject;
}

// node对象
export interface VNode {
  title: string;
  type: string;
  props: PropsObject; // 属性对象
  children: VNode[]; // 子对象
}

// page对象
export interface VPage {
  title: string;
  children: VNode[];
}

export interface EImageType {
  url: string;
  width: number;
  height: number;
}
