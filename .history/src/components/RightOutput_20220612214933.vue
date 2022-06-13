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
// import html2canvas from "html2canvas";
// import jspdf from "jspdf";
// import html2pdf from "html2pdf.js";
import domtoimage from "dom-to-image";
// import puppeteer from "puppeteer";
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
        window.onscroll = function () {
            const top = output.value.$el.offsetTop;
            const left = output.value.$el.offsetLeft;
            if (window.scrollY > top) {
                output.value.$el.style.position = "fixed";
                output.value.$el.style.top = "0px";
                output.value.$el.style.left = left + "px";
            } else {
                output.value.$el.removeAttribute("style");
                // output.value.$el.style.position = "";
                // output.value.$el.style.top = "";
                // output.value.$el.style.left = "";
            }
            console.log(window.innerWidth, window.innerHeight); // 屏幕宽高
            console.log(window.screen.width, window.screen.height); // 2048,1152
            console.log(window.screen.availWidth, window.screen.availHeight); // 2048 1104
        };
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
            // 固定定位
            // const top = output.value.$el.offsetTop;
            // const left = output.value.$el.offsetLeft;
            // output.value.$el.style.position = "fixed";
            // output.value.$el.style.top = top + "px";
            // output.value.$el.style.left = left + "px";
        });
        watch(
            () => store.state.compiledHTML,
            () => {
                output.value.innerHTML = store.state.compiledHTML;
                // TODO 设置 CSS 样式
            }
        );
        // Fn: 根据入参执行相应函数
        let Fn = (parameter) => {
            switch (parameter) {
                case "download":
                    // console.log(output); // RefImpl{...}
                    // console.log(output.value); // Proxy{...}
                    // console.log(output.value.innerHTML); // undefined
                    // output.value.$el 获取子组件的所有 DOM 元素
                    // console.log(output.value.$el); // div.grid

                    // 方法 1: 调用浏览器打印功能
                    // 缺点一: 只能打印当前页面, 不能打印整个文档 (可通过替换 body 内容来实现, 最后复原即可)
                    // 缺点二: CSS 布局样式不能打印 (如 grid)

                    // 保存 body 内容
                    // let oldDiv = document.body.innerHTML;
                    // let newDiv = output.value.$el.innerHTML;
                    // // 替换 body 内容
                    // document.body.innerHTML = newDiv;
                    // // 调用浏览器打印功能
                    // window.print();
                    // // 恢复 body 内容
                    // document.body.innerHTML = oldDiv;

                    // 方法 2: html2canvas + jsPDF (html -> canvas -> dataURL -> pdf)
                    // 1. html2canvas (html -> canvas) 2. canvas.toDataURL() (canvas -> 图片) 3. jspdf (图片 -> pdf)
                    // 缺点一: pdf实质上为图片, 无法选中文本, 只能选中图片, 且图片清晰度有所损失, 最终打印效果不佳
                    // 缺点二: html2canvas 支持的 CSS 属性和值有限: https://html2canvas.hertzen.com/features
                    // let title = "Resume - Huayi wen";
                    // const dom = output.value.$el; // 生成pdf的html内容
                    // const width = dom.offsetWidth;
                    // const height = dom.offsetHeight;
                    // html2canvas(dom, {
                    //     useCORS: true, // 开启跨域
                    //     width: width,
                    //     height: height,
                    //     logging: false, // 关闭 html2canvas console.log() 日志
                    // }).then(function (canvas) {
                    //     const pageData = canvas.toDataURL("image/jpeg", 1.0);
                    //     const pdf = new jspdf("", "pt", [width, height]);
                    //     pdf.addImage(pageData, "jpeg", 0, 0, width, height);
                    //     pdf.save(title + ".pdf");
                    // });

                    // 方法 3: 用户手动截取得到 png 图片
                    // chrome capture node screenshot
                    // firefox capture node screenshot (节点截图)

                    // 方法 4
                    // https://restpack.io/screenshot/docs#element

                    // 方法 5: html2pdf https://github.com/eKoopmans/html2pdf.js#usage
                    // html2canvas -> canvas -> dataURL -> pdf
                    // 实质为 html2canvas + jsPDF, 因而同样存在缺点
                    // const element = output.value.$el;
                    // html2pdf(element);

                    // 方法6: dom-to-image: https://github.com/tsayen/dom-to-image
                    // 将节点转换为 svg 图片
                    // issue li::marker color 样式会被忽略掉
                    // issue 固定定位元素无法截取
                    // 即 仍有部分 CSS 属性无法还原
                    const node = output.value.$el;
                    // 解决固定定位时无法截取的问题
                    if (node.style.position === "fixed") {
                        node.style.position = "";
                        // node.style.left = "0px";
                        // node.style.right = "0px";
                    }
                    // 过滤掉 i 元素
                    function filter(node) {
                        return node.tagName !== "i";
                    }
                    domtoimage
                        .toSvg(node, {
                            filter: filter,
                            bgcolor: "white",
                        })
                        .then(function (dataUrl) {
                            let link = document.createElement("a");
                            link.download = "test.svg";
                            link.href = dataUrl;
                            link.click();
                            // 复原 固定定位
                            node.style.position = "fixed";
                        });

                    // 方法7 puppeteer server-side-screenshot 服务器端截图
                    // https://stackoverflow.com/questions/52834849/how-to-use-puppeteer-in-vue-js

                    // const puppeteer = require("puppeteer");

                    // (async () => {
                    //     const browser = await puppeteer.launch();
                    //     const page = await browser.newPage();
                    //     await page.goto("https://example.com");
                    //     await page.screenshot({ path: "example.png" });

                    //     await browser.close();
                    // })();

                    // const puppeteer = require("puppeteer");
                    // (async () => {
                    //     const browser = await puppeteer.launch();
                    //     const page = await browser.newPage();
                    //     await page.setViewport({
                    //         // 设置视窗大小
                    //         width: 600,
                    //         height: 800,
                    //     });
                    //     await page.goto("window.location.href", {
                    //         waitUntil: "networkidle0",
                    //     }); // 打开页面
                    //     await page.screenshot({ path: "example.png" }); // path: 截屏文件保存路径
                    //     await browser.close();
                    // })();
                    console.log(window.location.href);
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
    // & .grid.fixed {
    //     position: fixed;
    //     top: 100px;
    //     left: 100px;
    // }
}
</style>
