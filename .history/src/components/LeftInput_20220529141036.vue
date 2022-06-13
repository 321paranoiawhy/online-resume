<template>
    <div class="left-input-flex-column">
        <p>
            Current Page : {{ currentInputPage }} Total Pages :
            {{ totalInputPage }}
        </p>
        <!-- <p>Ln {{ currentLine }}, Col {{ currentColumn }}</p> -->
        <div>
            <img
                v-for="(item, index) in leftInputImage"
                :key="index"
                :src="require('../assets/images/' + item.img_src + '.svg')"
                alt=""
            />
            <p @click="gotoLnAndCol">Ln 1, Col 2</p>
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
        let currentInputPage = 1;
        let totalInputPage = 1;
        let input = ref(null);
        const store = useStore();
        // vue2 this.$refs.input 获取到 DOM 元素
        // vue3 mounted 后方可获取到 DOM 元素
        onMounted(() => {
            // console.log(input.value);
            // console.log(input.value.value);
            // console.log(input.value.value.length);
            // store.commit("getLeftLine", 0);
        });
        let lineNumbersArray = ref([1]);
        let compileInput = () => {
            console.log(input.value.value.split("\n"));
            lineNumbersArray.value = Array.from(
                { length: input.value.value.split("\n").length },
                (_, index) => index + 1
            );
        };
        let gotoLnAndCol = () => {};
        return {
            leftInputImage,
            currentInputPage,
            totalInputPage,
            input,
            store,
            lineNumbersArray,
            compileInput,
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
        font-size: 12px;
        // 行高
        line-height: 18px;
        font-family: monospace;
    }
}
</style>
