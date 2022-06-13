<template>
    <div class="grid">
        <div>
            <h3>SKILLS</h3>
            <h4>PROFESSIONAL</h4>
            <ul>
                <li>Basic: HTML / CSS / JavaScript</li>
                <li>Framework: Vue.js</li>
                <li>API: Canvas</li>
                <li>Tools: GitHub / Markdown / Netlify / Vuex</li>
            </ul>
        </div>
        <div>
            <h3>PROJECTS</h3>
            <h4>2048</h4>
            <p>Not just 2048 - Highly customizable.</p>
            <ul>
                <li>
                    <a href="https://not-just-2048-vue.netlify.app/"
                        >Website: https://not-just-2048-vue.netlify.app/</a
                    >
                </li>
                <li>
                    Features: each parameter is exposed to users and can be
                    highly customized.
                </li>
            </ul>
        </div>
        <div>
            <h3>EDUCATION</h3>
            <h4 class="disc">Undergraduate</h4>
            <div class="border">
                <p>Wuhan University of Science and Technology</p>
                <p>2014.09 ~ 2018.06</p>
            </div>
            <h4 class="disc">Postgraduate</h4>
            <div class="border">
                <p>Hunan University</p>
                <p>2018.09 ~ 2021.06</p>
            </div>
        </div>
        <div>
            <h4>Navigation Site</h4>
            <p>Collect several common and useful websites about Front-End.</p>
            <ul>
                <li>
                    <a href="https://fenav.netlify.app/"
                        >Website: https://fenav.netlify.app/</a
                    >
                </li>
                <li>Features: TOC imitating Vue.js official website.</li>
            </ul>
        </div>
        <div>
            <h3>CERTIFICATE & AWARD</h3>
            <ul>
                <li>CET-4 489 & CET-6 469</li>
                <li>
                    Hubei Province College Students Mathematics Competition:
                    First Prize (Top 300)
                </li>
            </ul>
        </div>
        <div>
            <h4>Just Jazz Music Player</h4>
            <p>A simple music player using audio API.</p>
            <ul>
                <li>
                    <a href="https://just-jazz.netlify.app/"
                        >Website: https://just-jazz.netlify.app/</a
                    >
                </li>
                <li>
                    Features: music visualization using canvas and support 11
                    visualization styles.
                </li>
            </ul>
        </div>
        <div>
            <h3>GitHub & Blog</h3>
            <ul>
                <li>
                    <a href="https://github.com/321paranoiawhy"
                        >https://github.com/321paranoiawhy</a
                    >
                </li>
                <li>
                    <a href="https://321paranoiawhy.github.io/"
                        >https://321paranoiawhy.github.io/</a
                    >
                </li>
            </ul>
        </div>
        <div>
            <h4>Online Resume</h4>
            <p>A online resume maker - WYSIWYG.</p>
            <ul>
                <li>
                    <a href="https://just-jazz.netlify.app/">Website</a>
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
export default {
    name: "testTemplate",
    setup() {
        return {};
    },
};
</script>

<style scoped lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap");
$margin-left: 20px;
div.grid {
    display: grid;
    grid-template-columns: 0.618fr 1fr;
    // grid-template-rows: auto;
    column-gap: 1rem;
    width: var(--A4-width);
    height: var(--A4-height);
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
        list-style-type: circle;
        font-family: Cambria;
        & li {
            & img {
                width: 24px;
                height: 24px;
                vertical-align: middle;
                margin-right: 5px;
            }
            height: 2rem;
            line-height: 2rem;
        }
    }
    & ul li::marker {
        color: #e26921;
    }
    & p {
        font-family: Cambria;
    }
    & h3 {
        color: #e26921;
        font-family: didot;
    }
    & h4.disc {
        position: relative;
        margin-left: $margin-left;
        &::before {
            position: absolute;
            content: " ";
            left: -23.2px;
            top: 25%;
            width: 4.4px;
            height: 4.4px;
            border: 1px solid #e26921;
            border-radius: 50%;
        }
    }
    & a {
        text-decoration: green wavy underline;
        color: inherit;
        // font-family: Cambria;
        // font-family: "Cormorant Garamond", serif;
    }
    & div.border {
        border-left: 1px solid #e26921;
        & p {
            margin-left: $margin-left;
        }
    }
}
</style>
