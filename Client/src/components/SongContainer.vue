<template>
    <div>
        <a :href="track.external_urls.spotify" target="_blank">
            <img :src="track.album.images[1].url"/>
            <p>{{track.name}}</p>
        </a>
        <i>{{track.artists[0].name}}</i>
    </div>
</template>

<script>
    export default {
        name: "SongContainer",
        props: ["track"]
    }
</script>

<style>
</style>
