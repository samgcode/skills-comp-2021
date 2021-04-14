<template>
    <body>
        <nav class="flex bg-superdark col-span-1 justify-between sm:h-20">
            <div class="block py-2">
                <div class="bg-superdark mx-auto px-2 sm:px-6 lg:px-8 py-0">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" @click="open = !open" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 active:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span class="sr-only">Open main menu</span>
                                <svg class="h-6 w-6" :class="{'hidden' : open}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" :stroke="primaryColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg class="h-6 w-6" :class="{'hidden' : !open}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" :stroke="primaryColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    <router-link :to="{ name: 'Home' }" class="nav-link" exact>Home</router-link>
                                    <router-link :to="{ name: 'Store' }" class="nav-link" exact>Store</router-link>
                                    <router-link :to="{ name: 'Contact' }" class="nav-link" exact>Contact Us</router-link>
                                    <router-link :to="{ name: 'About' }" class="nav-link" exact>About Us</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex bg-secondary content-center border-l-8 border-primary px-4 py-4">
                <div class="flex-1 flex items-center justify-end sm:items-stretch sm:justify-start">
                    <router-link :to="{ name: 'Home' }" class="flex-shrink-0 flex items-center focus:outline-none focus:ring focus:ring-offset-1 focus:ring-primary rounded-sm" @click.native="open = false" exact>
                        <img class="block h-16 w-auto" src="@/assets/GreenThumbLogoW.svg" alt="RapidAir">
                    </router-link>
                </div>
            </div>
        </nav>

        <div class="sm:hidden text-white bg-superdark" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1" :class="{'hidden' : !open}">
                <router-link :to="{ name: 'Home' }" class="nav-link block" exact @click.native="open = false">Home</router-link>
                <router-link :to="{ name: 'Store' }" class="nav-link block" exact @click.native="open = false">Store</router-link>
                <router-link :to="{ name: 'Contact' }" class="nav-link block" exact @click.native="open = false">Contact Us</router-link>
                <router-link :to="{ name: 'About' }" class="nav-link block" exact @click.native="open = false">About Us</router-link>
            </div>
        </div>
    </body>
</template>

<script>
import Colors from '../colors'

const colors = new Colors()

export default {
    name: 'Navbar',
    data() {
        return {
           open: false, 
           primaryColor: ''
        }
    },
    mounted() {
        this.primaryColor = colors.primary
    }
}
</script>