<template>
    <body class="flex-row">
        <nav class="bg-blue-superdark col-span-1 w-10/12">
            <div class="bg-primary max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" @click="open = !open" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 active:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span class="sr-only">Open main menu</span>
                            <svg class="h-6 w-6" :class="{'hidden' : open}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg class="h-6 w-6" :class="{'hidden' : !open}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="hidden sm:block sm:ml-6">
                            <div class="flex space-x-4">
                                <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                                <router-link :to="{ name: 'Store' }" class="nav-link">Store</router-link>
                                <router-link :to="{ name: 'Contact' }" class="nav-link">Contact Us</router-link>
                                <router-link :to="{ name: 'About' }" class="nav-link">About Us</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start bg-blue-500">
                        <router-link :to="{ name: 'Home' }" class="flex-shrink-0 flex items-center">
                            <img class="block h-8 w-auto" src="@/assets/logo.png" alt="RapidAir">
                            <!-- <h1 class="hidden lg:inline-block h-8 font-semibold text-white text-2xl pl-1 py-0">Name</h1> -->
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="sm:hidden text-white" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1" :class="{'hidden' : !open}">
                    <router-link :to="{ name: 'Home' }" class="nav-link block">Home</router-link>
                    <router-link :to="{ name: 'Store' }" class="nav-link block">Store</router-link>
                    <router-link :to="{ name: 'Contact' }" class="nav-link block">Contact Us</router-link>
                    <router-link :to="{ name: 'About' }" class="nav-link block">About Us</router-link>
                </div>
            </div>
            
        </nav>

        <nav class="col-span-1 bg-primary w-2/12">
            test
        </nav>
    </body>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
           open: false, 
        }
    }
}
</script>