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
        <p>{{ $store.state.compiledHTML }}</p>
        <textarea
            spellcheck="true"
            class="right-textarea"
            ref="output"
        ></textarea>
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
        let test = ref(store.state.compiledHTML);
        onMounted(() => {
            output.value.value = computed(() => {
                console.log(store.state.compiledHTML);
                return store.state.compiledHTML;
            });
            // output.value.value = test.value;
        });
        watch(
            () => store.state.compiledHTML,
            () => {
                output.value.value = store.state.compiledHTML;
            }
        );
        // watch(store, () => {
        //     console.log("TEST");
        //     output.value.value = store.state.compiledHTML;
        //     // output.value.value = computed(() => {
        //     //     return ref(store.state.compiledHTML);
        //     // });
        // });
        return {
            rightOutputImage,
            currentOutputPage,
            totalOutputPage,
            store,
            output,
            // output: computed(() => {
            //     store.state.compiledHTML;
            // }),
            test,
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
