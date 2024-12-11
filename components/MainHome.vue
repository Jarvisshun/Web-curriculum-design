<template>
  <!-- Vue 的模板部分 (template) -->
  <div>
    <!-- 使用子组件 VueBanner -->
    <VueBanner></VueBanner>

    <!-- 使用子组件 VueContent -->
    <VueContent></VueContent>
  </div>
</template>

<script>
// 导入 Vue 组件的部分 (script)
// 这里通过相对路径导入了两个组件 VueBanner 和 VueContent。
// "./" 表示当前文件的相对路径。
import VueBanner from './VueBanner.vue'; // 导入 VueBanner 组件
import VueContent from './VueContent.vue'; // 导入 VueContent 组件

export default {
  // 定义一个 Vue 组件的导出对象
  // 默认导出是 JavaScript ES6 模块系统中的一个特性，用于在其他地方导入此模块。

  // components 对象中注册了导入的子组件。
  // 注册的组件可以在该组件的模板中使用。
  components: {
    VueBanner, // 注册 VueBanner 组件
    VueContent // 注册 VueContent 组件
  },
};
</script>