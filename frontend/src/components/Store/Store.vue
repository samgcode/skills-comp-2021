<template>
    <body>
        <img src="data:image/jpeg;base64,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" alt="">
        <div class="justify-center text-center" data-aos="fade-down">
            <!-- <div> -->
                <h1 class="text-5xl text-black">Our Products</h1>
                <router-link :to="{ name: 'ReviewForm' }" class="btn-primary my-4 mr-4">Write a review</router-link>
                <!-- <router-link :to="{ name: 'Contact' }" class="btn-secondary">Contact us</router-link> -->
                <square-spinner :loading="loading"></square-spinner>
            <!-- </div> -->

        </div>
        <error-display :error="error" :show="errorOccured"></error-display>
        <div class="flex justify-center">
            <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <item-card :item="item" @show="showModal" @reviews="displayReviews" @onError="onReviewError" data-aos="fade-down" v-for="item in items" :key="item.id"/>
            </div>
        </div> 
        
        <review-modal @close="closeModal" :showReviews="showReviews" :hasReviews="hasReviews" :reviews="reviews" :itemName="itemName" :loading="reviewsLoading" :showError="reviewErrorOccured" :error="reviewError"/>
    </body>
</template>

<script>
import ItemCard from './ItemCard.vue'
import ReviewModal from './ReviewModal.vue'
import ErrorDisplay from '../Error/ErrorDisplay'
import serviceLocator from '../../backend/serviceLocator'
import SquareSpinner from '../Spinners/SquareSpinner'

const itemService = serviceLocator.services.itemService
const wait=ms=>new Promise(resolve => setTimeout(resolve, ms))

export default {
    name: 'Store',
    components: {
        ItemCard,
        ReviewModal,
        ErrorDisplay,
        SquareSpinner
    },
    data() {
        return {
            showReviews: false,
            itemName: 'test',
            items: [],
            reviews: [{}],
            hasReviews: false,
            error: {
                statusCode: '404',
                message: 'This is an error message which is a message for an error which has a message because this is an error with an error message'
            },
            errorOccured: false,
            reviewError: {},
            reviewErrorOccured: false,
            loading: true,
            reviewsLoading: true
        }
    },
    methods: {
        showModal(itemName) {
            this.hasReviews = false
            this.showReviews = true
            this.itemName = itemName
        },
        displayReviews(reviews) {
            this.reviewsLoading = false
            this.reviews = reviews
            if(this.reviews.length > 0) {
                this.hasReviews = true
            } else {
                this.hasReviews = false
            }

        },
        closeModal() {
            this.showReviews = false
            this.reviewsLoading = true
        },
        async getItems() {
            try {
                this.loading = true
                await wait(2000)
                this.items = await itemService.getItems()
                this.loading = false
            } catch(err) {
                this.loading = false
                this.errorOccured = true
                this.error = {
                    message: 'error occured while trying to fetch items',
                }
                console.log(err)
            }
        },
        onReviewError(err) {
            this.reviewsLoading = false
            this.hasReviews = false
            this.reviewErrorOccured = true
            this.reviewError = err
            console.log(err)
        }
    },
    mounted() {
        this.getItems()
    }
}
</script>

<style scoped>

</style>