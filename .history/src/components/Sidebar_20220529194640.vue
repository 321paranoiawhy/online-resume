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
        // 当前 base font-size
        let currentBase = 12;
        // Fn: 根据入参执行相应函数
        let Fn = (parameter) => {
            switch (parameter) {
                case "set":
                    break;
                // 撤销
                case "undo":
                    break;
                // 重做
                case "redo":
                    break;
                // 每次 --base +2
                case "textIncrease":
                    // 最大值: 24 (2*12)
                    if (currentBase === 24) {
                        return;
                    }
                    // 修改 root --base (同步修改 --font-size-small,--line-height-small)
                    document.documentElement.style.setProperty(
                        "--base",
                        `${currentBase + 2}`
                    );
                    // 更新 currentBase
                    currentBase += 2;
                    break;
                // 每次 --base -2
                case "textDecrease":
                    // 最小值: 8
                    if (currentBase === 8) {
                        return;
                    }
                    document.documentElement.style.setProperty(
                        "--base",
                        `${currentBase - 2}`
                    );
                    // 更新 currentBase
                    currentBase -= 2;
                    break;
                default:
                    break;
            }
        };
        return {
            sidebarImage,
            currentBase,
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
