<template>
    <div
        class="sidebar-flex-column"
        v-for="(item, index) in sidebarImage"
        :key="index"
    >
        {{ item.img_src }}
        <img
            :src="require('../assets/images/' + item.img_src + '.svg')"
            alt=""
        />
        <!-- <img src="../assets/imges/IconoirSettings.svg" alt="" />
        <img src="../assets/imges/IconoirUndo.svg" alt="" />
        <img src="../assets/imges/IconoirRedo.svg" alt="" /> -->
    </div>
</template>

<script>
// 引入图片 json 数据文件
import sidebarImage from "/public/data/sidebarImage.json";

export default {
    name: "Sidebar",
    data() {
        return {
            sidebarImage: sidebarImage,
        };
    },
    // setup() {},
};
</script>

<style scoped lang="scss">
.sidebar-flex-column {
    display: flex;
    flex-direction: column;
}
img {
    width: 32px;
    height: 32px;
}
</style>
