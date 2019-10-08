<template>
    <div class="info">
        <h3 style="margin: 0; padding: 9px">
            Checkout someone else's recommendation!
        </h3>
        <SongList v-on:song-clicked="open" v-bind:tracks="tracks"/>
        <a target="_blank" href="https://open.spotify.com/playlist/7tEXf5AmNnSC169cCsKD5j">View on Spotify</a>
    </div>
</template>

<script>
    import SongList from './SongList';

    export default {
        name: "SongRecommendations",
        components: {SongList},
        props: ["tracks"],
        methods: {
            open({url}) {
                window.open(url, '_blank')
            }
        }
    }
</script>

<style scoped>
</style>