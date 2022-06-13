<template>
    <div class="left-input-flex-column">
        <div class="top-flex">
            <div class="center">
                <img
                    v-for="(item, index) in leftInputImage.slice(0, 2)"
                    :key="index"
                    :src="require('../assets/images/' + item.img_src + '.svg')"
                    :alt="item.img_src"
                    @click="Fn(item.function)"
                />
                <p>{{ currentInputPage }} / {{ totalInputPage }}</p>
                <img
                    v-for="(item, index) in leftInputImage.slice(2)"
                    :key="index"
                    :src="require('../assets/images/' + item.img_src + '.svg')"
                    :alt="item.img_src"
                    @click="Fn(item.function)"
                />
            </div>
            <!-- 快速跳转至某行某列 (默认当前页) -->
            <p @click="gotoLnAndCol">Ln 1, Col 1</p>
        </div>
        <div class="flex">
            <!-- 侧边工具栏 -->
            <Sidebar></Sidebar>
            <!-- 左侧显示 行号 -->
            <ul>
                <li v-for="(item, index) in lineNumbersArray" :key="index">
                    {{ item }}
                </li>
            </ul>
            <!-- input textarea -->
            <textarea
                spellcheck="true"
                class="left-textarea"
                ref="input"
                @input="compileInput"
            ></textarea>
        </div>
    </div>
</template>

<script>
import leftInputImage from "/public/data/leftInputImage.json";
import Sidebar from "@/components/Sidebar.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    name: "LeftInput",
    components: {
        Sidebar,
    },
    setup() {
        let currentInputPage = ref(1);
        let totalInputPage = ref(10);
        let input = ref(null);
        const store = useStore();

        // vue2 this.$refs.input 获取到 DOM 元素
        // vue3 mounted 后方可获取到 DOM 元素
        onMounted(() => {
            // console.log(input.value);
            // console.log(input.value.value);
            // console.log(input.value.value.length);
            // store.commit("getLeftLine", 0);
            // console.log(input.value.selectionStart);
        });

        // compiledHTML 默认值为空字符串
        let compiledHTML = "";
        let splitArray;
        let matchArray;
        // 提交至 vuex getCompiledHTML
        store.commit("getCompiledHTML", compiledHTML);

        // lineNumbersArray 默认为 [1]
        let lineNumbersArray = ref([1]);
        // 当左侧 input textarea 变化时, 执行 compileInput 函数
        let compileInput = () => {
            // 通过 ref 拿到 DOM: input.value
            // 取出 DOM 中值: input.value.value
            // console.log(input.value.value.split("\n"));
            lineNumbersArray.value = Array.from(
                { length: input.value.value.split("\n").length },
                (_, index) => index + 1
            );
            // 更新 compiledHTML

            splitArray = input.value.value.split("\n");
            for (let i = 0; i < splitArray.length; i++) {
                matchArray =
                    splitArray[i].match(/name:\s/) ||
                    splitArray[i].match(/profession:\s/);
                if (matchArray) {
                    switch (matchArray[0]) {
                        case "name: ":
                            compiledHTML = "1";
                            break;

                        default:
                            break;
                    }
                }
            }

            compiledHTML = "<h1>H1<h1>";
            store.commit("getCompiledHTML", compiledHTML);

            // console.log(input.value.selectionStart);
        };

        // Fn: 根据入参执行相应函数
        let Fn = (parameter) => {
            switch (parameter) {
                // 上一页
                case "previousSinglePage":
                    // currentInputPage 不大于 1, 不予处理
                    // currentInputPage 大于 1, 则 --
                    if (currentInputPage.value > 1) {
                        currentInputPage.value--;
                    }
                    // console.log(currentInputPage.value);
                    break;
                // 前两页
                case "previousDoublePage":
                    // currentInputPage 不大于 2, 不予处理
                    // currentInputPage 大于 2, 则 -=2
                    if (currentInputPage.value > 2) {
                        currentInputPage.value -= 2;
                    }
                    // console.log(currentInputPage.value);
                    break;
                // 下一页
                case "nextSinglePage":
                    // currentInputPage 不小于 totalInputPage, 不予处理
                    // currentInputPage 小于 totalInputPage, 则 ++
                    if (currentInputPage.value < totalInputPage.value) {
                        currentInputPage.value++;
                    }
                    // console.log(currentInputPage.value);
                    break;
                // 后两页
                case "nextDoublePage":
                    // currentInputPage 不小于 totalInputPage - 1, 不予处理
                    // currentInputPage 小于 totalInputPage - 1, 则 +=2
                    if (currentInputPage.value < totalInputPage.value - 1) {
                        currentInputPage.value += 2;
                    }
                    // console.log(currentInputPage.value);
                    break;
                case "download":
                    // TODO Blob 对象
                    break;
                default:
                    break;
            }
        };
        let gotoLnAndCol = () => {};
        return {
            leftInputImage,
            currentInputPage,
            totalInputPage,
            input,
            lineNumbersArray,
            compiledHTML,
            compileInput,
            Fn,
            gotoLnAndCol,
        };
    },
};
</script>

<style scoped lang="scss">
.left-input-flex-column {
    display: flex;
    flex-direction: column;
    & div.flex {
        display: flex;
    }
    & ul li {
        list-style-type: none;
    }
    & ul {
        // height: var(--A4-height);
        // TODO li 溢出, 须设法对左侧 input 分页
        margin: 3px 10px 0 15px;
        padding: 0;
        // 字体大小
        font-size: var(--font-size-small);
        // 行高
        line-height: var(--line-height-small);
        font-family: monospace;
    }
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
