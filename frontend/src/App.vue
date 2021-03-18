<template>
  <div id="app" class="font-primary bg-gray-50">
    <header>
      <navbar />
    </header>    
    <h1 class="2xl:inline hidden">2xl</h1>
    <h1 class="2xl:hidden xl:inline hidden">xl</h1>
    <h1 class="xl:hidden lg:inline hidden">lg</h1>
    <h1 class="lg:hidden md:inline hidden">md</h1>
    <h1 class="md:hidden sm:inline">sm</h1>


    <router-view/>

    <footer>
      <footbar />
    </footer>
  </div>
</template>

<script>
import Footbar from './components/Footbar.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar, Footbar },
  name: 'App'
}
</script>

<style>

</style>
