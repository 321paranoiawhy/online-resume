<template>
    <div class="sidebar-flex-column">
        <img
            v-for="(item, index) in sidebarImage"
            :key="index"
            :src="require('../assets/images/' + item.img_src + '.svg')"
            :alt="item.img_src"
            @click="Fn(item.function)"
        />
    </div>
</template>

<script>
// 引入图片 json 数据文件
import sidebarImage from "/public/data/sidebarImage.json";

export default {
    name: "Sidebar",
    setup() {
        // Fn: 根据入参执行相应函数
        let Fn = (parameter) => {
            switch (parameter) {
                case "set":
                    if (currentInputPage.value > 1) {
                        currentInputPage.value--;
                    }
                    break;
                case "undo":
                    if (currentInputPage.value > 2) {
                        currentInputPage.value -= 2;
                    }
                    break;
                case "redo":
                    if (currentInputPage.value < totalInputPage.value) {
                        currentInputPage.value++;
                    }
                    break;
                case "textIncrease":
                    let initialFontSize = "12px";
                    document.documentElement.style.setAttribute(
                        "--font-size-small",
                        "16px"
                    );
                    break;
                case "textDecrease":
                    break;
                default:
                    break;
            }
        };
        return {
            sidebarImage,
            Fn,
        };
    },
};
</script>

<style scoped lang="scss">
.sidebar-flex-column {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
}
</style>
