<template>
    <div>
        <review-display :params="reviewParams" @close="closeModal" />
    </div>
</template>

<script>
import ReviewDisplay from '@/components/Reviews/ReviewDisplay.vue'
import serviceLocator from '@/services/serviceLocator'

const reviewService = serviceLocator.services.reviewService

export default {
    components: { ReviewDisplay },
    name: 'ReviewModal',
    props: {
        open: Boolean
    },
    data() {
        return {
            reviewParams: {
                showReviews: false,
                hasReviews: false,
                reviews: [],
                showError: false,
                error: {},
                loading: false,
            }
        }
    },
    methods: {
        showModal() {
            if(this.open) {
                this.reviewParams.hasReviews = false
                this.reviewParams.showReviews = true
                this.displayReviews()
            }
        },
        async displayReviews() {
            this.reviewParams.reviews = await reviewService.getReviews()
            this.reviewParams.reviewsLoading = false
            if(this.reviewParams.reviews.length > 0) {
                this.reviewParams.hasReviews = true
            } else {
                this.reviewParams.hasReviews = false
            }

        },
        closeModal() {
            this.reviewParams.showReviews = false
            this.reviewParams.reviewsLoading = true
        },
    },
    watch: {
        open: function() {
            this.showModal()
        }
    }
}
</script>