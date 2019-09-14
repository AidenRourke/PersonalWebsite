<template>
    <a :href="link" target="_blank" rel="noopener">
        <img height="25" width="25" class="svg"
             :src="svgLink"/>
    </a>
</template>

<script>
    export default {
        name: "SvgLink",
        props: ["svgLink", "link"]
    }
</script>

<style scoped>
    .svg:hover {
        filter: invert(.5);
        transition: 0.2s filter;
    }
</style>