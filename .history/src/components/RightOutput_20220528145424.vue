<template>
    <p>Page : {{ currentOutputPage }}</p>
    <textarea spellcheck="true" class="right-textarea"></textarea>
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
