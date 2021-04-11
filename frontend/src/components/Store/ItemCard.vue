<template>
    <body>
        <div class="flex-1">
            <img class="w-full max-h-96 object-fill cursor-pointer" :class="{ 'hover' : hover }" 
                    :src="item.image.file" 
                    :alt="item.image.name" 
                    @mouseover="hover=true" 
                    @mouseleave="hover=false"
                    @click="openReviewForm()">
            <h1 class="absolute top-5 left-5 text-xl" v-if="hover">Write a review</h1>
            <hr class="border-green border-3 w-full"/>
        </div>
        <div class="p-5">
            <h1 class="font-bold text-xl text-white mb-2">{{ item.name }}</h1>
            <div class="flex content-end text-xl justify-between pt-4">
                <div class="flex text-xl" v-if="item.onSale">
                    <h2 class="text-green line-through pr-1">${{ item.price }}</h2>
                    <h2 class="text-white">${{ item.salePrice }}</h2>
                </div>
                <div class="flex text-xl" v-if="!item.onSale">
                    <h2 class="text-white">${{ item.price }}</h2>
                </div>
                <div class="flex justify-end">
                    <star-rating class="pr-1 pb-1" :read-only="true" :rating="parseInt(item.average)" :star-size="20" :text-class="'hidden'" :active-color="'#11fe48'"></star-rating>
                    <button type="button" class="btn-primary btn-primary-sm" @click="showModal()">
                        Reviews
                    </button>
                </div>
            </div>
        </div>
    </body>
</template>


<script>
import serviceLocator from '@/services/serviceLocator'
import StarRating from 'vue-star-rating'

const reviewService = serviceLocator.services.reviewService

export default {
    name: 'ItemCard',
    props: {
        item: Object,
    },
    components: {
        StarRating
    },
    data() {
        return {
            showReviews: false,
            itemId: '',
            reviews: [],
            hover: false
        }
    },
    methods: {
        async showModal() {
            try {
                this.$emit('show', this.item.name, this.itemId)
                this.reviews = await reviewService.getReviewsByItemId(this.itemId)
                this.$emit('reviews', this.reviews)
            } catch(err) {
                this.$emit('onError', {
                    message: 'Error occured while trying to fetch reviews',
                })
            }
        },
        openReviewForm() {
            this.$router.push({
                name: `ReviewForm`,
                params: {
                    item: this.itemId
                }
            });
        }
    },
    mounted() {
        this.itemId = this.item.id
    }
}
</script>

<style scoped>
.hover {
    filter: blur(5px);
    transition: filter 0.5s;
}
</style>