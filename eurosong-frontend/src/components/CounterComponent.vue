<template>
    <div>
        <h2>
            {{ number }}
        </h2>
        <button @click="PlusOne()" v-if="this.number < 10">
            +
        </button>
        <button @click="MinusOne()" v-if="this.number > 0">
            -
        </button>
    </div>
</template>


<script>
    export default {
        name: 'CounterComponent',
        props: ["initialValue"],
        mounted () {
            this.number = parseInt(this.initialValue)
        },
        data() {
            return {
                number: 1
            }
        },
        methods: {
            PlusOne() {
                if (this.number < 10) {
                    this.number++;
                }
                
            },
            MinusOne() {
                if (this.number > 0) {
                    this.number--;
                }
            }
        }
    }
</script>