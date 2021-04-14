<template>
    <body>
        <div class="xl:mx-52 sm:mx-10">
            <div class="px-8 py-4 lg:flex justify-between">
                <div  data-aos="fade-right">
                    <h1 class="mt-6 text-6xl mr-2">Green<span class="text-primary-dark">Thumb</span></h1>
                    <h3 class="text-xl text-black pl-1 font-semibold">Landscaping</h3>
                    <h2 class="text-3xl text-gray-500 pt-5">Doing the job right</h2>
                    <div class="mt-6">
                        <router-link :to="{ name: 'About' }" class="btn-primary">About us</router-link>
                        <router-link :to="{ name: 'Store' }" class="ml-4 btn-secondary">Store</router-link>
                    </div>
                </div>
                <lazy-image :name="'nice_backyard'" :classes="'object-contain h-96 lg:pt-0 pt-4'" data-aos="fade"/>
            </div>
        </div>
        <div class="full-width-container bg-superdark" data-aos="fade-in" data-aos-duration="600" data-aos-delay="100">
            <hr class="border-primary border-4 mt-8"/>
            <h1 class="text-3xl text-white pt-6">We are committed to doing the job right.</h1>
            <hr class="border-primary border-3 mt-8 max-w-min px-10 mx-auto"/>
            <h2 class="white-subheading">Green Thumb Landscaping specializes in unique landscape projects from start to finish. </h2>
            <h2 class="white-subheading xl:mx-52">Our goal is to provide our customers with landscapes that stand the test of time. Gardens and yards that are maintainable, aesthetically pleasing and healthy.</h2>
            <h2 class="white-subheading pb-8"></h2>
        </div>
        <div class="full-width-container bg-secondary shadow-lg" data-aos="slide-up" data-aos-delay="50">
            <h1 class="text-white text-2xl pt-4 pb-16 font-semibold">From the consultation to the planning, design and installation, we pride ourselves on doing the job right.</h1>
        </div>

        <div class="full-width-container pt-32">
            <div data-aos="fade-up" data-aos-delay="150">
                <h1 class="text-2xl">What do we offer?</h1>
                <p class="mx-auto max-w-6xl">The state of your landscape speaks volumes about your property. We get that. We provide professional lawn and tree cuting to make your lawn look as good as possible.
                                                What we provide are services that are convenient for you and we are committed to keeping things healthy and well-maintained.</p>
            </div>
            <div class="flex flex-wrap justify-center gap-8 pt-10">
                <div class="text-left max-w-xl">
                    <h2 class="text-secondary text-xl" data-aos="fade-right">See what our customers are saying</h2>
                    <p class="py-3 text-md" data-aos="fade-right">
                        “John and his crew were very easy to work with and built us a fantastic new deck and hot tub. We love it! During 
                        the design & build phase John was open to new design ideas to incorporate into his plan and always took the time to answer 
                        my many questions. His crew was always polite and cleaned up the site each day before they left. I highly recommend them if you are considering a new deck for your home.”
                    </p>
                    <h2 class="text-md" data-aos="fade-right">— Liz O'Brien</h2>
                    <button class="btn-secondary mt-5">See more reviews</button>
                </div>
            </div>
        </div>
        <div class="flex justify-center bg-light mt-10 py-5">
            <div class="flex flex-wrap px-5">
                <div class="max-w-lg xl:mr-3 mr-6 px-3" data-aos="fade-up">
                    <h1 class="text-3xl font-semibold">Check out one of our locations</h1>
                    <h2 class="text-xl pb-5 pt-2">GreenThumb has 4 offices in Calgary, Edmonton, Lethbridge and Fort McMurray.</h2>
                </div>
                <store-locations class="max-w-sm"/>
            </div>
        </div>        
    </body>
</template>

<script>
import LazyImage from '@/components/LazyImage'
import StoreLocations from '@/components/Home/StoreLocations'

export default {
    name: 'Home',
    title: 'RapidAir',
    components: {
        LazyImage,
        StoreLocations
    },
}
</script>