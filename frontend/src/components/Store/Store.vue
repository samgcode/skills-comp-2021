<template>
    <body>
        <div class="justify-center text-center" data-aos="fade-down">
            <h1 class="text-5xl text-black">Our Products</h1>
            <router-link :to="{ name: 'ReviewForm', params: { item: 'none' }}" class="btn-primary my-4 mr-4">Write a review</router-link>
            <square-spinner :loading="loading"></square-spinner>
        </div>
        <error-display :error="error" :show="errorOccured"></error-display>
        <div class="max-w-screen-xl mx-auto px-4">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3 transition transform hover:scale-105" v-for="item in items" :key="item.id">
                    <div class="flex flex-col flex-1 rounded-lg hover:shadow-xl shadow-lg" data-aos="fade-in" >
                        <item-card :item="item" @show="showModal" @reviews="displayReviews" @onError="onReviewError"/>
                    </div>
                </div>
            </div>
        </div> 
        <review-modal @close="closeModal" :showReviews="showReviews" :hasReviews="hasReviews" :reviews="reviews" :item="item" :loading="reviewsLoading" :showError="reviewErrorOccured" :error="reviewError"/>
    </body>
</template>

<script>
import ItemCard from '@/components/Store/ItemCard.vue'
import ReviewModal from '@/components/Store/ReviewModal.vue'
import ErrorDisplay from '@/components/Error/ErrorDisplay'
import serviceLocator from '@/services/serviceLocator'
import SquareSpinner from '@/components/Spinners/SquareSpinner'

const itemService = serviceLocator.services.itemService

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
            item: {},
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
        showModal(itemName, itemId) {
            this.hasReviews = false
            this.showReviews = true
            this.item = {
                name: itemName,
                id: itemId
            }
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