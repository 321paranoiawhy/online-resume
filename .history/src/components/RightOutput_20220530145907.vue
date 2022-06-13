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
        <!-- <p>{{ $store.state.compiledHTML }}</p> -->
        <div class="right-output" ref="output"></div>
        <!-- <textarea
            spellcheck="true"
            class="right-textarea"
            ref="output"
        ></textarea> -->
    </div>
</template>

<script>
import rightOutputImage from "/public/data/rightOutputImage.json";
import { computed, onMounted, ref, watch } from "@vue/runtime-core";
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
                output.value.value = store.state.compiledHTML;
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
.right-ouput-flex-column {
    display: flex;
    flex-direction: column;
}
</style>
