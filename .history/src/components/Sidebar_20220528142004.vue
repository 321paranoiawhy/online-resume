<template>
    <div class="sidebar-flex-column"></div>
    <!-- <img
        v-for="(item, index) in sidebarImage"
        :key="index"
        :src="require('../assets/images/' + item.img_src + '.svg')"
        alt=""
    /> -->
    <img src="../assets/imges/IconoirUndo.svg" alt="" />
    <img src="../assets/imges/IconoirRedo.svg" alt="" />
</template>

<script>
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
</style>
