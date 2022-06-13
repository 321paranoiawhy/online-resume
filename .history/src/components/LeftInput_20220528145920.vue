<template>
    <div class="left-input-flex-column">
        <p>Page : {{ currentInputPage }}</p>
        <textarea spellcheck="true" class="left-textarea"></textarea>
    </div>
</template>

<script>
export default {
    name: "LeftInput",
    setup() {
        let currentInputPage = 1;
        return {
            currentInputPage,
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
}
</style>
