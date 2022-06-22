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
            <!-- ul li 左侧显示 行号 -->
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
        let initialInput =
            "name: xxx\nemail: xxx\nwechat: xxx\n\n\nbasic: xxx\nframework: xxx\napi: xxx\ntool: xxx\n\n\nundergraduate: xxx\nundergraduate-time: xxx\npostgraduate: xxx\npostgraduate-time: xxx\n\n\n*award: xxx\n*award: yyy\n*award: zzz\n\n\n*github: xxx\n*blog: yyy\n\n\n*self-evaluation: xxx\n*self-evaluation: yyy\n*self-evaluation: zzz\n\n\n*project: 1024\n*summary: xxx\n*website: xxx\n*features: xxx\n\n\n*project: 2048\n*summary: yyy\n*website: yyy\n*features: yyy\n\n\n*project: 4096\n*summary: zzz\n*website: zzz\n*features: zzz\n\n\n*project: 8192\n*summary: xyz\n*website: xyz\n*features: xyz";
        // vue2 this.$refs.input 获取到 DOM 元素
        // vue3 mounted 后方可获取到 DOM 元素
        onMounted(() => {
            // 如果 localStorage 中没有已存储的 input 项, 则赋初值 initialInput
            if (localStorage.getItem("input")) {
                input.value.value = localStorage.getItem("input");
                // 清除 localStorage 中的 input 项 (浏览器控制台中可直接使用)
                // localStorage.removeItem("input");
            } else {
                input.value.value = initialInput;
            }
            // 重新更新 lineNumbersArray
            lineNumbersArray.value = Array.from(
                { length: input.value.value.split("\n").length },
                (_, index) => index + 1
            );
            // 光标自动聚焦至输入框
            input.value.focus();
            // 执行 compileInput
            compileInput();
            // console.log(JSON.stringify(input.value.value));
        });
        // lineNumbersArray, 默认值为 [1]
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

            // 利用换行符作为分隔, 将 input textarea 内容切割为字符串数组
            let splitArray = input.value.value.split("\n");

            let selfEvaluationText = splitArray.filter((item) =>
                item.startsWith("*self-evaluation: ")
            );
            if (selfEvaluationText) {
                // 清空后再逐个添加
                document.querySelector("ul.selfEvaluation").innerHTML = "";
                for (let i = 0; i < selfEvaluationText.length; i++) {
                    let newElement = document.createElement("li");
                    newElement.innerHTML = selfEvaluationText[i].slice(
                        "*self-evaluation: ".length
                    );
                    document
                        .querySelector("ul.selfEvaluation")
                        .appendChild(newElement);
                }
            }

            let awardText = splitArray.filter((item) =>
                item.startsWith("*award: ")
            );
            if (awardText) {
                // 清空后再逐个添加
                document.querySelector("ul.award").innerHTML = "";
                for (let i = 0; i < awardText.length; i++) {
                    let newElement = document.createElement("li");
                    newElement.innerHTML = awardText[i].slice(
                        "*award: ".length
                    );
                    document.querySelector("ul.award").appendChild(newElement);
                }
            }

            let projectText = splitArray.filter((item) =>
                item.startsWith("*project: ")
            );
            if (projectText) {
                document
                    .querySelectorAll("h4.project")
                    .forEach((item, index) =>
                        projectText[index]
                            ? (item.innerHTML = projectText[index].slice(
                                  "*project: ".length
                              ))
                            : (item.innerHTML = null)
                    );
            }

            let projectSummaryText = splitArray.filter((item) =>
                item.startsWith("*summary: ")
            );
            if (projectSummaryText) {
                document
                    .querySelectorAll("p.summary")
                    .forEach((item, index) =>
                        projectSummaryText[index]
                            ? (item.innerHTML = projectSummaryText[index].slice(
                                  "*summary: ".length
                              ))
                            : (item.innerHTML = null)
                    );
            }

            let projectWebsiteText = splitArray.filter((item) =>
                item.startsWith("*website: ")
            );
            if (projectWebsiteText) {
                document
                    .querySelectorAll("a.website")
                    .forEach((item, index) =>
                        projectWebsiteText[index]
                            ? ((item.innerHTML =
                                  "Website: " +
                                  projectWebsiteText[index].slice(
                                      "*website: ".length
                                  )),
                              (item.href = projectWebsiteText[index].slice(
                                  "*website: ".length
                              )))
                            : (item.innerHTML = null)
                    );
            }

            let projectFeaturesText = splitArray.filter((item) =>
                item.startsWith("*features: ")
            );
            if (projectFeaturesText) {
                document
                    .querySelectorAll("li.features")
                    .forEach((item, index) =>
                        projectFeaturesText[index]
                            ? (item.innerHTML =
                                  "Features: " +
                                  projectFeaturesText[index].slice(
                                      "*features: ".length
                                  ))
                            : (item.innerHTML = null)
                    );
            }

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
                    splitArray[i].match(/github:\s/i) ||
                    splitArray[i].match(/blog:\s/i);
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
                        // 匹配到了 github:
                        case "github: ":
                            document.querySelector(
                                "a.github"
                            ).innerHTML = `GitHub: ${splitArray[i].slice(
                                "github: ".length
                            )}`;
                            document.querySelector(
                                "a.github"
                            ).href = `${splitArray[i].slice(
                                "github: ".length
                            )}`;
                            break;
                        // 匹配到了 blog:
                        case "blog: ":
                            document.querySelector(
                                "a.blog"
                            ).innerHTML = `blog: ${splitArray[i].slice(
                                "blog: ".length
                            )}`;
                            document.querySelector(
                                "a.blog"
                            ).href = `${splitArray[i].slice("blog: ".length)}`;
                            break;

                        default:
                            break;
                    }
                }
            }
            // TODO
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
                    break;
                // 前两页
                case "previousDoublePage":
                    // currentInputPage 不大于 2, 不予处理
                    // currentInputPage 大于 2, 则 -=2
                    if (currentInputPage.value > 2) {
                        currentInputPage.value -= 2;
                    }
                    break;
                // 下一页
                case "nextSinglePage":
                    // currentInputPage 不小于 totalInputPage, 不予处理
                    // currentInputPage 小于 totalInputPage, 则 ++
                    if (currentInputPage.value < totalInputPage.value) {
                        currentInputPage.value++;
                    }
                    break;
                // 后两页
                case "nextDoublePage":
                    // currentInputPage 不小于 totalInputPage - 1, 不予处理
                    // currentInputPage 小于 totalInputPage - 1, 则 +=2
                    if (currentInputPage.value < totalInputPage.value - 1) {
                        currentInputPage.value += 2;
                    }
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
            initialInput,
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
