<!-- <template>
    <img
        v-for="(item, index) in sidebarImage"
        :key="index"
        :src="require('../assets/images/' + item.img_src + '.svg')"
        alt=""
    />
</template> -->

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
