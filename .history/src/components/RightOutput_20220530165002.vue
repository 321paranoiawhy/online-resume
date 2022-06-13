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
        <div class="right-output" ref="output"></div>
    </div>
</template>

<script>
import rightOutputImage from "/public/data/rightOutputImage.json";
import { onMounted, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    name: "RightOutput",
    setup() {
        let currentOutputPage = ref(1);
        let totalOutputPage = ref(10);
        const store = useStore();
        let output = ref(null);
        onMounted(() => {
            // output.value.value = computed(() => {
            //     console.log(store.state.compiledHTML);
            //     return store.state.compiledHTML;
            // });
            output.value.innerHTML = store.state.compiledHTML;
        });
        watch(
            () => store.state.compiledHTML,
            () => {
                output.value.innerHTML = store.state.compiledHTML;
                // 设置 CSS 样式
            }
        );
        return {
            rightOutputImage,
            currentOutputPage,
            totalOutputPage,
            output,
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
