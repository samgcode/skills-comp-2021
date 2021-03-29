<template>
    <body>
        <div class="flex max-w-7xl transition transform hover:scale-105">
            <div class="p-10">  
                <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-blue-superdark">
                    <img class="w-full" src="@/assets/red_bottle.png" alt="image">
                    <hr class="border-green border-3"/>
                    <div class="px-4 py-4">
                        <div class="font-bold text-xl text-white mb-2">{{ item.name }}</div>
                        <p class="text-white text-base">
                            {{ item.description }}
                        </p>
                        <div class="flex text-xl justify-between pt-4">
                            <div class="flex text-xl" v-if="item.onSale">
                                <h2 class="text-green line-through pr-1">${{ item.price }}</h2>
                                <h2 class="text-white">${{ item.salePrice }}</h2>
                            </div>
                            <div class="flex text-xl" v-if="!item.onSale">
                                <h2 class="text-white">${{ item.price }}</h2>
                            </div>
                            <div class="flex justify-end">
                                <button type="button" class="btn-primary btn-primary-sm" @click="showModal()">
                                    Reviews
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </body>
</template>


<script>
import serviceLocator from '../../backend/serviceLocator'

const reviewService = serviceLocator.services.reviewService
const wait=ms=>new Promise(resolve => setTimeout(resolve, ms))


export default {
    name: 'ItemCard',
    props: {
        item: Object,
    },
    data() {
        return {
            showReviews: false,
            itemId: '',
            reviews: []
        }
    },
    methods: {
        async showModal() {
            try {
                this.$emit('show', this.item.name)
                this.reviews = await reviewService.getReviewsByItemId(this.itemId)
                await wait(2000)
                this.$emit('reviews', this.reviews)
            } catch(err) {
                this.$emit('onError', {
                    message: 'Error occured while trying to fetch reviews',
                })
                console.log(err)
            }
        },
    },
    mounted() {
        this.itemId = this.item.id
    }
}
</script>