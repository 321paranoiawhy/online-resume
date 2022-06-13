<template>
    <div class="right-input-flex-column">
        <p>Page : {{ currentOutputPage }}</p>
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
