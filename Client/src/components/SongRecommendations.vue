<template>
    <div class="info">
        <h3 style="margin: 0; padding: 10px">
            Checkout other peoples recommendations!
        </h3>
        <SongList v-on:song-clicked="open" v-bind:tracks="tracks"/>
        <h4>View all on Spotify</h4>
    </div>
</template>

<script>
    import ApiService from '../services/ApiService';
    import SongList from './SongList';

    export default {
        name: "SongRecommendations",
        components: {SongList},
        data() {
            return {
                tracks: [],
            };
        },
        methods: {
            open({url}) {
                window.open(url, '_blank')
            }
        },
        async created() {
            const res = await ApiService.getPlaylist();
            if (res.data) {
                this.tracks = res.data.items;
            }
        }
    }
</script>

<style scoped>
</style>