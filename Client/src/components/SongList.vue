<template>
    <div class="is-waiting" v-bind:class="{'is-complete':loaded}">
        <ul>
            <li v-for="song in tracks">
            <span v-on:click="handleClick(song.uri, song.album.external_urls.spotify)">
                <img class="playlist_item" :src="song.album.images[2].url"/>
                <span class="playlist_item">{{ song.name }} ({{ song.album.artists[0].name }})</span>
            </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SongList",
        props: ["tracks"],
        data() {
            return {
                loaded: false
            }
        },
        methods: {
            handleClick(uri, url) {
                this.$emit('song-clicked', {url, uri});
            }
        },
        beforeUpdate() {
            this.loaded = this.tracks.length > 0;
        }
    }
</script>

<style scoped lang="scss">
    .is-waiting {
        max-height: 0;
        overflow: hidden;
    }

    .is-complete {
        max-height: 500px;
        transition: max-height 0.75s linear;
    }

    li {
        text-align: left;
        :hover {
            color: gray;
        }
        cursor: pointer;
    }

    ul {
        padding: 0;
    }

    a {
        color: inherit;
    }

    .playlist_item {
        margin: 5px;
        vertical-align: middle;
        display: inline-block;
    }
</style>