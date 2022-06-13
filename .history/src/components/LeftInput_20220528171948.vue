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
            <LineNumbers></LineNumbers>
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
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";

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
        // vue2 this.$refs.input 获取到 DOM 元素
        // vue3 mounted 后方可获取到 DOM 元素
        onMounted(() => {
            console.log(input.value);
        });
        let compileInput = () => {
            console.log(input.value.value.split("\n"));
        };
        return {
            leftInputImage,
            currentInputPage,
            totalInputPage,
            input,
            compileInput,
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
}
</style>
