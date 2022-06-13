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
                <!-- 当前页数 / 总页数 -->
                <p>{{ currentInputPage }} / {{ totalInputPage }}</p>
                <img
                    v-for="(item, index) in leftInputImage.slice(2)"
                    :key="index"
                    :src="require('../assets/images/' + item.img_src + '.svg')"
                    :alt="item.img_src"
                    @click="Fn(item.function)"
                />
                <!-- 默认显示 sun (白天) 图标-->
                <img
                    v-if="sunOrMoon"
                    src="../assets/images/IconoirSunLight.svg"
                    alt="IconoirSunLight"
                    @click="changeTheme()"
                />
                <!-- sunOrMoon 为 false 时 显示 moon (黑夜) 图标 -->
                <img
                    v-else
                    src="../assets/images/IconoirHalfMoon.svg"
                    alt="IconoirHalfMoon"
                    @click="changeTheme()"
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
                @input="compileInput()"
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
        let sunOrMoon = ref(true);
        // 白天黑夜
        // TODO 白天黑夜图标未适用样式, 猜测与 v-if 的实现有关
        let changeTheme = () => {
            sunOrMoon.value = !sunOrMoon.value;
            // sun 白天
            if (sunOrMoon.value) {
                // 设置 html backgroundColor color
                document.querySelector("html").style.backgroundColor =
                    "#f1f3f5";
                document.querySelector("html").style.color = "#3f3f3f";
                // 设置 textarea backgroundColor color
                document.querySelector("textarea").style.backgroundColor =
                    "#f1f3f5";
                document.querySelector("textarea").style.color = "#3f3f3f";
                document
                    .querySelectorAll("img")
                    .forEach(
                        (item) =>
                            (item.style.filter =
                                "invert(22%) sepia(0%) saturate(0%) hue-rotate(109deg) brightness(97%) contrast(87%)")
                    );
            }
            // moon 黑夜
            else {
                document.querySelector("html").style.backgroundColor =
                    "#3f3f3f";
                document.querySelector("html").style.color = "#f1f3f5";
                document.querySelector("textarea").style.backgroundColor =
                    "#3f3f3f";
                document.querySelector("textarea").style.color = "#f1f3f5";
                document
                    .querySelectorAll("img")
                    .forEach(
                        (item) =>
                            (item.style.filter =
                                "invert(99%) sepia(1%) saturate(335%) hue-rotate(174deg) brightness(99%) contrast(95%)")
                    );
            }
        };
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

        // compiledHTML, 默认值为空字符串
        let compiledHTML = "";
        // 分割数组, 默认值为空数组
        let splitArray = [];
        // 匹配数组, 默认值为空数组
        let matchArray = [];

        // let format = (parameter) => {};

        // lineNumbersArray, 默认值为 [1]
        let lineNumbersArray = ref([1]);
        // 当左侧 input textarea 变化时, 执行 compileInput 函数
        let compileInput = () => {
            // compiledHTML 重置为空字符串 (避免叠加)
            compiledHTML = "";
            // 通过 ref 拿到 DOM: input.value
            // 取出 DOM 中值: input.value.value
            // console.log(input.value.value.split("\n"));
            lineNumbersArray.value = Array.from(
                { length: input.value.value.split("\n").length },
                (_, index) => index + 1
            );

            // 利用换行符作为分隔, 将 input textarea 内容切割为字符串数组
            splitArray = input.value.value.split("\n");
            for (let i = 0; i < splitArray.length; i++) {
                // 正则匹配
                matchArray =
                    splitArray[i].match(/name:\s/) ||
                    splitArray[i].match(/profession:\s/);
                // console.log(matchArray);
                // console.log(matchArray[0]);
                if (matchArray) {
                    // 更新 compiledHTML
                    // 加上相应的 class 类名, 便于 css 选择器选中并加以相应的样式
                    switch (matchArray[0]) {
                        // 匹配到了 name:
                        case "name: ":
                            compiledHTML += `<h1 class="name">${splitArray[
                                i
                            ].slice("name: ".length)}</h1>`;
                            break;
                        // 匹配到了 profession:
                        case "profession: ":
                            compiledHTML += `<h1 class="profession">${splitArray[
                                i
                            ].slice("profession: ".length)}</h1>`;
                            break;
                        default:
                            break;
                    }
                }
            }
            // 提交至 vuex
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
                case "save":
                    // TODO 保存到 localStorage
                    break;
                case "upload":
                    // TODO Blob 对象
                    break;
                case "download":
                    // IIFE 立即执行函数 (匿名函数)
                    let filename = txt.txt;
                    console.log(input.value);
                    console.log(input.value.value);
                    let content = input.value.value;
                    // let contentType = txt;
                    let urlObject = window.URL || window.webkitURL || window;
                    let blob = new Blob([content]);
                    let a = document.createElement("a");
                    a.href = urlObject.createObjectURL(blob);
                    a.download = filename;
                    a.click();
                    // (function download(filename, content, contentType) {
                    //     if (!contentType) {
                    //         contentType = "application/octet-stream";
                    //         let a = document.createElement("a");
                    //         let blob = new Blob([content], {
                    //             type: contentType,
                    //         });
                    //         a.href = window.URL.createObjectURL(blob);
                    //         a.download = filename;
                    //         a.click();
                    //     }
                    // })();
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
            sunOrMoon,
            changeTheme,
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
