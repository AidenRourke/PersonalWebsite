<template>
    <div v-if="song">
        <h3 v-if="current">Checkout what I'm listening to right now!</h3>
        <h3 v-else>Checkout one of my favourite songs this
            <Dropdown :options="arrayOfObjects" :selected="timerange" v-on:updateOption="updateTimerange"/>
            !
        </h3>
        <a :href="song.external_urls.spotify" target="_blank">
            <img :src="song.album.images[1].url"/>
            <p>{{song.name}}</p>
        </a>
        <i>{{song.artists[0].name}}</i>
    </div>
</template>

<script>
    import Dropdown from './Dropdown';
    import axios from "axios";

    export default {
        name: "SongInformation",
        components: {Dropdown},
        data() {
            return {
                song: undefined,
                current: false,
                evtSource: undefined,
                arrayOfObjects: [
                    {
                        name: "life",
                        value: "long_term"
                    },
                    {
                        name: "year",
                        value: "medium_term"
                    },
                    {
                        name: "month",
                        value: "short_term"
                    }
                ],
                timerange: {
                    name: 'month',
                    value: "short_term"
                },
            }
        },
        methods: {
            async updateTimerange(timerange) {
                this.timerange = timerange;
                await this.getTopTrack();
            },
            async getTopTrack() {
                const res = await axios.get(`https://whispering-tundra-82613.herokuapp.com/top_track?time_range=${this.timerange.value}`);
                if (res.data) {
                    this.song = res.data;
                    this.current = false;
                }
            },
        },
        async created() {
            try {
                // Listen for a change in the current song for the server
                this.evtSource = new EventSource(`https://whispering-tundra-82613.herokuapp.com/stream`);
                this.evtSource.addEventListener('message', function (e) {
                    const res = JSON.parse(e.data);
                    if (res.name) {
                        this.song = res;
                        if (!this.current) this.current = true;
                    } else {
                        this.getTopTrack()
                    }
                    this.$emit('loaded')
                }.bind(this), false);
            } catch (e) {
                console.log("can't connect")
            }
        },
        destroyed() {
            this.evtSource.close();
        }
    }
</script>
