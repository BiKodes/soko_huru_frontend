<template>
  <main class="p-5">
      <div class="container mx-auto">
        <div class="grid gap-4 grid-cols-1 md:grid-cols-3">
        
          <div class="aspect-square flex items-center">
              <img :src="product.get_image" alt="" class="h-72 w-full object-cover rounded-3xl" />
            </div>
          <div class="col-span-2">
            <h1 class="text-lg font-semibold">
              {{ product.name }}
            </h1>
            <div class="text-xl font-bold mb-6"> <strong>Price:</strong> Ksh.{{ product.price }}</div>
            <div class="flex items-center mb-6">
              <div class="flex items-center text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <a
                href="#"
                class="ml-3 font-normal text-purple-600 hover:text-purple-500"
                v-if="product.get_rating !==0"
              >
                67 reviews <br>
                Stars: {{ product.get_rating }}
              </a>

              <a
                href="#"
                class="ml-3 font-normal text-purple-600 hover:text-purple-500"
                v-else
              >
                No rating yet.
              </a>
            </div>
            <div class="flex items-center justify-between mb-5">
              <label for="quantity" class="block font-bold mr-4">
                Quantity
              </label>
              <input
                type="number"
                class="w-32 focus:border-purple-500 focus:outline-none rounded"
                v-model="quantity"
              />
            </div>

            <button
              class="btn-primary py-4 text-lg flex justify-end min-w-0 w-full mb-6"
              @click="addToCart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </button>
            
            <div class="text-gray-500 mb-6 wysiwyg-content">
              <h4 class="text-lg font-medium text-black">About the meal</h4>
              <ul class="list-disc pl-6">
                <li>
                    {{ product.description }}
                </li>
              </ul>
            </div>

            <div class="text-gray-500 mb-6 wysiwyg-content" v-if="review !== 0">
              <h4 class="text-lg font-medium text-black">Reviews</h4>
                <p v-for="review in product.reviews.all" :key="review.id">
                  <strong>Date: </strong>{{ review.date_added }}
                  <strong>Stars: </strong>{{ review.stars }}
                </p>

                {{ review.content }}
            </div>

            <div class="text-gray-500 mb-6 wysiwyg-content" v-else>
              <h4 class="text-lg font-medium text-black">
                No reviews yet ...
              </h4>
            </div>

            <div id="review-form">
              <form 
              method="post" 
              class="w-[400px] mx-auto p-6 my-16"
              v-if="request.user.is_authenticated">
                <div class="field">
                  <label>Stars</label>
                  <div class="control">
                    <div class="select">
                      <select name="stars">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="2">3</option>
                        <option value="2">4</option>
                        <option value="2">5</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div id="content">
                  <label>Content</label>
                  <div>
                    <textarea name="content" cols="30" rows="10"></textarea>
                  </div>
                </div>
                <div>
                  <button>Submit</button>
                </div>
              </form>

              <div v-else>
                <p>Please sign in to add review!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name: "Product",

    data(){
        return {
            quantity: 1,
            product: {}
        }
    },
    
    methods: {
        async getProduct(){
            this.$store.commit('SET_IS_LOADING', true)

            const category_slug = this.$route.params.category_slug;
            const product_slug = this.$route.params.product_slug;

            await axios
                .get(`/api/v1/products/${category_slug}/${product_slug}`)
                .then(response => {
                  this.product = response.data

                  document.title = this.product.name + ' | Food'
                })
                .catch(error => {
                  console.log(error)
                })
              this.$store.commit('SET_IS_LOADING', false)
        },

    },

    mounted(){
        this.getProduct()
    },

    computed: {
      ...mapGetters([''])
    }
}
</script>