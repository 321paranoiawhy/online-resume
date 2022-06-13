<template>
    <div class="right-output-flex-column">
        <p>
            Current Page : {{ currentOutputPage }} Total Pages :
            {{ totalOutputPage }}
        </p>
        <div>
            <img
                v-for="(item, index) in rightOutputImage"
                :key="index"
                :src="require('../assets/images/' + item.img_src + '.svg')"
                alt=""
            />
        </div>
        <textarea
            spellcheck="true"
            class="right-textarea"
            ref="compiledOutput"
        ></textarea>
    </div>
</template>

<script>
import rightOutputImage from "/public/data/rightOutputImage.json";
import { computed, onMounted, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    name: "RightInput",
    setup() {
        let currentOutputPage = 1;
        let totalOutputPage = 1;
        const store = useStore();
        let compiledHTML = ref(store.state.compiledHTML);
        let compiledOutput = ref(null);
        // onMounted(() => {
        //     compiledOutput.value.value = computed(() => {
        //         return store.state.compiledHTML;
        //     });
        // });
        watch(compiledHTML, () => {
            compiledOutput.value.value = computed(() => {
                return compiledHTML;
            });
        });
        return {
            currentOutputPage,
            totalOutputPage,
            rightOutputImage,
            compiledHTML,
            compiledOutput,
            store,
        };
    },
};
</script>

<style scoped lang="scss">
.right-ouput-flex-column {
    display: flex;
    flex-direction: column;
}
</style>
