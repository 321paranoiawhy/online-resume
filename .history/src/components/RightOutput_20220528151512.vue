<template>
    <div class="right-output-flex-column">
        <p>
            Page : {{ currentOutputPage }} Total Pages : {{ totalOutputPage }}
        </p>
        <div>
            <img
                v-for="(item, index) in rightOutputImage"
                :key="index"
                :src="require('../assets/images/' + item.img_src + '.svg')"
                alt=""
            />
        </div>
        <textarea spellcheck="true" class="right-textarea"></textarea>
    </div>
</template>

<script>
import rightOutputImage from "/public/data/rightOutputImage.json";
export default {
    name: "RightInput",
    setup() {
        let currentOutputPage = 1;
        let totalOutputPage = 1;
        return {
            currentOutputPage,
            totalOutputPage,
            rightOutputImage,
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
