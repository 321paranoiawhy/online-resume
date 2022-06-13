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
            <p class="disc">Wuhan University of Science and Technology</p>
            <div class="border">
                <p>Civil Engineering 2014.09 ~ 2018.06</p>
                <p>Civil Engineering 2014.09 ~ 2018.06</p>
            </div>
            <!-- <p class="border">Civil Engineering 2014.09 ~ 2018.06</p>
            <p class="border">Civil Engineering 2014.09 ~ 2018.06</p> -->
            <h4>Postgraduate</h4>
            <p class="list">Hunan University</p>
            <p>Bridge Engineering 2018.09 ~ 2021.06</p>
            <p>Bridge Engineering 2018.09 ~ 2021.06</p>
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
    // height: var(--A4-height);
    text-align: left;
    & p.disc {
        position: relative;
        margin-left: 20px;
        &::before {
            position: absolute;
            content: " ";
            left: -23.2px;
            top: 20%;
            width: 6.4px;
            height: 6.4px;
            border-radius: 50%;
            background-color: blue;
        }
    }
    & div.border {
        border-left: 1px solid red;
        & p {
            margin-left: 20px;
        }
    }
}
</style>
