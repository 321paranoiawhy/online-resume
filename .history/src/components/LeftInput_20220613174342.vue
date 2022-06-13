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
                <!-- v-if v-else -->
                <!-- <img
                    v-if="sunOrMoon"
                    src="../assets/images/IconoirSunLight.svg"
                    alt="IconoirSunLight"
                    @click="changeTheme()"
                />
                <img
                    v-else
                    style="
                        filter: invert(99%) sepia(1%) saturate(335%)
                            hue-rotate(174deg) brightness(99%) contrast(95%);
                    "
                    src="../assets/images/IconoirHalfMoon.svg"
                    alt="IconoirHalfMoon"
                    @click="changeTheme()"
                /> -->
                <!-- v-show -->
                <img
                    v-show="sunOrMoon"
                    src="../assets/images/IconoirSunLight.svg"
                    alt="IconoirSunLight"
                    @click="changeTheme()"
                />
                <img
                    v-show="!sunOrMoon"
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
            <!-- wrap hard 自动换行 -->
            <!-- https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-wrap -->
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
                console.log(document.querySelectorAll("img"));

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
            // 读取 localStorage
            input.value.value = localStorage.getItem("input");
            // 重新更新 lineNumbersArray
            lineNumbersArray.value = Array.from(
                { length: input.value.value.split("\n").length },
                (_, index) => index + 1
            );
            // 光标自动聚焦至输入框
            input.value.focus();
            // 执行 compileInput
            compileInput();
        });
        // lineNumbersArray, 默认值为 [1]
        let lineNumbersArray = ref([1]);

        // 当左侧 input textarea 变化时, 执行 compileInput 函数
        let compileInput = () => {
            // compiledHTML 重置为空字符串 (避免叠加)
            let compiledHTML = "";
            // 通过 ref 拿到 DOM: input.value
            // 取出 DOM 中值: input.value.value
            // console.log(input.value.value.split("\n"));
            lineNumbersArray.value = Array.from(
                { length: input.value.value.split("\n").length },
                (_, index) => index + 1
            );
            let selfEvaluationMatch =
                input.value.value.match(/\*self-evaluation:\s/gi);

            for (let i = 0; i < selfEvaluationMatch.length; i++) {
                document.querySelector("ul.selfEvaluation").children[
                    i
                ].innerHTML = selfEvaluationMatch[i];
            }
            // 利用换行符作为分隔, 将 input textarea 内容切割为字符串数组
            let splitArray = input.value.value.split("\n");
            console.log(
                splitArray.filter((item, index) =>
                    item.startsWith("*self-evaluation: ")
                )
            );
            // console.log(input.value.value);
            // console.log(JSON.stringify(input.value.value));
            // console.log(encodeURI(input.value.value));
            for (let i = 0; i < splitArray.length; i++) {
                // 正则匹配 (不区分大小写)
                let matchArray =
                    splitArray[i].match(/name:\s/i) ||
                    splitArray[i].match(/email:\s/i) ||
                    splitArray[i].match(/wechat:\s/i) ||
                    splitArray[i].match(/basic:\s/i) ||
                    splitArray[i].match(/framework:\s/i) ||
                    splitArray[i].match(/api:\s/i) ||
                    splitArray[i].match(/tool:\s/i) ||
                    splitArray[i].match(/undergraduate:\s/i) ||
                    splitArray[i].match(/undergraduate-time:\s/i) ||
                    splitArray[i].match(/postgraduate:\s/i) ||
                    splitArray[i].match(/postgraduate-time:\s/i) ||
                    splitArray[i].match(/\*self-evaluation:\s/i) ||
                    splitArray[i].match(/profession:\s/i);
                // console.log(matchArray);
                // console.log(matchArray[0]);
                if (matchArray) {
                    // 加上相应的 class 类名, 便于 css 选择器选中并加以相应的样式
                    // 不区分大小写, 兼容性更强
                    switch (matchArray[0].toLowerCase()) {
                        // 匹配到了 name:
                        case "name: ":
                            // console.log(document.querySelector("li.name"));
                            document.querySelector(
                                "li.name"
                            ).innerHTML = `Name: ${splitArray[i].slice(
                                "name: ".length
                            )}`;
                            break;
                        // 匹配到了 email:
                        case "email: ":
                            document.querySelector(
                                "li.email"
                            ).innerHTML = `Email: ${splitArray[i].slice(
                                "email: ".length
                            )}`;
                            break;
                        // 匹配到了 wechat:
                        case "wechat: ":
                            document.querySelector(
                                "li.wechat"
                            ).innerHTML = `Wechat: ${splitArray[i].slice(
                                "wechat: ".length
                            )}`;
                            break;
                        // 匹配到了 basic:
                        case "basic: ":
                            document.querySelector(
                                "li.basic"
                            ).innerHTML = `Basic: ${splitArray[i].slice(
                                "basic: ".length
                            )}`;
                            break;
                        // 匹配到了 framework:
                        case "framework: ":
                            document.querySelector(
                                "li.framework"
                            ).innerHTML = `Framework: ${splitArray[i].slice(
                                "framework: ".length
                            )}`;
                            break;
                        // 匹配到了 api:
                        case "api: ":
                            document.querySelector(
                                "li.api"
                            ).innerHTML = `API: ${splitArray[i].slice(
                                "api: ".length
                            )}`;
                            break;
                        // 匹配到了 tool:
                        case "tool: ":
                            document.querySelector(
                                "li.tool"
                            ).innerHTML = `Tool: ${splitArray[i].slice(
                                "tool: ".length
                            )}`;
                            break;
                        // 匹配到了 undergraduate:
                        case "undergraduate: ":
                            document.querySelector(
                                "p.undergraduate"
                            ).innerHTML = `Undergraduate: ${splitArray[i].slice(
                                "undergraduate: ".length
                            )}`;
                            break;
                        // 匹配到了 undergraduate-time:
                        case "undergraduate-time: ":
                            document.querySelector(
                                "p.undergraduate-time"
                            ).innerHTML = `${splitArray[i].slice(
                                "undergraduate-time: ".length
                            )}`;
                            break;
                        // 匹配到了 postgraduate:
                        case "postgraduate: ":
                            document.querySelector(
                                "p.postgraduate"
                            ).innerHTML = `Postgraduate: ${splitArray[i].slice(
                                "postgraduate: ".length
                            )}`;
                            break;
                        // 匹配到了 postgraduate-time:
                        case "postgraduate-time: ":
                            document.querySelector(
                                "p.postgraduate-time"
                            ).innerHTML = `${splitArray[i].slice(
                                "postgraduate-time: ".length
                            )}`;
                            break;

                        case "*self-evaluation: ":
                            // console.log(
                            //     document.querySelector("ul.selfEvaluation")
                            //         .children.length
                            // );
                            // console.log(
                            //     document.querySelector("ul.selfEvaluation")
                            //         .children[0]
                            // );
                            // console.log(selfEvaluationCount);
                            // if (
                            //     selfEvaluationCount <=
                            //     document.querySelector("ul.selfEvaluation")
                            //         .children.length
                            // ) {
                            //     for (let i = 0; i <= selfEvaluationCount; i++) {
                            //         document.querySelector(
                            //             "ul.selfEvaluation"
                            //         ).children[i].innerHTML = `${splitArray[
                            //             i
                            //         ].slice("*self-evaluation: ".length)}`;
                            //     }
                            // }
                            // document.querySelector(
                            //     "ul.selfEvaluation"
                            // ).children[
                            //     selfEvaluationCount
                            // ].innerHTML = `${splitArray[i].slice(
                            //     "*self-evaluation: ".length
                            // )}`;
                            // console.log(selfEvaluationCount);
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
                    // 保存到 localStorage
                    localStorage.setItem("input", input.value.value);
                    break;
                case "upload":
                    // TODO 上传文件
                    break;
                case "download":
                    // 下载为 txt 文件
                    let filename = "input.txt";
                    let content = input.value.value;
                    // 兼容处理
                    let urlObject = window.URL || window.webkitURL || window;
                    let blob = new Blob([content]);
                    let a = document.createElement("a");
                    a.download = filename;
                    a.href = urlObject.createObjectURL(blob);
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a); // 或 a.remove();
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
