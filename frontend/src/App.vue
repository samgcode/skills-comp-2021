<template>
  <div id="app" class="font-primary bg-gray-50">
    <header>
      <navbar />
    </header>    

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
