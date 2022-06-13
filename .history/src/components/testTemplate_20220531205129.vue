<template>
    <div class="grid">
        <div>
            <h3>SKILLS</h3>
            <h4>PROFESSIONAL</h4>
            <ul>
                <li></li>
            </ul>
        </div>
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
