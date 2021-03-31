<template>
    <body>
        <div class="flex max-w-7xl">
            <div class="pt-5 sm:pl-9">  
                <div class="max-w-sm w-96 rounded-lg overflow-hidden shadow-lg bg-white border-2">
                    <div class="px-4 py-4">
                        <div class="flex">
                            <h1 class="text-xl pr-3">{{ review.username }}</h1>
                            <star-rating class="pb-2" :read-only="true" :rating="parseInt(review.rating)" :star-size="23" :active-color="'#11fe48'"></star-rating>
                        </div>
                        <p class="text-gray-500 text-sm">
                            {{ review.review }}
                        </p>
                    </div>
                </div>
            </div>
        </div>   
    </body>
</template>


<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'ItemCard',
    props: {
        review: Object,
    },
    components: {
        StarRating
    },
    data() {
        return {
            
        }
    }
}
</script>