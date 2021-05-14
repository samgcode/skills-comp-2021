<template>

<!-- I didnt get to finish this page :( -->
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
                            <h1 class="text-white text-3xl">Estimate your quote</h1>
                            <p class="text-white text-lg">
                                Have a landscaping idea but not sure where to start?  You can get a decent idea of cost from our calculator, 
                                just plug in your needs and generate a base price / estimate. 
                            </p>
                            </div>
                            <hr class="border-primary border-3" />
                            <div class="text-xl pt-4 px-4 bg-white max-w-full">
                            <form @submit.prevent="calculate()" @change="calculate()">
                                <div class="mb-4">
                                    <div class="pt-5" v-for="item in items" :key="item.id">
                                        <div class="flex justify-between">
                                            <label class="form-label pt-2 pr-2" for="name">{{ item.name }}</label>
                                            <span class="sr-only">{{item.name}} input</span>
                                            <input
                                                class="form-input"
                                                id="Quantity"
                                                type="text"
                                                placeholder="Quantity"
                                                v-model="item.quantity"
                                                :class="{ error: item.error }"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="flex justify-center pt-5 pb-8">
                                <button
                                class="btn-secondary py-1 h-10"
                                type="submit"
                                @click="calculate()"
                                >
                                Send
                                </button>
                                <h1 class="pt-2 pl-10">Your quote: ${{ totalPrice }}</h1>
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
import ErrorDisplay from '@/components/Error/ErrorDisplay'
import Colors from '../../colors'

const colors = new Colors()
const itemService = serviceLocator.services.itemService

export default {
    name: 'QuoteCalculator',
    title: 'Write review',
    components: {
        SquareSpinner,
        ErrorDisplay
    },
    data() {
        return {
            errorOccured: false,
            errorData: {},
            loading: true,
            primaryColor: '',
            totalPrice: 0
        }
    },
    methods: {
        async calculate() {   
            console.log(this.items)  
            this.validate()
            console.log(this.items)  
            this.items.forEach(item => {
                if(item.quantity) {
                    let itemPrice = parseInt(item.quantity) * parseInt(item.price)
                    console.log(parseInt(item.quantity))
                    this.totalPrice += itemPrice
                }
            });
        },
        validate() {
            this.items.map(item => {
                console.log(parseInt(item.quantity))
                if(item.quatity === undefined || item.quatity === '') {
                    item.error = false
                    return item
                } else if(parseInt(item.quantity)) {
                    item.error = false
                    return item
                } else {
                    item.error = true
                    return item
                }
            });
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

    },
    mounted() {
        this.getItems()
        this.primaryColor = colors.primary
    }
}
</script>

<style scoped>
.form-input {
  @apply w-2xl max-w-sm shadow-md appearance-none border rounded py-2 px-3 text-gray-700 leading-tight transform transition;
}
</style>