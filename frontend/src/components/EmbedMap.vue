<template>
    <embed
        :src="mapSrc"
        class="w-96 h-96 rounded-lg"
        frameborder="0"
        allowfullscreen="" 
        aria-hidden="false" 
        tabindex="0"
    />
</template>

<script>
export default {
    name: 'EmbedMap',
    props: ['mapSrc'],
}
</script>