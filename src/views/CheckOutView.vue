<template>

    <main class="p-5">
        <form action="" @click.prevent="submitForm()">
        <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
            <div class="flex ">
                <h1 class="title text-2xl">Checkout</h1>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-5 items-center gap-6" >
                <div class="col-span-3 bg-white p-4 rounded-lg shadow">
                    <div class="mb-6">
                    
                    <h2 class="text-xl mb-5">Shipping Details</h2>
                    <h2 class="text-xl">* All fields are required</h2>
                
                    <div class="mb-4">
                        <input
                        placeholder="Your First Name"
                        type="text"
                        name="name"
                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                        v-model="first_name"
                        />
                    </div>
                    <div class="mb-4">
                        <input
                        placeholder="Your Last Name"
                        type="text"
                        name="name"
                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                        v-model="last_name"
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
                        placeholder="Your mobile number"
                        type="text"
                        name="mobile"
                        class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                        v-model="mobile"
                        />
                    </div>
                    </div>

                    <div class="mb-6">
                    <h2 class="text-xl mb-5">Billing Address</h2>
                    <div class="flex gap-3">
                        <div class="mb-4 flex-1">
                        <input
                            placeholder="Address"
                            type="text"
                            name="billing_address_1"
                            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                            v-model="address"
                        />
                        </div>
                        <div class="mb-4 flex-1">
                        <input
                            placeholder="Address 2"
                            type="text"
                            name="billing_address_2"
                            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                            v-model="address2"
                        />
                        </div>
                    </div>
                    
                    <div class="flex gap-3">
                        <div class="mb-4 flex-1">
                        <select
                            placeholder="County"
                            type="text"
                            name="billing_country"
                            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                            v-model="county"
                        >
                            <option value="">County</option>
                            <option value="ge">Nairobi</option>
                            <option value="de">Mombasa</option>
                        </select>
                        </div>
                        <div class="mb-4 flex-1">
                        <input
                            placeholder="Postal Code"
                            type="text"
                            name="billing_zipcode"
                            class="border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-purple-500 rounded-md w-full"
                            v-model="postalcode"
                        />
                        </div>
                    </div>
                
                    </div>
                    
                </div>
                
                
                <div v-if="errors.length">
                    <p v-for="error in errors" :key="error">{{ error }}</p>
                </div>

                <hr>
                
            </div>
             <button 
                class="flex justify-center items-center h-13 px-7 mt-4 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap"
                type="submit" 
            >
                Proceed to Payment
            </button>
        </div>
        </form>
    </main>
</template>

<script>

export default {
    name: 'CheckOutView',

    data() {
        return {
            cart: {
                items: []
            },
            mpesa: {},
            card: {},
            first_name: '',
            last_name: '',
            email: '',
            mobile: '',
            address: '',
            address2: '',
            county: '',
            postalcode: '',
            errors: []
        }
    },


    methods: {

        submitForm(e) {

            this.errors = []

            if (this.first_name === '') {
                this.errors.push('The first name field is missing!')
            }

            if (this.last_name === '') {
                this.errors.push('The last name field is missing!')
            }

            if (this.email === '') {
                this.errors.push('The email field is missing!')
            }

            if (this.mobile === '') {
                this.errors.push('The mobile field is missing!')
            }
            if (this.address === '') {
                this.errors.push('The address field is missing!')
            }
            
            if (this.postalcode === '') {
                this.errors.push('The postal-code field is missing!')
       
            }

            if(this.postalcode === ''){
                this.errors.push('The mobile field is missing!')
            }else{
                
                const toPath = this.$route.query.to || '/cart/payment'
                this.$router.push(toPath)
            }

            e.preventDefault();
            
        fetch('api/v1/products/checkout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSFToken': '{{ csrf_token }}'
        },
        credentials: 'same-origin',
        body: JSON.stringify(data)
        })
        .then((response) => {
            console.log('Success')
            console.log(response)
            window.location.href = '/';
        })
        .catch(function(error){
            console.log('Error 2')
            console.log(error)
        })

        }
            
    },

    mounted() {
        document.title = 'Checkout | Cart'

        this.cart = this.$store.state.cart

    },
}
</script>
