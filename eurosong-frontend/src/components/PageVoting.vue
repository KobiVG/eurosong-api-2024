<template>
    <div>
        <h1>
            Page voting
        </h1>

        <div>
            <button @click="prevSong()" :disabled="activeSongIndex == 0">
                Prev song
            </button>

            <div>
                {{ songs[activeSongIndex].artist_name }} - Song: {{ songs[activeSongIndex].song_name }}
            </div>

            <button @click="nextSong()" :disabled="activeSongIndex == songs.length - 1">
                Next song
            </button>
        </div>

        <br>

        <div>
            <button @click="addVote(2)"> Add 2 votes </button>
            <button @click="addVote(4)"> Add 4 votes </button>
            <button @click="addVote(6)"> Add 6 votes </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageVoting',
        mounted() {
            this.fetchSongs();
        },
        data() {
            return {
                songs: [],
                activeSongIndex: 0
            }
        },
        methods: {
            // song methods
            fetchSongs() {
                fetch("http://localhost:3000/api/songs")
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        this.songs = data;
                    })
            },
            prevSong() {
                if (this.activeSongIndex > 0) {
                    this.activeSongIndex--;
                }
            },
            nextSong() {
                if (this.activeSongIndex < this.songs.length - 1) {
                    this.activeSongIndex++;
                }
            },
            // vote methods
            addVote(points) {
                console.log("Adding " + points);
            }
        }
    }
</script>