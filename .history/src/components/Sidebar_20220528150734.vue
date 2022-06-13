<template>
    <div class="sidebar-flex-column">
        <img
            v-for="(item, index) in sidebarImage"
            :key="index"
            :src="require('../assets/images/' + item.img_src + '.svg')"
            alt=""
        />
    </div>
</template>

<script>
// 引入图片 json 数据文件
import sidebarImage from "/public/data/sidebarImage.json";

export default {
    name: "Sidebar",
    setup() {
        return {
            sidebarImage,
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
