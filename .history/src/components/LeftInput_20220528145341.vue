<template>
    <p>Page : {{ currentInputPage }}</p>
    <textarea spellcheck="true" class="left-textarea"></textarea>
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
