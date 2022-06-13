<template></template>

<script>
// @ is an alias to /src
import Header from "";
import Introduction from "@/components/Introduction.vue";
import Footer from "@/components/Footer.vue";
import LeftInput from "@/components/LeftInput.vue";
import RightOutput from "@/components/RightOutput.vue";

export default {
    name: "HomeView",
    components: {
        LeftInput,
        RightOutput,
    },
};
</script>
