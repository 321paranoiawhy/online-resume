<template>
    <ul>
        <li v-for="(item, index) in lineNumbersArray" :key="index">
            {{ item }}
        </li>
    </ul>
    <p>{{ store.state.leftLine }}</p>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    name: "LineNumbers",
    setup() {
        const store = useStore();
        let leftLine = ref(store.state.leftLine);
        // console.log(store.state.leftLine);
        // Array.from({ length: store.state.leftLine },(_,index)=>index+1);
        let lineNumbersArray;
        // watch(leftLine, () => {
        //     lineNumbersArray = Array.from(
        //         { length: store.state.leftLine },
        //         (_, index) => index + 1
        //     );
        // });
        // let lineNumbersArray = Array.from(
        //     { length: store.state.leftLine },
        //     (_, index) => index + 1
        // );
        // console.log(lineNumbersArray);
        return {
            lineNumbersArray,
        };
    },
};
</script>

<style scoped lang="scss">
ul li {
    list-style-type: none;
}
ul {
    margin: 0 10px 0 15px;
    padding: 0;
    // 字体大小
    font-size: 12px;
    // 行高
    line-height: 18px;
    font-family: monospace;
}
</style>
