<template>

    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
        <td>
            <img
              :src="product.get_thumbnail"
              alt=""
              class="cursor-pointer rounded-3xl hover:rotate-180 transition-transform h-72 w-full object-cover"
            />
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <router-link :to="item.get_absolute_url">{{ initialItem.name }}</router-link>
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Ksh.{{ initialItem.price }}</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {{ item.quantity }}
            <a @click="decrementQuantity(item)">-</a>
            <a @click="incrementQuantity(item)">+</a>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Ksh{{ getItemTotal(item).toFixed(2) }}
        </td>
           <td 
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            v-if="coupon_value">
            Total Cost with coupon: {{ totalCostWithCoupon }}
        </td>
        <td>
            <button class="delete text-purple-600 hover:text-purple-500"
                @click="removeFromCart(item)">Remove</button>
        </td>
    </tr>
    <hr>
    <div>
        Code value: <br>
        <input type="text" v-model="coupon_value"><br>

        Code: <br>
        <input type="text" v-model="coupon_code"><br>
        
        <button @click="applyCoupon()">Appl</button>
    </div>
  
</template>

<script>
import { mapMutations, mapActions } from 'vuex'


export default {
    name: "CartItem",
    
    props: {
        initialItem: Object
    },

    data(){
        return {
            item: this.initialItem,
            coupon_value: '',
            coupon_code: ' '
        }
    },

    methods: {

        ...mapMutations([
            'UPDATE_CART'
        ]),

        ...mapActions([
            'removeFromCart'
        ]),

        getItemTotal(item){
            return item.quantity * this.initialItem.price
        },

        decrementQuantity(item) {
            item.quantity -= 1
            if (item.quantity === 0) {
                this.removeFromCart(item)
            }
            this.UPDATE_CART()
        },

        incrementQuantity(item) {
            item.quantity += 1
            this.UPDATE_CART()
        },

        applyCoupon(){
            if(this.coupon_code !== ''){
                fetch('/api/can_use/?coupon_code=' + this.coupon_code, {
                    method: 'GET'
                })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if(data.amount){
                        this.coupon_value = parseInt(data.amount)
                    }else{
                        this.coupon_value = 0
                    }
                })
            }
        }
    },

    computed: {
        totalCostWithCoupon: function(){
            if(this.coupon_value > 0){
                return store.state.totalCost * (parseInt(this.coupon_value) /100);
            } else {
                return store.state.totalCost;
            }
        }
    }
}
</script>
