<template>
    <body>
        <v-lazy-image :src="require(`@/assets/${name}.jpg`)" :src-placeholder="require(`@/assets/lowres/${name}.jpg`)" :alt="name" :class="classes"/>
    </body>
</template>

<script>
import VLazyImage from "v-lazy-image"
export default {
    name: 'LazyImage',
    props: {
        name: String,
        classes: String
    },
    components: {
        VLazyImage
    },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.v-lazy-image {
    filter: blur(10px);
    transition: filter 0.7s;
}
.v-lazy-image-loaded {
    filter: blur(0);
}
</style>