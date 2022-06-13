<template>
    <div class="left-input-flex-column">
        <p>Page : {{ currentInputPage }} Total Pages : {{ totalInputPage }}</p>
        <div>
            <img
                v-for="(item, index) in leftInputImage"
                :key="index"
                :src="require('../assets/images/' + item.img_src + '.svg')"
                alt=""
            />
        </div>
        <textarea spellcheck="true" class="left-textarea"></textarea>
    </div>
</template>

<script>
import leftInputImage from "/public/data/leftInputImage.json";
export default {
    name: "LeftInput",
    setup() {
        let currentInputPage = 1;
        let totalInputPage = 1;
        return {
            currentInputPage,
            totalInputPage,
            leftInputImage,
        };
    },
};
</script>

<style scoped lang="scss">
.left-input-flex-column {
    display: flex;
    flex-direction: column;
}
</style>
