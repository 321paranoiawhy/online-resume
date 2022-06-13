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
                    let newDiv = document.createElement("div");
                    // console.log(output.value.innerHTML);
                    console.log(output);
                    console.log(output.value);
                    // 获取到子组件的内容
                    console.log(output.value.$el);
                    // console.log(document.querySelector(".right-output"));
                    newDiv.innerHTML = output.value.$el.innerHTML;
                    newDiv.style.width = "297mm";
                    newDiv.style.height = "420mm";
                    newDiv.style.position = "fixed";
                    newDiv.style.top = "0";
                    newDiv.style.left = "0";
                    newDiv.style.zIndex = "9999";
                    document.body.appendChild(newDiv);
                    window.print();
                    document.body.removeChild(newDiv);
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
