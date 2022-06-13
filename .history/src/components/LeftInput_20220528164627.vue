<template>
    <div class="left-input-flex-column">
        <p>
            Current Page : {{ currentInputPage }} Total Pages :
            {{ totalInputPage }}
        </p>
        <p>Ln {{ currentLine }} Col {{ currentColumn }}</p>
        <div>
            <img
                v-for="(item, index) in leftInputImage"
                :key="index"
                :src="require('../assets/images/' + item.img_src + '.svg')"
                alt=""
            />
        </div>
        <div class="flex">
            <LineNumbers></LineNumbers>
            <textarea spellcheck="true" class="left-textarea"></textarea>
        </div>
    </div>
</template>

<script>
import leftInputImage from "/public/data/leftInputImage.json";
import LineNumbers from "@/components/LineNumbers.vue";

export default {
    name: "LeftInput",
    components: {
        LineNumbers,
    },
    setup() {
        let currentInputPage = 1;
        let totalInputPage = 1;
        return {
            currentInputPage,
            totalInputPage,
            leftInputImage,
        };
    },
};
</script>

<style scoped lang="scss">
.left-input-flex-column {
    display: flex;
    flex-direction: column;
    & div.flex {
        display: flex;
    }
}
</style>
