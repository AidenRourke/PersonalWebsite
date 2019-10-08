<template>
    <div class="info">
        <input class="input" @keyup.enter="onSubmit" type="text" v-model="title" name="search"
               placeholder="Recommend me a song!"/>
        <input class="submit" type="submit" value="Search" @click="onSubmit"/>
        <h4 class="error" v-if="empty">No songs found</h4>
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
                empty: false,
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
                this.empty = this.tracks.length === 0 && this.title;
            },
            async addSong({uri}) {
                this.tracks = [];
                this.title = "";
                this.$notify({
                    text: "Thanks for the recommendation!",
                    type: "success"
                });
                await ApiService.postTrack(uri);
                this.$emit('refresh')
            }
        }
    }
</script>

<style scoped lang="scss">
    .input {
        width: 300px;
        text-align: center;
        color: gray;
        margin: 0 5px;
        font-size: 1.17em;
        display: inline-block;
        border: 1px solid transparent;
        border-radius: 3px;
        padding: 10px;
    }

    .submit {
        color: white;
        cursor: pointer;
        background-color: #68CD86;
        font-size: 1.17em;
        display: inline-block;
        border: 1px solid transparent;
        border-radius: 3px;
        padding: 10px;
    }

    .submit:hover {
        opacity: 0.7;
    }

    .input:focus {
        text-align: left;
        color: inherit;
    }

    .error {
        color: red;
    }

</style>