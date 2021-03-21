<template>
    <body>
        <div class="flex max-w-7xl">
            <div class="pt-5 sm:pl-9">  
                <div class="max-w-sm w-96 rounded-lg overflow-hidden shadow-lg bg-white border-2">
                    <div class="px-4 py-4">
                        <h1 class="text-xl">Name</h1>
                        <p class="text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan est a sagittis vestibulum.
                        </p>
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
        review: Object,
    },
    data() {
        return {
            
        }
    },
}
</script>