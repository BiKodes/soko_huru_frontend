<template>

<main class="p-5">
      <form 
        action=""
        method="post"
        class="w-[400px] mx-auto p-6 my-16"
        @submit.prevent="submitForm"
      >
        <h2 class="text-2xl font-semibold text-center mb-4">Create an account</h2>
        <p class="text-center text-gray-500 mb-3">
          or
          <router-link to="/log-in" class="text-sm text-purple-700 hover:text-purple-600" >
            login with existing account
          </router-link>
        
        </p>
        <div class="mb-4">
          <input
            placeholder="Your Username"
            type="text"
            name="username"
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            v-model="username"
          />
        </div>
    
        <div class="mb-4">
          <input
            placeholder="Your Email"
            type="email"
            name="email"
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            v-model="email"
          />
        </div>
        <div class="mb-4">
          <input
            placeholder="Password"
            type="password"
            name="password"
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            v-model="password"
          />
        </div>
        
        <div class="mb-4">
          <input
            placeholder="Repeat Password"
            type="password"
            name="password"
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            v-model="password2"
          />
        </div>

        <div class="notification"  v-if="errors.length">
          <p v-for="error in errors" :key="error" >{{ error }}</p>
        </div>

        <button
          class="flex justify-center items-center h-13 px-7 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap"
        >
          Sign up
        </button>
      </form>
    </main>
  
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUpView',

    data(){
        return {
            username: '',
            email: '',
            password: '',
            password2: '',
            errors: []
        }
    },

    methods: {
      submitForm() {

        this.errors = []

        if (this.username === '') {
                this.errors.push('The username is missing')
            }

        if (this.email === '') {
                this.errors.push('The email is missing')
            }

        if (this.password === '') {
            this.errors.push('The password is too short')
        }

        if (this.password !== this.password2) {
                this.errors.push('The passwords doesn\'t match')
        }

        if(!this.errors.length) {
            const formData = {
                username: this.username,
                password: this.password
            }

            axios
              .post("/api/v1/users/", formData)
              .then(response => {
               
                  this.$router.push('/log-in')
              })
              .catch(error => {
                  if (error.response) {
                      for (const property in error.response.data) {
                          this.errors.push(`${property}: ${error.response.data[property]}`)
                      }
                      console.log(JSON.stringify(error.response.data))
                  } else if (error.message) {
                      this.errors.push('Something went wrong. Please try again')
                      
                      console.log(JSON.stringify(error))
                  }
              })
           
          }


      }
    },

    mounted(){
      document.title = 'Sign Up | Tamu Dishes'
    }
}
</script>