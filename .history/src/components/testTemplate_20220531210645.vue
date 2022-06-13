<template>
    <div class="grid">
        <div>
            <h3>SKILLS</h3>
            <p>PROFESSIONAL</p>
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
            <p>Wuhan University of Science and Technology</p>
            <p>Civil Engineering</p>
            <p>2014.09 ~ 2018.06</p>
            <h4>Postgraduate</h4>
            <p>Hunan University</p>
            <p>Bridge Engineering</p>
            <p>2018.09 ~ 2021.06</p>
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
    width: var(--A4-width);
    height: var(--A4-height);
    & li {
        text-align: left;
    }
}
</style>
