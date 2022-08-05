<template>
     <main class="p-5">
      <form @submit.prevent="submitForm" class="w-[400px] mx-auto p-6 my-16">
        <h2 class="text-2xl font-semibold text-center mb-5">
          Login to your account
        </h2>
        <p class="text-center text-gray-500 mb-6">
          or
          <router-link
            to="/sign-up"
            class="text-sm text-purple-700 hover:text-purple-600"
            >create new account</router-link>
        </p>
        <div class="mb-4">
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Your username"
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            v-model="username"
          />
        </div>
        <div class="mb-4">
          <input
            id="loginPassword"
            type="password"
            name="password"
            placeholder="Your password"
            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
            v-model="password"
          />
        </div>

        <div class="notification" v-if="errors.length">
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
        </div>

        <div class="flex justify-between items-center mb-5">
          <div class="flex items-center">
            <input
              id="loginRememberMe"
              type="checkbox"
              class="mr-3 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
            />
            <label for="loginRememberMe">Remember Me</label>
          </div>
          <router-link to="/passwordreset" class="text-sm text-purple-700 hover:text-purple-600">
            Forgot Password?
          </router-link>
        </div>

        <hr>

        <button 
          class="flex justify-center items-center h-13 px-7 mt-5 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap">
          Log in
        </button>
      </form>
    </main>
  
</template>

<script>
import axios from 'axios'

export default {
    name: "LogInView",

    data() {
        return {
            username: '',
            password: '',
            errors: []
        }
    },

    mounted() {
        document.title = 'Log In | Tamu Dishes'
    },

    methods: {
        async submitForm() {

            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")

            const formData = {
                username: this.username,
                password: this.password
            }
    
            await axios
                .post("/api/v1/token/login/", formData)
                .then(response => {

                    const token = response.data.auth_token

                    this.$store.commit('SET_TOKEN', token)
                    
                    axios.defaults.headers.common["Authorization"] = "Token " + token

                    localStorage.setItem("token", token)

                    const toPath = this.$route.query.to || '/cart'
                    
                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }
                })
        }
    }
}
</script>

<style>

</style>