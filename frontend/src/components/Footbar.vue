<template>
    <div class="bg-blue-superdark mt-52" data-aos="fade-in">
        <div class="container pb-24 max-w-full">
            <hr class="border-primary border-3"/>
            <div class="flex sm:pl-20 pl-8 pt-10">
                <div class="text-white text-left max-w-md pr-10" data-aos="fade-up" data-aos-delay="100">
                    <h1 class="text-2xl">Operating hours</h1>
                    <h2 class="text-lg">mon-fri: 5am-10pm</h2>
                    <h2 class="text-lg">sat-sun: 7am-8pm</h2>
                </div>
                <div class="text-white text-left max-w-md" data-aos="fade-up" data-aos-delay="100">
                    <h1 class="text-2xl">Address</h1>
                    <h2 class="text-lg">22 1139 AVE NW</h2>
                    <h2 class="text-lg">Edmonton AB T5M 2N0</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
           open: false, 
        }
    }
}
</script>