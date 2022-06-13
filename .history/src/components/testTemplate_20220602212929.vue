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
            <p>Write classic 2048 using Vue.js and extend.</p>
            <ul>
                <li>
                    <a href="https://not-just-2048-vue.netlify.app/"
                        >Website deployed</a
                    >
                </li>
                <li>
                    <a href="https://github.com/321paranoiawhy/2048"
                        >GitHub Source Code</a
                    >
                </li>
                <li>
                    Features: Highly customizable by users meaning that users
                    can change each parameter exposed such as new numbers
                    generated every time.
                </li>
            </ul>
        </div>
        <div>
            <h3>EDUCATION</h3>
            <h4 class="disc">Undergraduate</h4>
            <div class="border">
                <p>Wuhan University of Science and Technology</p>
                <p>Civil Engineering 2014.09 ~ 2018.06</p>
            </div>
            <!-- <p>Wuhan University of Science and Technology</p>
            <p>Civil Engineering 2014.09 ~ 2018.06</p> -->
            <h4 class="disc">Postgraduate</h4>
            <div class="border">
                <p>Hunan University</p>
                <p>Bridge Engineering 2018.09 ~ 2021.06</p>
            </div>
        </div>
        <div>
            <h4>Navigation Site</h4>
            <p>
                Collect several common and useful websites about Front-End and
                display in card form for developer.
            </p>
            <ul>
                <li>
                    <a href="https://fenav.netlify.app/">Website deployed</a>
                </li>
                <li>
                    <a href="https://github.com/321paranoiawhy/fenav.io"
                        >GitHub Source Code</a
                    >
                </li>
                <li>
                    Features: TOC linked to exactly where the category is;
                    Support some different search methods include fuzzy search
                    and show results elegantly.
                </li>
            </ul>
        </div>
        <div>
            <h3>CERTIFICATE & AWARD</h3>
            <ul>
                <li>CET-4 489</li>
                <li>CET-6 469</li>
                <li>
                    Hubei Province College Students Mathematics Competition:
                    First Prize (Top 300)
                </li>
            </ul>
        </div>
        <div>
            <h4>Just Jazz Music Player</h4>
            <p>A simple music player using audio API</p>
            <ul>
                <li>
                    <a href="https://just-jazz.netlify.app/"
                        >Website deployed</a
                    >
                </li>
                <li>
                    <a
                        href="https://github.com/321paranoiawhy/Just-Jazz-Music-Player"
                        >GitHub Source Code</a
                    >
                </li>
                <li>
                    Features: 4 play modes; Music visualization using canvas and
                    support 11 visualization styles.
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import iconData from "/public/data/iconData.json";
export default {
    name: "testTemplate",
    setup() {
        return {};
    },
};
</script>

<style scoped lang="scss">
$margin-left: 20px;
div.grid {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 1rem;
    width: var(--A4-width);
    // height: var(--A4-height);
    // background-color: #e6e6e6;
    text-align: left;
    // border-box
    box-sizing: border-box;
    // 内边距
    padding: 20px;
    border: 1px solid;
    & ul {
        padding: 0 0 0 $margin-left;
        margin: 0;
    }
    & h3 {
        color: #e26921;
    }
    & h4.disc {
        position: relative;
        margin-left: $margin-left;
        &::before {
            position: absolute;
            content: " ";
            left: -23.2px;
            top: 25%;
            width: 6.4px;
            height: 6.4px;
            border: 1px solid #e26921;
            border-radius: 50%;
        }
    }
    & a,
    & a:hover,
    & a:visited,
    & a:link,
    & a:active {
        text-decoration: none;
        color: inherit;
    }
    // & p.disc {
    //     position: relative;
    //     margin-left: $margin-left;
    //     &::before {
    //         position: absolute;
    //         content: " ";
    //         left: -23.2px;
    //         top: calc(25% + 3.2px);
    //         width: 6.4px;
    //         height: 6.4px;
    //         border: 1px solid #e26921;
    //         border-radius: 50%;
    //     }
    // }
    & div.border {
        border-left: 1px solid #e26921;
        & p {
            margin-left: $margin-left;
        }
    }
}
</style>
