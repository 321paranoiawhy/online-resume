<template>
    <div class="grid">
        <div>SKILLS</div>
        <div>EXPERIENCE</div>
    </div>
</template>

<script>
export default {
    name: "testTemplate",
    setup() {
        return {};
    },
};
</script>

<style scoped lang="scss">
div.grid {
    display: grid;
    grid-template-columns: repeat(2, auto);
}
</style>
