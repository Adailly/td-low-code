// 对象,key/value都是字符串
interface JsonObject {
  [key: string]: string;
}

// 定义模型对象
export interface CodeComponentType {
  title?: string; // 组件名
  t_type?: string; // 组建类型:使用TDesign类型名
  image?: string; // 组件样式
  propertyJson?: JsonObject; // 属性对象
  data?: any;
}

export interface EImageType {
  url: string;
  width: number;
  height: number;
}
