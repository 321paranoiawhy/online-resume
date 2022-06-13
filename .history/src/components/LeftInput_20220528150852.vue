<template>
    <div class="left-input-flex-column">
        <p>Page : {{ currentInputPage }}</p>
        <div class="img-flex">
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
        return {
            currentInputPage,
            leftInputImage,
        };
    },
};
</script>

<style scoped lang="scss">
.left-input-flex-column {
    display: flex;
    flex-direction: column;
    // width: fit-content;
    // height: fit-content;
    & .img-flex {
        display: flex;
        justify-content: center;
    }
}
</style>
