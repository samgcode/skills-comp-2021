<template>
    <body>
        <div class="flex max-w-7xl">
            <div class="p-10">  
                <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-blue-superdark">
                    <img class="w-full" src="@/assets/red_bottle.png" alt="image">
                    <hr class="border-green border-3"/>
                    <div class="px-4 py-4">
                        <div class="font-bold text-xl text-white mb-2">Name</div>
                        <p class="text-white text-base">
                            Buy authentic malnad banana chips without any salt or masala added. Bananans are...
                        </p>
                        <div class="flex text-xl justify-between pt-4">
                            <div class="flex text-xl">
                                <h2 class="text-green line-through pr-1">$15</h2>
                                <h2 class="text-white">$10</h2>
                            </div>
                            <div class="flex justify-end">
                                <button type="button" class="btn-primary btn-primary-sm" @click="showModal()">
                                    Reviews
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </body>
</template>


<script>
export default {
    name: 'ItemCard',
    props: {
        id: Number,
    },
    data() {
        return {
            showReviews: false,
        }
    },
    methods: {
        showModal: function() {
            this.$emit('show', this.id)
        }
    }
}
</script>