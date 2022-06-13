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
