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
        <div>
            <h3>PROJECTS</h3>
            <h4>2048</h4>
            <p>A personal open-source project using Vue.js</p>
            <ul>
                <li>
                    Website deployed:
                    <a href="">https://not-just-2048-vue.netlify.app/</a>
                </li>
                <li>
                    GitHub Source Code:
                    <a href="">https://github.com/321paranoiawhy/2048</a>
                </li>
            </ul>
        </div>
        <div>
            <h3>EDUCATION</h3>
            <h4>Undergraduate</h4>
            <p class="disc">Wuhan University of Science and Technology</p>
            <div class="border">
                <p>Civil Engineering 2014.09 ~ 2018.06</p>
                <p>Civil Engineering 2014.09 ~ 2018.06</p>
            </div>
            <h4>Postgraduate</h4>
            <p class="disc">Hunan University</p>
            <div class="border">
                <p>Bridge Engineering 2018.09 ~ 2021.06</p>
                <p>Bridge Engineering 2018.09 ~ 2021.06</p>
            </div>
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
    border: 1px solid green;
    & p.disc {
        position: relative;
        margin-left: 20px;
        &::before {
            position: absolute;
            content: " ";
            left: -23.2px;
            // TODO 垂直居中
            top: 25%;
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
