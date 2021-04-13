<template>
    <div>
        <div class="flex flex-col h-96 cursor-pointer"
            @mouseover="hover=true" 
            @mouseleave="hover=false"
            @click="openReviewForm()">
            <img class="w-full object-center m-auto max-h-96 object-scale" :class="{ 'hover' : hover }" 
                    :src="item.image.file" 
                    :alt="item.image.name">
            <h1 class="text-2xl text-primary absolute top-5 left-5" v-if="hover">Write a review</h1>
            <font-awesome-icon icon="edit" class="icon fa-6x" style="color:#11fe48" v-if="hover"/>
        </div>
        <hr class="border-primary border-3 w-full"/>
        <div class="p-5 bg-blue-superdark h-36  rounded-b-md">
            <h1 class="font-bold text-xl text-white mb-2">{{ item.name }}</h1>
            <div class="flex content-end text-xl justify-between pt-4">
                <div class="flex text-xl" v-if="item.onSale">
                    <h2 class="text-primary line-through pr-1">${{ item.price }}</h2>
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
    </div>
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
    filter: grayscale(1);
    filter: blur(5px);
    transition: filter 0.5s;
}

.icon {
      position: absolute;
      left: 50%;
      top: 33%;
      transform: translate(-33%, -50%);
}
</style>