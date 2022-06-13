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
                // 上一页
                case "set":
                    // currentInputPage 不大于 1, 不予处理
                    // currentInputPage 大于 1, 则 --
                    if (currentInputPage.value > 1) {
                        currentInputPage.value--;
                    }
                    // console.log(currentInputPage.value);
                    break;
                // 前两页
                case "undo":
                    // currentInputPage 不大于 2, 不予处理
                    // currentInputPage 大于 2, 则 -=2
                    if (currentInputPage.value > 2) {
                        currentInputPage.value -= 2;
                    }
                    // console.log(currentInputPage.value);
                    break;
                // 下一页
                case "redo":
                    // currentInputPage 不小于 totalInputPage, 不予处理
                    // currentInputPage 小于 totalInputPage, 则 ++
                    if (currentInputPage.value < totalInputPage.value) {
                        currentInputPage.value++;
                    }
                    // console.log(currentInputPage.value);
                    break;
                // 后两页
                case "nextDoublePage":
                    // currentInputPage 不小于 totalInputPage - 1, 不予处理
                    // currentInputPage 小于 totalInputPage - 1, 则 +=2
                    if (currentInputPage.value < totalInputPage.value - 1) {
                        currentInputPage.value += 2;
                    }
                    // console.log(currentInputPage.value);
                    break;
                case "download":
                    // TODO Blob 对象
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
