<template>
<div :class="sidebarOpen ? 'overflow-hidden h-screen' : ''">
 
  <nav
      class="flex justify-between py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24"
    >
      <router-link to="/" class="text-3xl md:text-4xl font-bold tracking-wide">
        Tamu <span class="text-green">Dishes</span>
      </router-link>
      
      <div
        class="inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14"
        :class="sidebarOpen ? 'fixed flex' : 'hidden'"
      >

        <div class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
          <router-link to="/" class="text-lg md:text-base lg:text-lg font-medium group" :class="activeMenu">
            Home
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

          <router-link to="/exotic" class="text-lg md:text-base lg:text-lg font-medium group">
            Foods
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

          <router-link to="/exotic" class="text-lg md:text-base lg:text-lg font-medium group">
            Honey
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

          <router-link to="/exotic" class="text-lg md:text-base lg:text-lg font-medium group">
            Unga
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

          <router-link to="/cart" class="text-lg md:text-base lg:text-lg font-medium group">
            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart ({{ getCartItems.length }}) </div>
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

          <div class="flex justify-center"
            v-if="$store.state.isAuthenticated">
            <div>
              
            </div>
          </div>

          <router-link to="/log-in" class="text-lg md:text-base lg:text-lg font-medium group"
            v-else>
            Login
            <div
              class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
            ></div>
          </router-link>

        </div>

        <div
          class="flex justify-center items-center h-13 px-4 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap"
          v-if="$store.state.isAuthenticated"
        >

          <div class="dropdown relative">
            <button
              class="
                dropdown-toggle
                py-2.5
                font-medium
                leading-tight
                uppercase
                rounded
                transition
                duration-150
                ease-in-out
                flex
                items-center
                whitespace-nowrap
              "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                My Account
              </span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
              <ul
                class="
                  bg-green
                  dropdown-menu
                  min-w-max
                  absolute
                  text-base
                  z-50
                  float-left
                  py-2
                  list-none
                  text-left
                  rounded-lg
                  shadow-lg
                  mt-1
                  hidden
                  m-0
                  bg-clip-padding
                  border-none
                "
                aria-labelledby="dropdownMenuButton1"
              >

                <li>
                  <router-link
                    to="/profile"
                    class="flex px-3 py-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    My Profile
                  </router-link>
                </li>

                <li>
                    <router-link
                      to="/watchlist"
                      class="flex items-center justify-between px-3 py-2"
                    >
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        Watchlist
                      </div>

                      <small
                        x-show="$store.header.watchlistItems"
                        x-transition
                        x-text="$store.header.watchlistItems"
                        class="py-[2px] px-[8px] rounded-full bg-red-500"
                      ></small>
                    </router-link>
                  </li>

                  <li>
                    <router-link
                      to="/orders-list"
                      class="flex px-3 py-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                      My Orders
                    </router-link>
                  </li>

                  <li>
                    <router-link
                      to="/logout"
                      class="flex px-3 py-2"
                      @click.prevent="logout()"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </router-link>
                  </li>

              </ul>
          </div>
          
        </div>
   
        <button
          class="flex justify-center items-center h-13 px-7 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap"
          v-else
        >
         <router-link to="/sign-up">
          Register
         </router-link>
        </button>

      </div>
      <button @click="sidebarOpen = !sidebarOpen" class="block md:hidden relative z-30">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-current text-gray-900" >
          <rect x="4" y="6" width="7" height="2" rx="1" />
          <rect x="13" y="16" width="7" height="2" rx="1" />
          <rect x="4" y="11" width="16" height="2" rx="1" />
        </svg>
      </button>
      
    </nav>
    
</div>
  
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Navbar",

  data() {
    return {
      sidebarOpen : false,
      activeMenu : "text-green",
      cart: {
        items: []
      }
    }
  },

  methods:{

    ...mapActions([
      'removeToken'
    ]),

    logout() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")
            this.removeToken("token")
            this.$router.push('/')
    },

  },

  computed: {
    ...mapGetters(["getCartItems"]),

  }
}

</script>
