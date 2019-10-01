<template>
    <div class="info">
        <notifications position="bottom center"
                       :speed="500" />
        <input @keyup.enter="onSubmit" type="text" v-model="title" name="search" placeholder="Tell me your favourite song!"/>
        <SongList v-on:song-clicked="addSong" v-bind:tracks="tracks"/>
    </div>
</template>

<script>
    import ApiService from '../services/ApiService';
    import SongList from './SongList';

    export default {
        name: "RecommendSong",
        data() {
            return {
                title: "",
                tracks: [],
                cache: {}
            };
        },
        components: {SongList},
        methods: {
            async onSubmit(e) {
                e.preventDefault();
                if (!this.title) {
                    this.tracks = [];
                }
                else if (this.cache[this.title]) {
                    this.tracks = this.cache[this.title];
                }
                else {
                    const res = await ApiService.search(this.title.replace(" ", "+"));
                    if (res.data) {
                        this.cache[this.title] = res.data.tracks.items;
                        this.tracks = res.data.tracks.items;
                    }
                }
            },
            addSong({uri}) {
                this.tracks = [];
                this.title = "";
                this.$notify({
                    text: "Thanks for the recommendation!",
                    type: "success"
                });
                ApiService.postTrack(uri);
            }
        }
    }
</script>

<style scoped>
    input {
        font-size: 1.17em;
        border: 0;
        padding: 10px;
        border-radius: 3px;
        width: 250px;
    }

</style>