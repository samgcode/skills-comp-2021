<template>
  <body>
    <error-display :error="errorData" :show="errorOccured"></error-display>
    <div v-if="!errorOccured">
        <square-spinner :loading="loading"></square-spinner>
        <div class="flex justify-center" data-aos="fade-up" v-if="!loading">
            <div class="flex max-w-8xl">
                <div class="p-10">
                    <div
                        class="max-w-8xl min-w-7xl rounded-lg overflow-hidden shadow-lg bg-superdark"
                    >
                        <div class="px-8 pt-8 pb-4">
                            <h1 class="text-white text-3xl">Write a review</h1>
                            <p class="text-white text-lg">
                                Please use the form to write a review for one of our products
                            </p>
                            </div>
                            <hr class="border-primary border-3" />
                            <div class="text-xl pt-4 px-4 bg-white max-w-full">
                            <form @submit.prevent="submitForm()" @change="validateForm">
                                <div class="mb-4">
                                <label class="form-label" for="name">Name</label>
                                <span class="sr-only">name input</span>
                                <input
                                    class="form-input"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    v-model="formdata.name"
                                    :class="{ error: validation[0] }"
                                />
                                </div>
                                <div class="mb-4">
                                <label class="form-label" for="rating">Rating</label>
                                <span class="sr-only">star rating input</span>
                                <star-rating 
                                        v-model="formdata.rating"
                                        :star-size="40"
                                        :border-color="ratingBorderColor"
                                        :border-width="2"
                                        :show-rating="false"
                                        :active-color="primaryColor"
                                        @rating-selected="ratingSelected"
                                    > </star-rating>
                                </div>
                                <div class="mb-4">
                                <label class="form-label" for="message">Review</label>
                                <span class="sr-only">review input</span>
                                <textarea
                                    class="form-input h-32 flex justify-end"
                                    id="review"
                                    placeholder="Review"
                                    v-model="formdata.review"
                                    :class="{ error: validation[1] }"
                                />
                                </div>
                            </form>
                            <div class="flex justify-center pt-5 pb-8">
                                <button
                                class="btn-secondary py-1 h-10"
                                type="submit"
                                @click="submitForm()"
                                >
                                Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </body>
</template>

<script>
import serviceLocator from '@/services/serviceLocator'
import SquareSpinner from '@/components/Spinners/SquareSpinner'
import StarRating from 'vue-star-rating'
import ErrorDisplay from '@/components/Error/ErrorDisplay'
import Colors from '../../colors'

const colors = new Colors()
const reviewService = serviceLocator.services.reviewService

export default {
    name: 'ReviewForm',
    title: 'Write review',
    components: {
        SquareSpinner,
        StarRating,
        ErrorDisplay
    },
    data() {
        return {
            formdata: {
                name: '',
                rating: 0,
                review: ''
            },
            validation: [],
            errorOccured: false,
            errorData: {},
            loading: true,
            ratingBorderColor: '',
            primaryColor: ''
        }
    },
    methods: {
        async submitForm() {     
            this.hasSubmitted = true
            this.errorOccured = false
            if(this.validateForm()) {
                this.loading = true
                try {
                    await reviewService.addReview(
                        this.formdata.name, 
                        this.formdata.rating, 
                        this.formdata.review, 
                    )
                    this.loading = false
                    this.$router.push({
                        name: 'Store'
                    });
                } catch(err) {
                    this.loading = false
                    this.errorOccured = true
                    this.submitText = 'Try again'
                    this.errorData = {
                        message: 'Error occured while trying send the review to the server',
                    }
                }
            }
        },
        validateForm() {
            this.validation = [
                false,
                false
            ]
            let valid = true;
            if(this.formdata.name === '') {
                this.validation[0] = true
                valid = false
            }
            if(this.formdata.rating < 0) {
                this.ratingBorderColor = '#DC3545';
                valid = false;
            }
            if(this.formdata.review === '') {
                this.validation[1] = true
                valid = false
            }
            return valid
        },
        ratingSelected: function() {
            this.ratingBorderColor = ''
        }
    },
    mounted() {
        this.primaryColor = colors.primary
        this.loading = false
    }
}
</script>

<style scoped>
.form-input-sm {
  @apply w-2xl md:max-w-lg sm:max-w-xl max-w-sm shadow-md appearance-none border rounded py-2 px-3 text-gray-700 leading-tight transform transition;
}
.form-input {
  @apply w-2xl xl:max-w-5xl lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-sm shadow-md appearance-none border rounded py-2 px-3 text-gray-700 leading-tight transform transition;
}
</style>
