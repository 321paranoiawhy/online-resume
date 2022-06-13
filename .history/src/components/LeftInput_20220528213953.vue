<template>
    <div class="left-input-flex-column">
        <p>
            Current Page : {{ currentInputPage }} Total Pages :
            {{ totalInputPage }}
        </p>
        <!-- <p>Ln {{ currentLine }} Col {{ currentColumn }}</p> -->
        <div>
            <img
                v-for="(item, index) in leftInputImage"
                :key="index"
                :src="require('../assets/images/' + item.img_src + '.svg')"
                alt=""
            />
        </div>
        <div class="flex">
            <Sidebar></Sidebar>
            <!-- <LineNumbers></LineNumbers> -->

            <ul>
                <li v-for="(item, index) in lineNumbersArray" :key="index">
                    {{ item }}
                </li>
            </ul>

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
import LineNumbers from "@/components/LineNumbers.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    name: "LeftInput",
    components: {
        Sidebar,
        LineNumbers,
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
            // store.commit("getLeftLine", input.value.value.length);
            // let length = ref(null);
            // length.value = input.value.value.length;
            // store.commit("getLeftLine", input.value.value.split("\n").length);
            lineNumbersArray.value = Array.from(
                { length: input.value.value.split("\n").length },
                (_, index) => index + 1
            );
            console.log(lineNumbersArray);
            // store.commit("getLineNumbersArray", lineNumbersArray);

            // console.log(input.value.value.length);
        };
        return {
            leftInputImage,
            currentInputPage,
            totalInputPage,
            input,
            store,
            compileInput,
            lineNumbersArray,
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
        // 3px 为 left-textarea 的 border(1) + padding(2)
        margin: 3px 0 0;
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
