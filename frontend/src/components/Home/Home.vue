<template>
    <body>
        <div class="xl:mx-52 lg:mx-40 md:mx-32 sm:mx-10">
            <div class="px-8 py-4" data-aos="fade-right">
                <h1 class="mt-6 text-6xl">Rapid <span class="text-green">Air</span></h1>
                <h2 class="text-3xl text-gray-500">A better way to breath</h2>
                <div class="mt-6">
                    <router-link :to="{ name: 'About' }" class="btn-primary">About us</router-link>
                    <router-link :to="{ name: 'Store' }" class="ml-4 btn-secondary">Store</router-link>
                </div>
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
            <div class="md:grid-cols-2 mt-12 container grid grid-cols-1 max-w-6xl xl:mx-52 lg:mx-40 md:mx-32 sm:mx-10 mx-3 gap-4">
                <div class="text-left max-w-md" data-aos="fade-right">
                    <h2 class="text-blue text-xl">Banf Air</h2>
                    <p class="py-3">
                        What’s top of mind when you think about glacier mountains and sprawling green forest? For most, it’s a striking view, an untouched landscape, and deep breaths of pure, natural air. That’s what we pictured when we started thinking about serving the best air to people around the world.
                    </p>
                    <p class="pt-3">
                        We chose to bottle air from Banff because it's so memorable. People who visit this place instantly are drawn into the purity of the nature surrounding them. You breathe deeper and begin feeling healthier. Banff is more than just incredible mountain air, it's an emotional experience that we wanted to share with everyone.
                    </p>
                </div>

                <div class="text-left max-w-md" data-aos="fade-left">
                    <h2 class="text-blue text-xl">Lake Louise Air</h2>
                    <p class="py-3">
                        For nature lovers, Lake Louise is a favourite destination. A picture perfect emerald lake is crowned by white-tipped mountain ranges. The giant blue lake instantly pulls you in as it contrasts with lush green trees and white tipped Rocky Mountains. In the winter, it becomes a paradise of powdery white snow.
                    </p>
                    <p class="pt-3">
                        Lake Louise was a clear choice for us to bottle our Rocky Mountain air from. It's clean and fresh, but it also makes you feel on top of the world when you're surrounded by a crown of mountain tops. We want our customers to breathe in a sense of wonder along with a feeling of healthy air.
                    </p>
                </div>
            </div>
        </div>
        <div class="flex justify-center bg-blue-200 mt-10">
            <div class="md:grid-cols-2 mt-12 container grid grid-cols-1 max-w-6xl xl:mx-52 lg:mx-40 md:mx-32 sm:mx-10 mx-3 gap-4">
                <div class="text-left max-w-md" data-aos="fade-up">
                    <div class="flex">
                        <img class="block h-11 w-auto pr-2" src="@/assets/temp_map.png" alt="RapidAir">
                        <h2 class="text-blue text-xl">Check out our Edmonton location</h2>
                    </div>
                    <p class="py-3">
                        Rapid Air has locations with full-service stores in Edmonton
                    </p>
                    <a class="underline">
                        Map
                    </a>
                </div>
                <div class="text-left max-w-md" data-aos="fade-up">
                    <div class="flex">
                        <img class="block h-11 w-auto pr-2" src="@/assets/temp_map.png" alt="RapidAir">
                        <h2 class="text-blue text-xl">Check out our Calgary location</h2>
                    </div>
                    <p class="py-3">
                        Rapid Air has locations with full-service stores in Calgary
                    </p>
                    <a class="underline">
                        Map
                    </a>
                </div>
                <div class="text-left max-w-md pt-8" data-aos="fade-up">
                    <div class="flex">
                        <img class="block h-11 w-auto pr-2" src="@/assets/temp_map.png" alt="RapidAir">
                        <h2 class="text-blue text-xl">Check out our Lethbridge location</h2>
                    </div>
                    <p class="py-3">
                        Rapid Air has locations with full-service stores in Lethbridge
                    </p>
                    <a class="underline">
                        Map
                    </a>
                </div>
                <div class="text-left max-w-md pb-10 pt-8" data-aos="fade-up">
                    <div class="flex">
                        <img class="block h-11 w-auto pr-2" src="@/assets/temp_map.png" alt="RapidAir">
                        <h2 class="text-blue text-xl">Check out our Fort McMurray location</h2>
                    </div>
                    <p class="py-3">
                        Rapid Air has locations with full-service stores in Fort McMurray
                    </p>
                    <a class="underline">
                        Map
                    </a>
                </div>
            </div>
        </div>        
    </body>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            
        }
    }
}
</script>