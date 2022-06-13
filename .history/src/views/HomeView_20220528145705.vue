<template>
    <!-- <TopHeader></TopHeader> -->
    <!-- <Introduction></Introduction> -->
    <div class="main-flex">
        <Sidebar></Sidebar>
        <LeftInput></LeftInput>
        <RightOutput></RightOutput>
    </div>
    <!-- <BottomFooter></BottomFooter> -->
</template>

<script>
// @ is an alias to /src
import TopHeader from "@/components/Header.vue";
import Introduction from "@/components/Introduction.vue";
import Sidebar from "@/components/Sidebar.vue";
import LeftInput from "@/components/LeftInput.vue";
import RightOutput from "@/components/RightOutput.vue";
import BottomFooter from "@/components/Footer.vue";

// 功能拆解
// 下载源码和渲染结果文件(HTML&CSS, PDF, DOCX), 使用 Pandoc
// LaTeX 语法支持 (引入 MathJax)
// JavaScript 实现 解析
// common.css 负责特定样式
// 切换主题或者切换模板
// 主题 白天 黑夜
// 模板 暂定唯一模板 后续定制更多模板 (寻找优雅的 resume 模板)

export default {
    name: "HomeView",
    components: {
        TopHeader,
        Introduction,
        Sidebar,
        LeftInput,
        RightOutput,
        BottomFooter,
    },
};
</script>

<style scoped lang="scss">
div.main-flex {
    display: flex;
    width: fit-content;
}
</style>
