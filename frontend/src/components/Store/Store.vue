<template>
    <body>
        <div class="container text-center" data-aos="fade-down">
            <h1 class="text-5xl text-black">Our Products</h1>
            <router-link :to="{ name: 'Home' }" class="btn-primary my-4 mr-4">Write a review</router-link>
            <!-- <router-link :to="{ name: 'Contact' }" class="btn-secondary">Contact us</router-link> -->
        </div>
        <div class="flex justify-center">
            <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1" >
                <item-card :id="1" @show="showModal" data-aos="fade-down-right"/>
                <item-card :id="2" @show="showModal" data-aos="fade-down"/>
                <item-card :id="3" @show="showModal" data-aos="fade-down-left"/>
                <item-card :id="4" @show="showModal" data-aos="fade-down-right"/>
                <item-card :id="5" @show="showModal" data-aos="fade-down"/>
                <item-card :id="6" @show="showModal" data-aos="fade-down-left"/>
                <item-card :id="7" @show="showModal" data-aos="fade-down-right"/>
                <item-card :id="8" @show="showModal" data-aos="fade-down"/>
                <item-card :id="9" @show="showModal" data-aos="fade-down-left"/>
            </div>
        </div> 
        
        <review-modal @close="closeModal" :showReviews="showReviews" :reviews="reviews" />
    </body>
</template>

<script>
import ItemCard from './ItemCard.vue'
import ReviewModal from './ReviewModal.vue'
export default {
    name: 'Store',
    components: {
        ItemCard,
        ReviewModal,
    },
    data() {
        return {
            showReviews: false,
            itemId: 0,
            reviews: [{id:0}]
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
        }
    }
}
</script>