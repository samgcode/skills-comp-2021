<template>
    <body>
        <div class="flex justify-center">
            <div class="text-center pt-8" data-aos="fade-down">
                <h1 class="text-4xl text-black font-semibold">About GreenThumb</h1>
                <h2 class="text-2xl text-gray-400">GreenThumb, doing the job right</h2>
            </div>
        </div>
        <div class="w-full bg-light mt-32 text-center">
            <div class="flex flex-wrap flex-row justify-center pt-10 gap-6 pb-10">
                <div class="flex flex-col">
                    <div class="flex-1 justify-center" data-aos="fade-left" data-aos-delay="100">
                        <lazy-image :name="'pruning_tree_2'" :classes="'object-cover rounded-full justify-center h-52 w-52 mx-auto'"/>
                        <h1 class="text-3xl pt-3">For your home backyard</h1>
                        <p class="max-w-sm pt-2">Whether it’s a seasonal upgrade, turf conversion or a complete landscape design, 
                                                our landscaping experts can help you identify opportunities that will optimize the value 
                                                and appearance of your property. And when you’re ready, we are here to implement those improvements!
                        </p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex-1 justify-center" data-aos="fade-right" data-aos-delay="100">
                        <lazy-image :name="'42'" :classes="'object-cover rounded-full justify-center h-52 w-52 mx-auto'"/>
                        <h1 class="text-3xl pt-3">For your commercial project</h1>
                        <p class="max-w-sm pt-2">
                            GreenThumb has the tools and the knowledge for even the biggest commercial landscaping projects.
                            Our experts can talk with you to decide how to implement exactly what you're looking for and give you a quote
                            just a few minutes later.                
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap justify-center pl-5 pt-20">
            <div class="flex-col pr-10">
                <h1 class="text-4xl" data-aos="fade-up">How did we start?</h1>
                <p class="max-w-2xl text-xl pt-3" data-aos="fade-up">Green Thumb Landscaping got its roots in one of the greenest, most picturesque landscapes in the world - Ireland.</p>
                <p class="max-w-2xl text-xl pt-4" data-aos="fade-up">The lush countryside of owner and operator John Duane's homeland is known to have '40 Shades of Green.'</p>
                <p class="max-w-2xl text-xl pt-4" data-aos="fade-up">Today, John employs the most knowledgeable, capable and hardworking team. Each member contributes their own individual talents and strong suits, but they all have one thing in common - commitment to providing customers with quality products and courteous services.</p>
            </div>
            <lazy-image :name="'laying_tiles_2'" :classes="'sm:h-96 2xl:pt-0 pt-5'" data-aos="slide-left" data-aos-delay="200"/>
        </div>
        <h1 data-aos="slide-up" class="text-center text-xl font-normal 2xl:px-52 lg:px-36 px-5 pt-14">
            From regular lawn maintenance and installing sandstone steps to laying simple pathways and designing complex custom yards, our diverse team has the qualifications to make your vision reality.
        </h1>
        <div class="full-width-container bg-superdark mt-36" data-aos="fade-in" data-aos-duration="600" data-aos-delay="100">
            <hr class="border-primary border-4"/>
            <div class="w-full text-center text-white">
                <div class="flex w-full flex-wrap-reverse flex-col-reverse justify-center pl-5 pt-20">
                    <div class="flex-col pr-10 pl-5 2xl:pt-0 pt-5 mx-auto">
                        <h1 class="text-4xl" data-aos="fade-up"></h1>
                        <p class="max-w-2xl text-xl pt-3" data-aos="fade-up">
                            We take pride in even the smallest project, 
                            and are meticulous down to the last blade of grass. 
                            We take a customer-first approach to everything we do.
                        </p>
                        <p class="max-w-2xl text-xl pt-4 pb-5 mb-10" data-aos="fade-up">
                            Our team is creative, courteous, thorough and efficient, 
                            and communicates every step of the way to ensure your expectations are met.
                        </p>
                    </div>
                    <lazy-image :name="'laying_sod_2'" :classes="'sm:h-96 mb-5 mx-auto'" data-aos="slide-right"/>
                </div>
            </div>
        </div>
        <div class="full-width-container flex justify-center bg-secondary shadow-lg" data-aos="slide-up">
            <h1 class="text-white text-2xl pt-4 pb-16 font-semibold max-w-7xl">We will use our expierience to make your lawn look exactly how you want it to.</h1>
        </div>

        <div class="flex flex-wrap  justify-center pl-5 pt-20">
            <div class="flex-col pr-10 pl-5 2xl:pt-0 pt-5">
                <h1 class="text-4xl" data-aos="fade-up"></h1>
                <p class="max-w-2xl text-xl pt-3" data-aos="fade-up">
                    Green Thumb Landscaping treats outdoor spaces like indoor spaces. 
                    Rocks and debris are picked up and removed, 
                    entertaining areas and driveways are blown free of dust 
                    and dead and decaying vegetation is pruned away. 
                </p>
                <p class="max-w-2xl text-xl pt-4" data-aos="fade-up">
                    No clean up required. When the work is done, 
                    the only thing left for you to do is kick up your feet and bask in your picture-ready surroundings. 
                    And you may not even know we were there.
                </p>
            </div>
            <lazy-image :name="'nice_backyard'" :classes="'sm:h-96'" data-aos="slide-right"/>
        </div>
        <h1 class="text-center text-xl font-normal 2xl:px-32 lg:px-20 px-5 pt-12" data-aos="slide-up">We are commited to getting the job done, and getting it done right.</h1>
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