<template>
    <div class="bg-red-200 border-4 border-red-500 rounded-lg m-10" v-if="show" data-aos="fade-in">
        <h1 class="text-red-500 p-5 text-lg font-bold">Error {{ error.statusCode }}: {{ error.message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'ErrorDisplay',
    props: {
        error: Object,
        show: Boolean
    },
    data() {
        return {

        }
    }
}
</script>