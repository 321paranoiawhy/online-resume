<template>
    <div class="grid">
        <div>
            <h3 class="personalInformation">Personal Information</h3>
            <ul>
                <li class="name">Name: Huayi Wen</li>
                <li class="age">Age: 26</li>
                <li class="experience">Experience: 1 year</li>
                <li class="email">Email: paranoiawhy@gmail.com</li>
                <li class="wechat">Wechat: why511686</li>
                <li class="phone">Phone: 17375774285</li>
            </ul>
        </div>
        <div>
            <h3 class="selfEvaluation">Self Evaluation</h3>
            <ul class="selfEvaluation">
                <li>Excellent Mathematics</li>
                <li>Code carefully and cautiously</li>
                <li>Devoted to Front-End and learn quickly</li>
            </ul>
        </div>
        <div>
            <h3 class="skills">SKILLS</h3>
            <ul>
                <li class="basic">Basic: HTML / CSS / JavaScript</li>
                <li class="framework">Framework: Vue.js</li>
                <li class="api">API: Audio / Canvas</li>
                <li class="tool">
                    Tool: Vue CLI / Vuex / npm / Git / Markdown / Netlify
                </li>
            </ul>
        </div>
        <div class="project">
            <h3>PROJECTS</h3>
            <h4 class="project">2048</h4>
            <!-- em dash: https://www.toptal.com/designers/htmlarrows/punctuation/em-dash/ -->
            <p class="summary">Not just 2048 &#8212; Highly customizable.</p>
            <ul>
                <li>
                    <a
                        class="website"
                        href="https://not-just-2048-vue.netlify.app/"
                        >Website: https://not-just-2048-vue.netlify.app/</a
                    >
                </li>
                <li class="features">
                    Features: each parameter is exposed to users and can be
                    highly customized.
                </li>
            </ul>
        </div>
        <div>
            <h3>EDUCATION</h3>
            <h4 class="disc">Undergraduate</h4>
            <div class="border">
                <p class="undergraduate-school">
                    Wuhan University of Science and Technology
                </p>
                <p class="undergraduate-time">2014.09 ~ 2018.06</p>
            </div>
            <h4 class="disc">Postgraduate</h4>
            <div class="border">
                <p class="postgraduate-school">Hunan University</p>
                <p class="postgraduate-time">2018.09 ~ 2021.06</p>
            </div>
        </div>
        <div class="project">
            <h4 class="project">Navigation Site</h4>
            <p class="summary">
                Collect several common and useful websites about Front-End.
            </p>
            <ul>
                <li>
                    <a class="website" href="https://fenav.netlify.app/"
                        >Website: https://fenav.netlify.app/</a
                    >
                </li>
                <li class="features">
                    Features: TOC imitating Vue.js official website.
                </li>
            </ul>
        </div>
        <div>
            <h3>CERTIFICATES & AWARDS</h3>
            <ul class="award">
                <li>College English Test - Level 4, Score: 489</li>
                <li>College English Test - Level 6, Score: 469</li>
                <li>
                    Hubei Province College Students Mathematics Competition:
                    First Prize (Top 300)
                </li>
            </ul>
        </div>
        <div class="project">
            <h4 class="project">Just Jazz Music Player</h4>
            <p class="summary">Simple music player using audio API.</p>
            <ul>
                <li>
                    <a class="website" href="https://just-jazz.netlify.app/"
                        >Website: https://just-jazz.netlify.app/</a
                    >
                </li>
                <li class="features">
                    Features: music visualization using canvas and support 11
                    visualization styles.
                </li>
            </ul>
        </div>
        <div>
            <h3>GitHub & Blog</h3>
            <ul>
                <li>
                    <a class="github" href="https://github.com/321paranoiawhy"
                        >https://github.com/321paranoiawhy</a
                    >
                </li>
                <li>
                    <a class="blog" href="https://321paranoiawhy.github.io/"
                        >https://321paranoiawhy.github.io/</a
                    >
                </li>
            </ul>
        </div>
        <div class="project">
            <h4 class="project">Online Resume</h4>
            <p class="summary">Online resume maker - WYSIWYG.</p>
            <ul>
                <li>
                    <a class="website" href="https://just-jazz.netlify.app/"
                        >Website: https://just-jazz.netlify.app/</a
                    >
                </li>
                <li class="features">
                    Features: make resume online like markdown and download as
                    pdf.
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
$margin-left: 20px;
div.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 1rem;
    width: var(--A4-width);
    height: var(--A4-height);
    text-align: left;
    padding: 20px;
    // border-box
    box-sizing: border-box;
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
    & p {
        font-family: Cambria;
        // margin: auto;
    }
    & h3 {
        color: #e26921;
        font-family: didot;
        width: fit-content;
        border-bottom: 1px solid;
        margin: 0 0 10px;
    }
    & h4 {
        font-family: didot;
        margin: 10px 0;
    }
    & h4.disc {
        position: relative;
        margin-left: $margin-left;
        &::before {
            position: absolute;
            content: " ";
            left: -23.2px;
            top: 40%;
            width: 4.4px;
            height: 4.4px;
            border: 1px solid;
            border-radius: 50%;
        }
    }
    & a {
        text-decoration: green wavy underline;
        color: inherit;
    }
    & div.border {
        border-left: 1px solid #e26921;
        & p {
            margin-left: $margin-left;
        }
    }
}

// // 媒体查询 print
// @media print {
//     div.grid {
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         column-gap: 1rem;
//         width: 297mm;
//         height: 420mm;
//         // background-color: #e6e6e6;
//         text-align: left;
//         // border-box
//         box-sizing: border-box;
//         // 内边距
//         padding: 20px;
//         border: 1px solid;
//     }
//     ul {
//         padding: 0 0 0 20px;
//         margin: 0;
//         list-style-type: circle;
//         font-family: Cambria;
//     }
//     ul li {
//         height: 2rem;
//         line-height: 2rem;
//     }
//     ul li img {
//         width: 24px;
//         height: 24px;
//         vertical-align: middle;
//         margin-right: 5px;
//     }
//     ul li::marker {
//         color: #e26921;
//     }
//     p {
//         font-family: Cambria;
//     }
//     h3 {
//         color: #e26921;
//         font-family: didot;
//         width: fit-content;
//         border-bottom: 1px solid;
//         margin: 10px 0;
//     }
//     h4 {
//         font-family: didot;
//         margin: 10px 0;
//     }
//     h4.disc {
//         position: relative;
//         margin-left: 20px;
//     }
//     h4.disc::before {
//         position: absolute;
//         content: " ";
//         left: -23.2px;
//         top: 40%;
//         width: 4.4px;
//         height: 4.4px;
//         border: 1px solid #e26921;
//         border-radius: 50%;
//     }
//     a {
//         text-decoration: green wavy underline;
//         color: inherit;
//     }
//     div.border {
//         border-left: 1px solid #e26921;
//     }
//     div.border p {
//         margin-left: 20px;
//     }
// }
</style>
