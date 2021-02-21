<template>
    <body>
        <nav class="bg-black">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
                        <a href="#home" class="flex-shrink-0 flex items-center">
                            <img class="block h-8 w-auto" src="@/assets/logo.png" alt="Workflow">
                            <h1 class="hidden lg:inline-block h-8 font-semibold text-white text-2xl pl-1 py-0">Name</h1>
                        </a>
                        <div class="hidden sm:block sm:ml-6">
                            <div class="flex space-x-4">
                                <a href="#home" class="bg-gray-800 hover:bg-gray-700 active:bg-gray-500 text-white px-3 py-2 rounded-md text-base font-medium">Home</a>
                                <a href="#store" class="text-gray-300 hover:bg-gray-600 hover:text-white active:bg-gray-500 px-3 py-2 rounded-md text-base font-medium">Store</a>
                                <a href="#contact" class="text-gray-300 hover:bg-gray-600 hover:text-white active:bg-gray-500 px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
                                <a href="#about" class="text-gray-300 hover:bg-gray-600 hover:text-white active:bg-gray-500 px-3 py-2 rounded-md text-base font-medium">About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:hidden text-white" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1" :class="{'hidden' : !open}">
                    <a href="#home" class="bg-gray-900 hover:bg-gray-700 active:bg-gray-500 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#store" class="text-gray-300 hover:bg-gray-600 hover:text-white active:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium">Store</a>
                    <a href="#contact" class="text-gray-300 hover:bg-gray-600 hover:text-white active:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
                    <a href="#about" class="text-gray-300 hover:bg-gray-600 hover:text-white active:bg-gray-500 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
                </div>
            </div>
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