<template>
    <div class="is-waiting" v-bind:class="{'is-complete':loaded}">
        <ul>
            <li v-for="song in tracks">
            <div class="list-item" v-on:click="handleClick(song.uri, song.album.external_urls.spotify)">
                <img class="playlist-item" :src="song.album.images[2].url"/>
                <div class="playlist-item">
                    <span :title="song.name" class="song-name">{{ song.name }} </span>
                    <span>({{ song.album.artists[0].name }})</span>
                </div>
            </div>
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

    .list-item {
        white-space: nowrap;
        width: 500px;
        margin: auto;
    }

    .song-name {
        display: block;
        max-width: 400px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .playlist-item {
        margin: 5px;
        vertical-align: middle;
        display: inline-block;
    }
</style>