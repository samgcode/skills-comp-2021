<template>
    <body>      
        <transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        >       
            <div class="fixed overflow-hidden z-10 inset-0" v-show="showReviews">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 overflow-hidden">
                    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <!-- This element is to trick the browser into centering the modal contents. -->
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start justify-between">
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                        Reviews for {{ itemName }}
                                    </h3>
                                </div>
                                <button type="button" @click="closeModal()" class="focus:outline-none focus:ring-2 ring-blue ring-offset-8 rounded-sm hover:fill-black fill-current">
                                    <svg class="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="gray" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="mt-2 flex-row grid-cols-1 xl:h-2xl md:h-96 overflow-auto mb-20">
                                <error-display :error="error" :show="showError"></error-display>
                                <square-spinner :loading="loading"></square-spinner>
                                <div v-if="!showError">
                                    <div v-if="hasReviews">
                                        <review-card :review="review"  data-aos="fade-up" v-for="review in reviews" :key="review.id"/>
                                    </div>
                                    <div v-if="!hasReviews && !loading">
                                        <div class="flex max-w-7xl" data-aos="fade-up">
                                            <div class="pt-5 sm:pl-9">  
                                                <div class="max-w-sm w-96 rounded-lg overflow-hidden shadow-lg bg-white border-2">
                                                    <div class="px-4 py-4">
                                                        <h1 class="text-xl">No reviews for this item</h1>
                                                        <p class="text-gray-500 text-md">
                                                            You can submit one on the store page
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse absolute inset-x-0 bottom-0">
                            <button type="button" @click="closeModal()" class="mt-3 w-full inline-flex justify-center rounded-md btn-secondary sm:ml-3 sm:w-auto">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </body>
</template>

<script>
import ReviewCard from './ReviewCard.vue'
import ErrorDisplay from '../Error/ErrorDisplay'
import SquareSpinner from '../Spinners/SquareSpinner'

export default {
    name: 'ReviewModal',
    props: {
        showReviews: Boolean,
        hasReviews: Boolean,
        reviews: Array,
        itemName: String,
        showError: Boolean,
        error: Object,
        loading: Boolean
    },
    components: {
        ReviewCard,
        ErrorDisplay,
        SquareSpinner
    },
    data() {
        return {

        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    },
}
</script>