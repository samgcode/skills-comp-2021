<template>
    <body>
        <div class="container text-center" data-aos="fade-down">
            <h1 class="text-5xl text-black">Our Products</h1>
            <router-link :to="{ name: 'Home' }" class="btn-primary my-4 mr-4">Write a review</router-link>
            <!-- <router-link :to="{ name: 'Contact' }" class="btn-secondary">Contact us</router-link> -->
        </div>
        <error-display :error="error" :show="errorOccured"></error-display>
        <div class="flex justify-center">
            <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <item-card :item="item" @show="showModal" @onError="onReviewError" data-aos="fade-down" v-for="item in items" :key="item.id"/>
            </div>
        </div> 
        
        <review-modal @close="closeModal" :showReviews="showReviews" :hasReviews="hasReviews" :reviews="reviews" :itemName="itemName" :showError="reviewErrorOccured" :error="reviewError"/>
    </body>
</template>

<script>
import ItemCard from './ItemCard.vue'
import ReviewModal from './ReviewModal.vue'
import ErrorDisplay from '../Error/ErrorDisplay'
import serviceLocator from '../../backend/serviceLocator'

const itemService = serviceLocator.services.itemService;

export default {
    name: 'Store',
    components: {
        ItemCard,
        ReviewModal,
        ErrorDisplay
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
            reviewErrorOccured: false
        }
    },
    methods: {
        showModal(itemName, reviews) {
            this.reviews = reviews
            if(this.reviews.length > 0) {
                this.hasReviews = true
            } else {
                this.hasReviews = false
            }
            this.showReviews = true
            this.itemName = itemName
        },
        closeModal() {
            this.showReviews = false;
        },
        async getItems() {
            try {
                this.items = await itemService.getItems()
            } catch(err) {
                this.errorOccured = true
                this.error = {
                    message: 'error occured while trying to fetch items',
                }
                console.log(err)
            }
        },
        onReviewError(err) {
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