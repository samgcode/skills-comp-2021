<template>
    <body>
        <div class="container text-center">
            <h1 class="text-5xl text-black">Our Products</h1>
            <router-link :to="{ name: 'Home' }" class="btn-primary my-4 mr-4">Write a review</router-link>
            <!-- <router-link :to="{ name: 'Contact' }" class="btn-secondary">Contact us</router-link> -->
        </div>
        <div class="flex justify-center">
            <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
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
                                        <a class="btn-primary btn-primary-sm">Reviews</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                        <a class="btn-primary btn-primary-sm">Reviews</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                        <a class="btn-primary btn-primary-sm">Reviews</a>
                                    </div>
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
export default {
    name: 'Store',
    data() {
        return {
            
        }
    }
}
</script>