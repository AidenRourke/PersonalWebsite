<template>
    <div class="music" v-bind:class="{'is-complete':loaded}">
        <SongInformation v-on:loaded="toggleLoaded"/>
    </div>
</template>

<script>
    import SongInformation from "../components/SongInformation"

    export default {
        name: "Music",
        components: {SongInformation},
        data() {
            return {
                loaded: false,
            }
        },
        methods: {
            toggleLoaded() {
                this.loaded = true
            }
        }
    }
</script>

<style>
    .music {
        height: 0;
        opacity: 0;
        transition: opacity 1s, height 0.5s linear;
    }

    .is-complete {
        height: 445px;
        opacity: 1;
    }
</style>