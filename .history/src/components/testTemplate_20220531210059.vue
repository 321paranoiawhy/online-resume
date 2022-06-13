<template>
    <div class="grid">
        <div>
            <h3>SKILLS</h3>
            <span>PROFESSIONAL</span>
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
        <div><h3>PROJECTS</h3></div>
        <div>
            <h3>EDUCATION</h3>
            <h4>Undergraduate</h4>
            <div>
                <span></span>
            </div>
            <h4>Postgraduate</h4>
        </div>
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
    & li {
        text-align: left;
    }
}
</style>
