<template>
    <img :src="require('../assets/images/' + item.img_src + '.svg')" alt="" />
</template>

<script>
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
