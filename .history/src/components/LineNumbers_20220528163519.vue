<template>
    <ul>
        <li v-for="(item, index) in lineNumbersArray" :key="index">
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: "LineNumbers",
    setup() {
        let lineNumbersArray = [1, 2, 3, 4, 5];
        return {
            lineNumbersArray,
        };
    },
};
</script>

<style scoped lang="scss">
li::marker {
    display: none;
}
</style>
