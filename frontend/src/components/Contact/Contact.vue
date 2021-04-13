<template>
    <div class="flex justify-center" data-aos="fade-up">
        <div class="flex max-w-8xl">
            <div class="p-10">  
                <div class="max-w-8xl min-w-7xl rounded-lg overflow-hidden shadow-lg bg-blue-superdark">
                    <div class="px-8 pt-8 pb-4">
                        <h1 class="text-white text-3xl">Contact RapidAir</h1>
                        <p class="text-white text-lg">Please use the form to send us your message or ideas. Or simply pop in and say, hi!</p>
                    </div>
                    <hr class="border-primary border-3"/>
                    <div class="text-xl pt-4 px-4 bg-white max-w-full">
                        <form @submit.prevent="submitForm()" @change="validateForm">
                            <div class="mb-4">
                                <label class="form-label" for="name">
                                    Name
                                </label>
                                <span class="sr-only">name input</span>
                                <input class="form-input" 
                                    id="name" type="text" placeholder="Name"
                                    v-model="formdata.name"
                                    :class="{ 'error' : validation[0] }"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="email">
                                    Email
                                </label>
                                <span class="sr-only">email input</span>
                                <input class="form-input" 
                                    id="email" type="text" placeholder="Email"
                                    v-model="formdata.email"
                                    :class="{ 'error' : validation[1] }"
                                />
                                <h2 class="text-red-500 pt-2 pl-1" v-if="validation[1]">Please enter a valid email address</h2>
                            </div>
                            <div class="mb-4">
                                <label class="form-label" for="message">
                                    Message
                                </label>
                                <span class="sr-only">message input</span>
                                <textarea class="form-input h-32 flex justify-end" 
                                    id="message" placeholder="Message"
                                    v-model="formdata.message"
                                    :class="{ 'error' : validation[2] }"
                                />
                            </div>
                        </form>
                        <div class="flex justify-center pt-5 pb-8">
                            <button class="btn-secondary py-1 h-10" type="submit" @click="submitForm()">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    name: 'Contact',
    title: 'Contact',
    data() {
        return {
            formdata: {
                name: '',
                email: '',
                message: ''
            },
            validation: []
        }
    },
    methods: {
      submitForm() {     
        if(this.validateForm()) {
          this.$router.push({
            name: 'Home'
          });
        }
      },
      validateForm() {
        console.log(this.formdata)

        this.validation = [
          false,
          false,
          false
        ]
        let valid = true;
        if(this.formdata.name === '') {
          this.validation[0] = true
          valid = false
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.formdata.email) === false)
        {
          this.validation[1] = true
          valid = false
        }
        if(this.formdata.message === '') {
          this.validation[2] = true
          valid = false
        }
        console.log(this.validation)
        return valid
      }
    }
}
</script>

<style scoped>
.form-input {
    @apply w-2xl md:max-w-3xl sm:max-w-xl max-w-sm shadow-md appearance-none border rounded py-2 px-3 text-gray-700 leading-tight transform transition;
}
</style>