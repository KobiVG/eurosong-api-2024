<template>
    <div>
        <h1>
            Page voting
        </h1>

        <div>
            <button @click="prevSong()">
                Prev song
            </button>

            <div>
                {{ songs[activeSongIndex].artist_name }} - Song: {{ songs[activeSongIndex].song_name }}
            </div>

            <button @click="nextSong()">
                Next song
            </button>
        </div>

        <br>

        <div>
            <button> Add 2 votes </button>
            <button> Add 4 votes </button>
            <button> Add 6 votes </button>
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
            }
        }
    }
</script>