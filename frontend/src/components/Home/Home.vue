<template>
    <body>
        <div class="xl:mx-52 sm:mx-10">
            <div class="px-8 py-4 lg:flex justify-between">
                <div  data-aos="fade-right">
                    <h1 class="mt-6 text-6xl">Rapid<span class="text-green">Air</span></h1>
                    <h2 class="text-3xl text-gray-500">A better way to breath</h2>
                    <div class="mt-6">
                        <router-link :to="{ name: 'About' }" class="btn-primary">About us</router-link>
                        <router-link :to="{ name: 'Store' }" class="ml-4 btn-secondary">Store</router-link>
                    </div>
                </div>
                <lazy-image :name="'mountain'" :classes="'object-contain h-96 lg:pt-0 pt-4'" data-aos="fade"/>
            </div>
        </div>
        <div class="full-width-container bg-blue-superdark" data-aos="fade-in" data-aos-duration="600" data-aos-delay="100">
            <hr class="border-green border-4 mt-8"/>
            <h1 class="text-3xl text-white pt-6">We are committed to delivering the best air possible.</h1>
            <hr class="border-green border-3 mt-8 max-w-min px-10 mx-auto"/>
            <h2 class="white-subheading">Remember the days when people laughed off bottled water?</h2>
            <h2 class="white-subheading">“It comes out of the tap, why would I want a bottle?”</h2>
            <h2 class="white-subheading pb-8">The truth is we have begun to appreciate the clean, pure and refreshing taste of quality water.</h2>
        </div>
        <div class="full-width-container bg-blue shadow-lg" data-aos="slide-up" data-aos-delay="50">
            <h1 class="text-white text-2xl pt-4 pb-16 font-semibold">Air is going the same direction.</h1>
        </div>

        <div class="full-width-container pt-32">
            <div data-aos="fade-up" data-aos-delay="150">
                <h1 class="text-2xl">Where do we get our air?</h1>
                <p class="mx-auto max-w-6xl">The Rocky Mountains of Canada are a protected UNESCO World Heritage Site. Here is where Rapid Air captures and bottles some the highest quality air in the world. We want our customers to experience breathing the way it was intended. Free of city pollution, fragrances and waste; our Banff and Lake Louise lines of clean air are unmatchable in quality.</p>
            </div>
            <div class="flex flex-wrap justify-center gap-8 pt-10">
                <div class="text-left max-w-md">
                    <h2 class="text-blue text-xl" data-aos="fade-right">Banf Air</h2>
                    <p class="py-3" data-aos="fade-right">
                        What’s top of mind when you think about glacier mountains and sprawling green forest? For most, it’s a striking view, an untouched landscape, and deep breaths of pure, natural air. That’s what we pictured when we started thinking about serving the best air to people around the world.
                    </p>
                    <p class="pt-3" data-aos="fade-right">
                        We chose to bottle air from Banff because it's so memorable. People who visit this place instantly are drawn into the purity of the nature surrounding them. You breathe deeper and begin feeling healthier. Banff is more than just incredible mountain air, it's an emotional experience that we wanted to share with everyone.
                    </p>
                </div>

                <div class="text-left max-w-md">
                    <h2 class="text-blue text-xl" data-aos="fade-left">Lake Louise Air</h2>
                    <p class="py-3" data-aos="fade-left">
                        For nature lovers, Lake Louise is a favourite destination. A picture perfect emerald lake is crowned by white-tipped mountain ranges. The giant blue lake instantly pulls you in as it contrasts with lush green trees and white tipped Rocky Mountains. In the winter, it becomes a paradise of powdery white snow.
                    </p>
                    <p class="pt-3" data-aos="fade-left">
                        Lake Louise was a clear choice for us to bottle our Rocky Mountain air from. It's clean and fresh, but it also makes you feel on top of the world when you're surrounded by a crown of mountain tops. We want our customers to breathe in a sense of wonder along with a feeling of healthy air.
                    </p>
                </div>
            </div>
        </div>
        <div class="flex bg-blue-200 mt-10 py-5">
            <div class="flex flex-wrap xl:mx-52 lg:mx-40 md:mx-32 sm:mx-10 mx-3">
                <div class="xl:max-w-xl max-w-md xl:mr-3 mr-6" data-aos="fade-up">
                    <h1 class="text-3xl font-semibold">Check out one of our locations</h1>
                    <h2 class="text-xl pb-5 pt-2">Rapid Air has 4 locations with full-service stores in Calgary, Edmonton, Lethbridge and Fort McMurray.</h2>
                </div>
                <store-locations class="xl:max-w-xl max-w-md"/>
            </div>
        </div>        
    </body>
</template>

<script>
import LazyImage from '@/components/LazyImage'
import StoreLocations from '@/components/Home/StoreLocations'

export default {
    name: 'Home',
    components: {
        LazyImage,
        StoreLocations
    },
    data() {
        return {
            
        }
    }
}
</script>