<template>
    <div class="right-output-flex-column">
        <div class="top-flex">
            <div class="center">
                <img
                    v-for="(item, index) in rightOutputImage.slice(0, 2)"
                    :key="index"
                    :src="require('../assets/images/' + item.img_src + '.svg')"
                    :alt="item.img_src"
                    @click="Fn(item.function)"
                />
                <p>{{ currentOutputPage }} / {{ totalOutputPage }}</p>
                <img
                    v-for="(item, index) in rightOutputImage.slice(2)"
                    :key="index"
                    :src="require('../assets/images/' + item.img_src + '.svg')"
                    :alt="item.img_src"
                    @click="Fn(item.function)"
                />
            </div>
            <!-- 快速跳转至某行某列 (默认当前页) -->
            <p @click="gotoLnAndCol">Ln 1, Col 1</p>
        </div>

        <!-- <div class="right-output" ref="output"></div> -->

        <testTemplateEN ref="output"></testTemplateEN>

        <!-- <testTemplateCN ref="output"></testTemplateCN> -->
    </div>
</template>

<script>
import rightOutputImage from "/public/data/rightOutputImage.json";
import testTemplateEN from "./testTemplateEN.vue";
import testTemplateCN from "./testTemplateCN.vue";

import { onMounted, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    name: "RightOutput",
    components: {
        testTemplateEN,
        testTemplateCN,
    },
    setup() {
        let currentOutputPage = ref(1);
        let totalOutputPage = ref(10);
        const store = useStore();
        let output = ref(null);
        // 思路一: 根据左边输入栏实时输出至右边, 并设置相应的样式
        // 思路二: 默认右边已有示例模板, 左边输入栏实时输入右边输出栏实时更新替换
        // 思路二更优: 用户可预览, 页面须有提示或者有帮助文档 F1 查看 各块对应语法 syntax
        onMounted(() => {
            // output.value.value = computed(() => {
            //     console.log(store.state.compiledHTML);
            //     return store.state.compiledHTML;
            // });
            // output.value.innerHTML = store.state.compiledHTML;
        });
        watch(
            () => store.state.compiledHTML,
            () => {
                output.value.innerHTML = store.state.compiledHTML;
                // 设置 CSS 样式
            }
        );
        // Fn: 根据入参执行相应函数
        let Fn = (parameter) => {
            switch (parameter) {
                case "download":
                    // 方法一: 调用浏览器打印功能
                    // 缺点一: 只能打印当前页面, 不能打印整个文档 (可通过替换 body 内容来实现, 最后复原即可)
                    // 缺点二: CSS 布局样式不能打印 (如 grid)
                    // console.log(output); // RefImpl{...}
                    // console.log(output.value); // Proxy{...}
                    // console.log(output.value.innerHTML); // undefined
                    // output.value.$el 获取子组件的所有 DOM 元素
                    // console.log(output.value.$el); // div.grid
                    // 保存 body 内容
                    let oldDiv = document.body.innerHTML;
                    let newDiv = output.value.$el.innerHTML;
                    // 替换 body 内容
                    document.body.innerHTML = newDiv;
                    // 调用浏览器打印功能
                    window.print();
                    // 恢复 body 内容
                    document.body.innerHTML = oldDiv;

                    // 方法二: html2canvas jspdf
                    break;
                default:
                    break;
            }
        };
        return {
            rightOutputImage,
            currentOutputPage,
            totalOutputPage,
            output,
            Fn,
        };
    },
};
</script>

<style scoped lang="scss">
.right-output-flex-column {
    display: flex;
    flex-direction: column;
    & div.top-flex {
        display: flex;
        width: 210mm;
        margin-left: auto;
        justify-content: center;
        & div.center {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
    }
}
</style>
