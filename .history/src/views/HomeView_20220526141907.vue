<template></template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Introduction from "@/components/Introduction.vue";
import LeftInput from "@/components/LeftInput.vue";
import RightOutput from "@/components/RightOutput.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "HomeView",
    components: {
        Header,
        Introduction,
        LeftInput,
        RightOutput,
        Footer,
    },
};
</script>
