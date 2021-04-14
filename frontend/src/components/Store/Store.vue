<template>
    <body>
        <review-modal :open="modalOpen"></review-modal>
        <div class="justify-center text-center" data-aos="fade-down">
            <h1 class="text-5xl text-black">Our Services</h1>
            <div class="flex justify-center gap-4 pt-3">
                <div>
                    <router-link :to="{ name: 'ReviewForm', params: { item: 'none' }}" class="btn-primary">Write a review</router-link>
                </div>
                <button class="btn-secondary" @click="modalOpen = !modalOpen">See reviews</button>
            </div>
            <square-spinner :loading="loading"></square-spinner>
        </div>
        <error-display :error="error" :show="errorOccured"></error-display>
        <div class="max-w-screen-xl mx-auto px-4">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3 transition transform hover:scale-105" v-for="item in items" :key="item.id">
                    <div class="flex flex-col flex-1 rounded-lg hover:shadow-xl shadow-lg" data-aos="fade-in" >
                        <item-card :item="item"/>
                    </div>
                </div>
            </div>
        </div> 
    </body>
</template>

<script>
import ItemCard from '@/components/Store/ItemCard.vue'
import ErrorDisplay from '@/components/Error/ErrorDisplay'
import serviceLocator from '@/services/serviceLocator'
import SquareSpinner from '@/components/Spinners/SquareSpinner'
import ReviewModal from '@/components/Reviews/ReviewModal'

const itemService = serviceLocator.services.itemService

export default {
    name: 'Store',
    title: 'Services',
    components: {
        ItemCard,
        ErrorDisplay,
        SquareSpinner,
        ReviewModal
    },
    data() {
        return {
            showReviews: false,
            item: {},
            items: [],
            error: {
                statusCode: '404',
                message: 'This is an error message which is a message for an error which has a message because this is an error with an error message'
            },
            errorOccured: false,
            loading: true,
            modalOpen: false
        }
    },
    methods: {
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
    },
    mounted() {
        this.getItems()
    }
}
</script>

<style scoped>

</style>