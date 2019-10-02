<template>
    <div class="is-waiting" v-bind:class="{'is-complete':loaded}">
        <div v-if="loaded">
            <div v-if="currentTrack">
                <h3>Checkout what I'm listening to right now!</h3>
                <SongContainer v-bind:track="currentTrack"/>
            </div>
            <div v-else-if="topTrack">
                <h3>Checkout one of my favourite songs this
                    <Dropdown :options="arrayOfObjects" :selected="timerange" v-on:updateOption="updateTimerange"/>!
                </h3>
                <SongContainer v-bind:track="topTrack"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Dropdown from '../components/Dropdown';
    import ApiService from '../services/ApiService';
    import SongContainer from '../components/SongContainer';

    let evtSource;

    export default {
        name: "Home",
        components: {Dropdown, SongContainer},
        data() {
            return {
                currentTrack: undefined,
                topTrack: undefined,
                loaded: false,
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
                const res = await ApiService.getTopTrack(this.timerange.value);
                if (res.data) {
                    this.topTrack = res.data;
                }
            },
        },
        async created() {
            // Get and store top track
            this.getTopTrack();
            try {
                // Listen for a change in the current song for the server
                evtSource = ApiService.startSSE();
                evtSource.addEventListener('message', function (e) {
                    const res = JSON.parse(e.data);
                    if (res.name) {
                        this.currentTrack = res;
                    } else {
                        this.currentTrack = undefined;
                    }
                    // Loaded is important to avoid glitchy movements
                    if (!this.loaded) {
                        console.log("loaded");
                        this.loaded = true;
                    }
                }.bind(this), false);
            } catch (e) {
                console.log("can't connect")
            }
        },
        destroyed() {
            evtSource.close();
        }
    }
</script>

<style>
    .is-waiting {
        max-height: 0;
        width: 600px;
        overflow: hidden;
    }

    .is-complete {
        max-height: 500px;
        transition: max-height 0.75s linear;
    }
</style>
