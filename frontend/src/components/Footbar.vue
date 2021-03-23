<template>
    <div class="bg-blue-superdark mt-52" data-aos="fade-in">
        <div class="container pb-24 max-w-full">
            <div class="xl:mx-52 lg:mx-40 md:mx-32 sm:mx-10 mx-5 grid lg:grid-cols-6 grid-cols-4">
                <router-link :to="{ name: 'About' }" class="white-subheading underline pt-2 mx-2">About us</router-link>
                <router-link :to="{ name: 'Contact' }" class="white-subheading underline pt-2 ml-none">Contact us</router-link>
            </div>
            <hr class="border-green border-2 mt-2 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-lg mx-auto"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
           open: false, 
        }
    }
}
</script>