<template>
    <div class="grid">
        <div>
            <h3>SKILLS</h3>
            <h4>PROFESSIONAL</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>Canvas</li>
                <li>Git & Version Control</li>
                <li>GitHub</li>
                <li>Markdown & LaTeX</li>
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
