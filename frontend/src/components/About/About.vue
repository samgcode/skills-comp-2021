<template>
    <body>
        <div class="flex justify-center">
            <div class="text-center pt-8" data-aos="fade-down">
                <h1 class="text-4xl text-black font-semibold">About RapidAir</h1>
                <h2 class="text-2xl text-gray-400">RapidAir, a better way to breathe</h2>
            </div>
        </div>
        <div class="w-full bg-blue-200 mt-32 text-center">
            <div class="flex flex-wrap flex-row justify-center pt-10 gap-6 pb-10">
                <div class="flex flex-col">
                    <div class="flex-1 justify-center" data-aos="fade-left" data-aos-delay="100">
                        <lazy-image :name="'oil_drill_field_lg'" :classes="'object-cover rounded-full justify-center h-52 w-52 mx-auto'"/>
                        <h1 class="text-3xl pt-3">Rapid for work</h1>
                        <p class="max-w-sm pt-2">There’s no vacation from being a leader and provider for your family. 
                                                    Late nights and hard work are a way of life, so what are you doing to stay healthy? 
                                                    The revitalization of fresh air is remarkably effective.</p>
                        <p class="max-w-sm pt-3">Having Rapid Air is like giving your mind and body a shot of nature.</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex-1 justify-center" data-aos="fade-up" data-aos-delay="100">
                        <lazy-image :name="'person_writing'" :classes="'object-cover rounded-full justify-center h-52 w-52 mx-auto'"/>
                        <h1 class="text-3xl pt-3">Rapid for students</h1>
                        <p class="max-w-sm pt-2">Excelling at studies requires a focused mind and the energy to complete your studies. 
                                                    But the stress of timelines and commitments quickly drains your body, and performance suffers.</p>
                        <p class="max-w-sm pt-3">Your body will give you all the strength you need if you feed it the right ingredients. 
                                                    Quality air is one ingredient you shouldn’t overlook.</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex-1 justify-center" data-aos="fade-right" data-aos-delay="100">
                        <lazy-image :name="'child'" :classes="'object-cover rounded-full justify-center h-52 w-52 mx-auto'"/>
                        <h1 class="text-3xl pt-3">Rapid for children</h1>
                        <p class="max-w-sm pt-2">Developing bodies need ideal ingredients to grow optimally. 
                                                    Clean, healthy lungs are what you want for active children to reach their potential.</p>
                        <p class="max-w-sm pt-3">Rapid Air is family safe, easy to use and the design of our cans makes it easy to reuse as often as you need.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap justify-center pl-5 pt-20">
            <div class="flex-col pr-10">
                <h1 class="text-4xl" data-aos="fade-up">Why we started RapidAir</h1>
                <p class="max-w-2xl text-xl pt-3" data-aos="fade-up">We're entrepreneurs, nature lovers and people with ambition. There was a demand in the marketplace being met by poor quality products.</p>
                <p class="max-w-2xl text-xl pt-4" data-aos="fade-up">Existing products used canned and bagged air and wasted so much. 
                    We built innovative technology that gives the customer far more air and far more value. 
                    The competition was collecting normal air that didn't offer a unique experience. 
                    So we began capturing the freshest mountain air to give the best quality breathing. 
                    Pricing made buying air difficult to afford. 
                    Our technology makes bottling air and delivering it cheaper than it's ever been.</p>
            </div>
            <lazy-image :name="'glass_bottles_line'" :classes="'sm:h-96 2xl:pt-0 pt-5'" data-aos="slide-left" data-aos-delay="200"/>
        </div>
        <h1 data-aos="slide-up" class="text-center text-xl font-normal 2xl:px-32 lg:px-20 px-5 pt-14">So why did we start RapidAir? Because we think this product matters, 
                                                                                        and we knew there was a better way of giving it to people. 
                                                                                        We're committed to delivering the best, 
                                                                                        and our customers are getting an unsurpassed product as a result.</h1>
        <div class="full-width-container bg-blue-superdark mt-36" data-aos="fade-in" data-aos-duration="600" data-aos-delay="100">
            <hr class="border-primary border-4 mt-8"/>
            <div class="w-full text-center text-white">
                <div class="flex flex-wrap flex-row justify-center pt-10 gap-10 pb-10">
                    <div class="flex flex-col">
                        <div class="flex-1 justify-center">
                            <lazy-image :name="'fred'" :classes="'object-cover rounded-full justify-center h-52 w-52 mx-auto'" data-aos="fade-up"/>
                            <h1 class="text-3xl pt-3" data-aos="fade-up">Fred Blam</h1>
                            <h2 class="text-2xl pt-3" data-aos="fade-up">Founder & CEO of RapidAir</h2>
                            <CEOText class="hidden xl:inline"/>
                            <CEOText class="inline xl:hidden" v-if="this.showCEO"/>
                            <button class="btn-secondary bg-blue-superdark hover:bg-blue-dark inline xl:hidden mt-3" @click="openCEO()">{{ceoButtonText}}</button>
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <div class="flex-1 justify-center">
                            <lazy-image :name="'jennifer'" :classes="'object-cover rounded-full justify-center h-52 w-52 mx-auto'" data-aos="fade-up"/>
                            <h1 class="text-3xl pt-3" data-aos="fade-up">Jennifer Right</h1>
                            <h2 class="text-2xl pt-3" data-aos="fade-up">Co-Founder & COO of RapidAir</h2>
                            <COOText class="hidden xl:inline"/>
                            <COOText class="inline xl:hidden" v-if="this.showCOO"/>
                            <button class="btn-secondary bg-blue-superdark hover:bg-blue-dark inline xl:hidden mt-3" @click="openCOO()">{{cooButtonText}}</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="full-width-container flex justify-center bg-secondary shadow-lg" data-aos="slide-up">
            <h1 class="text-white text-2xl pt-4 pb-16 font-semibold max-w-7xl">Fred will use his experience in personal security, as well as his sales experience with mortgages to head up RapidAir to ensure that we are constantly progressing towards perfection.</h1>
        </div>

        <div class="flex flex-wrap-reverse  justify-center pl-5 pt-20">
            <div class="flex-col pr-10 pl-5 2xl:pt-0 pt-5">
                <h1 class="text-4xl" data-aos="fade-up">The history of RapidAir</h1>
                <p class="max-w-2xl text-xl pt-3" data-aos="fade-up">RapidAir believes everyone should be entitled to fresh clean air, 
                                                    but we know that isn't always possible due to where they are located. However, 
                                                    we make the impossible, possible. Our goal is to continually progress towards perfection. 
                                                    We are committed to finding the best possible air, capturing it in an unsurpassed method, 
                                                    and supplying it to our customers in a never seen before approach.</p>
                <p class="max-w-2xl text-xl pt-4" data-aos="fade-up">With that in mind, RapidAir was founded. Fred felt the need to provide fresh clean air to everyone who couldn't access it, 
                                                    but had no idea where to start on capturing the air. 
                                                    He made several phone calls to his friends and acquaintances and surely enough, 
                                                    he was able to find another person who shared the same vision as Fred. 
                                                    The phone call was to Jennifer, who as a former Commercial Diver possesses 
                                                    all the knowledge and qualities needed to Enhance Rapid, One Breath At A Time.</p>
            </div>
            <lazy-image :name="'guy_standing_mountain'" :classes="'sm:h-96'" data-aos="slide-right"/>
        </div>
        <h1 class="text-center text-xl font-normal 2xl:px-32 lg:px-20 px-5 pt-12" data-aos="slide-up">One week later our adventure began, and RapidAir was founded.</h1>
        <h1 class="text-center text-xl font-semibold 2xl:px-32 lg:px-20 px-5 pt-10" data-aos="slide-up">We are a legendary comapany.</h1>
    </body>
</template>

<script>
import LazyImage from '@/components/LazyImage'
import CEOText from '@/components/About/CEOText'
import COOText from '@/components/About/COOText'

export default {
    name: 'About',
    title: 'About us',
    components: {
        LazyImage,
        CEOText,
        COOText
    },
    data() {
        return {
            showCEO: false,
            ceoButtonText: 'See more',
            showCOO: false,
            cooButtonText: 'See more'
        }
    },
    methods: {
        openCEO() {
            this.showCEO = !this.showCEO
            if(this.showCEO) {
                this.ceoButtonText = 'Close'
            } else {
                this.ceoButtonText = 'See more'
            }
        },
        openCOO() {
            this.showCOO = !this.showCOO
            if(this.showCOO) {
                this.cooButtonText = 'Close'
            } else {
                this.cooButtonText = 'See more'
            }
        }
    }
}
</script>