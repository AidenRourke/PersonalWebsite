<template>
    <div class="container">
        <notifications position="bottom center"
                       :speed="500"/>
        <RecommendSong v-on:refresh="getTracks"/>
        <SongRecommendations :tracks="tracks"/>
    </div>
</template>

<script>
    import SongRecommendations from "../components/SongRecommendations"
    import RecommendSong from "../components/RecommendSong"
    import ApiService from '../services/ApiService';

    export default {
        name: "Music",
        components: {SongRecommendations, RecommendSong},
        data() {
            return {
                tracks: []
            }
        },
        methods: {
            async getTracks() {
                const res = await ApiService.getPlaylist();
                if (res.data) {
                    this.tracks = res.data.items;
                }
            }
        },
        created() {
            this.getTracks();
        }
    }
</script>

<style lang="scss">
    .info {
        padding: 10px;
        flex: 1;
    }

    .container {
        display: flex;
        @media (max-width: 1280px) {
            flex-direction: column;
        }
    }
</style>