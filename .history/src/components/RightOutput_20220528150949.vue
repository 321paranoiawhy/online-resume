<template>
    <div class="right-input-flex-column">
        <p>Page : {{ currentOutputPage }}</p>
        <div class="img-flex">
            <img
                v-for="(item, index) in rightInputImage"
                :key="index"
                :src="require('../assets/images/' + item.img_src + '.svg')"
                alt=""
            />
        </div>
        <textarea spellcheck="true" class="right-textarea"></textarea>
    </div>
</template>

<script>
export default {
    name: "RightInput",
    setup() {
        let currentOutputPage = 1;
        return {
            currentOutputPage,
        };
    },
};
</script>

<style scoped lang="scss">
.right-input-flex-column {
    display: flex;
    flex-direction: column;
    // width: fit-content;
    // height: fit-content;
}
</style>
