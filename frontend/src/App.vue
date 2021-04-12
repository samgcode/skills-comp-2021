<template>
  <div id="app" class="font-primary bg-gray-50">
    <header>
      <navbar />
    </header>    
    
    <router-view class="pt-5"/>

    <footer>
      <footbar />
    </footer>
  </div>
</template>

<script>
import Footbar from './components/Footbar.vue'
import Navbar from './components/Navbar.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  components: { Navbar, Footbar },
  name: 'App',
  created() {
    AOS.init()
  }
}
</script>

<style>

</style>
