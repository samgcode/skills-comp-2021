<template>
    <body>
        <div class="container text-center" data-aos="fade-down">
            <h1 class="text-5xl text-black">Our Products</h1>
            <router-link :to="{ name: 'Home' }" class="btn-primary my-4 mr-4">Write a review</router-link>
            <!-- <router-link :to="{ name: 'Contact' }" class="btn-secondary">Contact us</router-link> -->
        </div>
        <error-display :error="error" :show="errorOccured"></error-display>
        <div class="flex justify-center">
            <!-- <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1" v-for="item in items" :key="item.id">
                <item-card :item="item" @show="showModal" data-aos="fade-down"/>
            </div> -->
            <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <item-card :item="item" @show="showModal" data-aos="fade-down" v-for="item in items" :key="item.id"/>
            </div>
            <!-- <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <item-card :item="{imagename: 'plastic_bottle', name: '10L Premium Oxygen - Single', onSale: 'true', price: '29.00', salePrice: '24.99'}" @show="showModal" data-aos="fade-down"/>
                <item-card :item="{imagename: 'plastic_bottle', name: '10L Premium Oxygen - Single', onSale: 'true', price: '29.00', salePrice: '24.99'}" @show="showModal" data-aos="fade-down"/>
                <item-card :item="{imagename: 'plastic_bottle', name: '10L Premium Oxygen - Single', onSale: 'true', price: '29.00', salePrice: '24.99'}" @show="showModal" data-aos="fade-down"/>


            </div> -->
        </div> 
        
        <review-modal @close="closeModal" :showReviews="showReviews" :reviews="reviews" />
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
            itemId: 0,
            items: [],
            reviews: [{id:0}],
            error: {
                statusCode: '404',
                message: 'This is an error message which is a message for an error which has a message because this is an error with an error message'
            },
            errorOccured: false
        }
    },
    methods: {
        showModal(id) {
            this.showReviews = true
            this.id = id
            this.reviews = [
                {id}
            ]
        },
        closeModal() {
            this.showReviews = false;
        },
        async getItems() {
            try {
                this.items = await itemService.getItems()
                
            } catch(err) {
                this.errorOccured = true;
                this.error = {
                    message: 'error occured while trying to fetch items',
                }
                console.log(err)
            }
        }
    },
    mounted() {
        this.getItems()
    }
}
</script>