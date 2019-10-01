<template>
    <div class="container">
        <RecommendSong/>
        <SongRecommendations/>
    </div>
</template>

<script>
    import SongRecommendations from "../components/SongRecommendations"
    import RecommendSong from "../components/RecommendSong"

    export default {
        name: "Music",
        components: {SongRecommendations, RecommendSong}

    }
</script>

<style lang="scss">
    .info {
        padding: 10px;
        width: 500px;
    }

    .container {
        display: flex;
        @media (max-width: 1280px) {
            flex-direction: column;
        }
    }
</style>