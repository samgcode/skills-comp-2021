<template>
    <body>
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
            <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12">
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